import React, { cloneElement, ReactElement, useState } from 'react'

import CloseButton from './CloseButton';

import Outset from './pages/Outset'
import CFE from './pages/CFE'
import Freehand from './pages/Freehand'
import Remotion from './pages/Remotion'
import THK from './pages/THK'
import Jam from './pages/Jam'
import Inc from './pages/Inc'

interface Props {
    children: ReactElement[] | ReactElement
}

export default function ProjectRow(props: Props): ReactElement {
    const [classList, setClassList] = useState("expandedPage pageAnimation");
    const [pageData, setPageData] = useState(<div></div>);
    const [pageID, setPageID] = useState("");

    function loadContent(id: string) {
        switch (id) {
            case "CFE": return CFE;
            case "Freehand": return Freehand;
            case "Remotion": return Remotion;
            case "THK": return THK;
            case "Jam": return Jam;
            case "Inc": return Inc;
            default: return Outset;
            //default: throw new Error(".TSX not found");
        }
    }

    function buttonClicked(id: string): void {
        let isActive: boolean = (classList.includes("opening"));
        const opened: boolean = (pageID === id || id === "");
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

    let page: ReactElement = <div className={classList}><CloseButton id="" onclick={buttonClicked} />{pageData}</div>;

    return (
        <div className="column">
            <div className="row">
                {(Array.isArray(props.children)) ? props.children.map(function (element) {
                    return (cloneElement(
                        element,
                        { onclick: buttonClicked }
                    ));
                }) : props.children}
            </div>
            {page}
        </div>
    )
}
