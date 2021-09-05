import React, { ReactElement } from 'react'
import Slideshow from '../Slideshow'

import './Page.css'
import LinkButton from "../LinkButton"

import i1 from "../../assets/freehand/hands.png"

interface Props {

}

export default function Freehand(props: Props): ReactElement {
    return (
        <div className="pageHolder" id="FreehandPage">
            <div className="pageTitle">Freehand VR</div>
            <div className="pageColumn">
                <div className="pageRow">
                    <div className="pageColumn" style={{ width: "50%" }}>
                        <div className="textBox">Markerless VR hand tracking system, created in 36 hours for <a href="https://www.hw.com/hackhw/index.html" target="_blank">HackHW Spring 2019</a>.</div>
                        <div className="textBox">
                            <ul>Tech Stack -
                                <li>ML: Python/Tensorflow, CUDA</li>
                                <li>Game: C#/Unity, SteamVR</li>
                                <li>Hardware: Windows MR Headsets</li>
                            </ul>
                        </div>
                        <div className="textBox">
                            <ul>Collaborators
                                <li><a href="https://github.com/BitsByWill" target="_blank">@BitsByWill</a></li>
                                <li><a href="https://github.com/lukiebukie" target="_blank">@lukiebukie</a></li>
                                <li><a href="https://github.com/yvettejade" target="_blank">@yvettejade</a></li>
                            </ul>
                        </div>
                    </div>
                    <Slideshow >
                        <img src={i1}></img>
                        <iframe src="https://www.youtube.com/embed/ism-aDmwwI0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </Slideshow>
                </div>
                <div className="pageRow">
                    <LinkButton link="https://docs.google.com/presentation/d/1HrbUpzwM75nluZ9jZCHrM3QzYHynYORhWvgdSZP9I9E/edit?usp=sharing">Learn More</LinkButton>
                    <LinkButton link="https://github.com/freehandvr">Source Code</LinkButton>
                </div>
            </div>
        </div>
    )
}
