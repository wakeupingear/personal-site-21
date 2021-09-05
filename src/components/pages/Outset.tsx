import React, { ReactElement } from 'react'
import Slideshow from '../Slideshow'

import './Page.css'
import LinkButton from "../LinkButton"

import i1 from "../../assets/outset/a.png"
import i2 from "../../assets/outset/b.png"
import i3 from "../../assets/outset/c.png"
import i4 from "../../assets/outset/d.png"
import i5 from "../../assets/outset/e.png"
import i6 from "../../assets/outset/f.png"
import i7 from "../../assets/outset/g.png"
import i8 from "../../assets/outset/h.png"


interface Props {

}

export default function Outset(props: Props): ReactElement {
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
                        <img src={i1}></img>
                        <img src={i2}></img>
                        <img src={i3}></img>
                        <img src={i4}></img>
                        <img src={i5}></img>
                        <img src={i6}></img>
                        <img src={i7}></img>
                        <img src={i8}></img>
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
