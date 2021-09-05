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

interface Props {
    rowID: string,
    children: ReactElement[] | ReactElement
    bottom?: boolean
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

    //scroll to a clicked element
    function scrollTo(element: string) {
        const elementToScrollTo = document.getElementById(element);
        if (elementToScrollTo !== null && !isPortrait) {
            setTimeout(() => {
                let y: number | undefined = elementToScrollTo.offsetTop + elementToScrollTo.clientHeight;
                window.scrollTo({
                    top: y,
                    left: 0,
                    behavior: "smooth",
                });
            }, 80);
        }
    }

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
                setOpen(false);
                setClassList(classList.replace(" opening", "") + " closing");
                //setPageID("");
                //setPageData(<div></div>);
            }
            else { //switch content
                setOpen(true);
                setPageData(loadContent(id));
                setPageID(id);
                scrollTo(props.rowID);
            }
        }
        else {
            setOpen(true);
            setClassList(classList.replace(" closing", "") + " opening");
            setPageData(loadContent(id));
            setPageID(id);
            scrollTo(props.rowID);
        }
    }

    //let page: ReactElement = <Collapse isOpened={isOpened} className={classList}><CloseButton id="" onclick={buttonClicked} />{pageData}</Collapse>;
    let page: ReactElement = <Collapse isOpened={isOpened} className={classList}>{pageData}</Collapse>;
    let classes: string = "column";
    //if (props.bottom !== undefined) classes+=" bottomRow";

    return (
        <div className={classes}>
            <div className="row" id={props.rowID}>
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
