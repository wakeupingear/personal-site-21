import React, { cloneElement, ReactElement, useState } from 'react';
import { Collapse } from 'react-collapse';
import { useMediaQuery } from 'react-responsive';

//import CloseButton from './CloseButton';

import Outset from './pages/Outset'
import CFE from './pages/CFE'
import Freehand from './pages/Freehand'
import Remotion from './pages/Remotion'
import THK from './pages/THK'
import Jam from './pages/Jam'
import Inc from './pages/Inc'
import Emotive from './pages/Emotive'
import Research from './pages/Research'
import YouTube from './pages/YouTube'
import Will from './pages/Will'

import { ScrollTo } from '../scripts/ScrollTo'

interface Props {
    rowID: string,
    children: ReactElement[] | ReactElement
}

export default function ProjectRow(props: Props): ReactElement {
    const [classList, setClassList] = useState("expandedPage pageAnimation");
    const [pageData, setPageData] = useState(<div></div>);
    const [pageID, setPageID] = useState("");
    const [isOpened, setOpen] = useState(false);

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

    function loadContent(id: string) {
        switch (id) {
            case "cfe": return CFE;
            case "freehand": return Freehand;
            case "remotion": return Remotion;
            case "thk": return THK;
            case "jam": return Jam;
            case "inc": return Inc;
            case "emotive": return Emotive;
            case "research": return Research;
            case "youtube": return YouTube;
            case "will": return Will;
            default: return Outset;
            //default: throw new Error(".TSX not found");
        }
    }

    function buttonClicked(id: string): void {
        let isActive: boolean = (classList.includes("opening"));
        const opened: boolean = (pageID === id || id === "");
        if (isActive) {
            if (opened) { //click to close
                setOpen(false);
                setClassList(classList.replace(" opening", "") + " closing");
                //setPageID("");
                //setPageData(<div></div>);
            }
            else { //switch content
                setOpen(true);
                setPageData(loadContent(id));
                setPageID(id);
                ScrollTo(props.rowID, isPortrait);
            }
        }
        else {
            setOpen(true);
            setClassList(classList.replace(" closing", "") + " opening");
            setPageData(loadContent(id));
            setPageID(id);
            ScrollTo(props.rowID, isPortrait);
        }
    }

    //let page: ReactElement = <Collapse isOpened={isOpened} className={classList}><CloseButton id="" onclick={buttonClicked} />{pageData}</Collapse>;
    let page: ReactElement = <Collapse isOpened={isOpened} className={classList}>{pageData}</Collapse>;
    let classes: string = "column";

    function createPreview(element: ReactElement): ReactElement {
        return cloneElement(
            element,
            { onclick: buttonClicked }
        );
    }

    return (
        <div className={classes}>
            <div className="row" id={props.rowID}>
                {(Array.isArray(props.children)) ? props.children.map(function (element) {
                    return createPreview(element);
                }) : createPreview(props.children)}
            </div>
            {page}
        </div>
    )
}
