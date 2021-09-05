import React, { ReactElement } from 'react'
import Slideshow from '../Slideshow'

import './Page.css'
import LinkButton from "../LinkButton"

import i1 from "../../assets/incLife/incLifeCharacterCustomization.png"
import i2 from "../../assets/incLife/inc life chat.png"
import i3 from "../../assets/incLife/inc life l2.png"
import i4 from "../../assets/incLife/many folks.png"
import i5 from "../../assets/incLife/many inc ppl.png"

interface Props {

}

export default function Inc(props: Props): ReactElement {
    return (
        <div className="pageHolder" id="IncPage">
            <div className="pageTitle">Inc Life</div>
            <div className="pageColumn">
                <div className="pageRow">
                    <div className="pageColumn" style={{ width: "50%" }}>
                        <div className="textBox">A multiplayer social hub, modeled after the <a href="https://hw.com" target="_blank">Harvard-Westlake</a> library.</div>
                        <div className="textBox">
                            I built Inc Life for <a href="https://inc.hw.com" target="_blank">HW Inc</a>, my shcool's annual entrepreneurship summer camp, 
                            when we were forced to take the program virtual during the Covid-19 Pandemic. 
                            The platform connects participants to coaches, Zoom rooms, and program resources.
                            It also has a number of hidden cosmetics, emotes, and an secret questline that evolved as the week of camp progressed.
                        </div>
                        <div className="textBox">
                        <ul>Tech Stack -
                                <li>Frontend: GameMaker Studio 2</li>
                                <li>Backend: AWS</li>
                            </ul>
                        </div>
                    </div>
                    <Slideshow>
                        <img src={i1}></img>
                        <img src={i2}></img>
                        <img src={i3}></img>
                        <img src={i4}></img>
                        <img src={i5}></img>
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
