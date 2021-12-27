import React, { ReactElement } from 'react'
import Slideshow from '../Slideshow'

import './Page.css'
import LinkButton from "../LinkButton"

import i1 from "../../assets/emotive/emotiveHow.png"
import i2 from "../../assets/emotive/emotiveBreakout.png"
import i3 from "../../assets/emotive/demo.png"

interface Props {

}

export default function Emotive(props: Props): ReactElement {
    return (
        <div className="pageHolder" id="EmotivePage">
            <div className="pageTitle">Emotive</div>
            <div className="pageColumn">
                <div className="pageRow">
                    <div className="pageColumn" style={{ width: "50%" }}>
                        <div className="textBox">Machine learning program for sending a player's emotions into a video game, made in 24 hours for <a href="https://trojanhacks-fall-2021.devpost.com/" target="_blank">Trojan Hacks Fall 2021</a>.</div>
                        <div className="textBox">
                            <ul>Tech Stack -
                                <li>Frontend: ReactJS, Jitsi, GameMaker Studio 2</li>
                                <li>Backend: Python, OpenCV, NodeJS</li>
                            </ul>
                        </div>
                        <div className="textBox">
                            <ul>Collaborators
                                <li><a href="https://github.com/fajpaj" target="_blank">@fajpaj</a></li>
                            </ul>
                        </div>
                    </div>
                    <Slideshow >
                        <img src={i1}></img>
                        <img src={i2}></img>
                        <img src={i3}></img>
                    </Slideshow>
                </div>
                <div className="pageRow">
                    <LinkButton link="https://github.com/willf668/emotive">Source Code</LinkButton>
                </div>
            </div>
        </div>
    )
}
