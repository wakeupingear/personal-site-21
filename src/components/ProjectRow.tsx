import React, { cloneElement, ReactElement, useState } from 'react'

import ProjectPage from './ProjectPage';

import Outset from './pages/Outset'

interface Props {
    children: ReactElement[]
}

export default function ProjectRow(props: Props): ReactElement {
    const [classList, setClassList] = useState("expandedPage pageAnimation");
    const [pageData, setPageData] = useState(<div></div>);
    const [pageID, setPageID] = useState("");

    let page: ReactElement = <div className={classList}>{pageData}</div>;

    function loadContent(id: string) {
        switch (id) {
            case "Outset": return Outset;
            default: return Outset;
            //default: throw new Error(".TSX not found");
        }
    }

    function buttonClicked(id: string): void {
        let isActive: boolean = (classList.includes("opening"));
        const opened: boolean = (pageID === id);
        if (isActive) {
            if (opened) { //click to close
                setClassList(classList.replace(" opening", "") + " closing");
                setPageID("");
            }
            else { //switch content
                setPageData(loadContent(id));
                setPageID(id);
            }
        }
        else {
            setClassList(classList.replace(" closing", "") + " opening");
            setPageData(loadContent(id));
            setPageID(id);
        }
    }

    return (
        <div className="column">
            <div className="row">
                {props.children.map(function (element) {
                    return (cloneElement(
                        element,
                        { buttonClicked: buttonClicked }
                    ));
                })}
            </div>
            {page}
        </div>
    )
}
