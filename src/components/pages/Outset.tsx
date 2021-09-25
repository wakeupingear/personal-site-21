import React, { ReactElement } from 'react'
import Slideshow from '../Slideshow'

import './Page.css'
import LinkButton from "../LinkButton"


interface Props {

}

export default function Outset(props: Props): ReactElement {
    const isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
    let fileURL = "http://localhost:2000/outset/";
    if (!isDev) fileURL = "https://willfarhat.com/outset/";

    return (
        <div className="pageHolder" id="OutsetPage">
            <div className="pageTitle">Outset</div>
            <div className="pageColumn">
                <div className="pageRow">
                    <div className="pageColumn" style={{ width: "50%" }}>
                        <div className="textBox">Use a GRAPPLING HOOK to explore a Platformer-RPG world.</div>
                        <div className="textBox">I've been working on Outset since August 2017 using Gamemaker Studio 2. Scheduled for release in 2022.</div>
                    </div>
                    <Slideshow >
                        <iframe src="https://www.youtube.com/embed/gfKm_Wfhamk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        <img src={fileURL+"screenshots/a.png"}></img>
                        <img src={fileURL+"screenshots/b.png"}></img>
                        <img src={fileURL+"screenshots/c.png"}></img>
                        <img src={fileURL+"screenshots/d.png"}></img>
                        <img src={fileURL+"screenshots/e.png"}></img>
                        <img src={fileURL+"screenshots/f.png"}></img>
                        <img src={fileURL+"screenshots/g.png"}></img>
                        <img src={fileURL+"screenshots/h.png"}></img>
                    </Slideshow>
                </div>
                <div className="pageRow">
                    <LinkButton link="https://willfarhat.com/outset/">Learn More</LinkButton>
                    <LinkButton link="https://store.steampowered.com/app/1256900/Outset/">Play Now!</LinkButton>
                </div>
            </div>
        </div>
    )
}
