import React, { ReactElement } from 'react'
import Slideshow from '../Slideshow'

import './Page.css'
import LinkButton from "../LinkButton"

import i1 from "../../assets/emotive/emotiveHow.png"


interface Props {

}

export default function Outset(props: Props): ReactElement {
    const isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
    let fileURL = "http://localhost:2000/outset/";
    if (!isDev) fileURL = "https://willfarhat.com/outset/";

    return (
        <div className="pageHolder" id="YouTubePage">
            <div className="pageTitle">YouTube Channel</div>
            <div className="pageColumn">
                <div className="pageRow">
                    <div className="pageColumn" style={{ width: "50%" }}>
                        <div className="textBox">A channel for tech projects, game design, artwork, and anything funny that I can come up with on a semi-weekly basis.</div>
                        <div className="textBox">All videos scripted and edited by me using Kdenlive.</div>
                    </div>
                    <Slideshow >
                        <iframe src="https://www.youtube.com/embed/kjnvO49QhC0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        <img src={i1}></img>
                    </Slideshow>
                </div>
                <div className="pageRow">
                    <LinkButton link="https://www.youtube.com/channel/UCImSybcXB8pCtulA-_T0WCw?sub_confirmation=1">Subscribe!</LinkButton>
                </div>
            </div>
        </div>
    )
}
