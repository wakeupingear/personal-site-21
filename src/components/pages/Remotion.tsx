import React, { ReactElement } from 'react'
import Slideshow from '../Slideshow'

import './Page.css'
import LinkButton from "../LinkButton"

import i1 from "../../assets/remotion/benefits.png"
import i2 from "../../assets/remotion/games.png"

interface Props {

}

export default function CFE(props: Props): ReactElement {
    return (
        <div className="pageHolder" id="RemotionPage">
            <div className="pageTitle">Remotion</div>
            <div className="pageColumn">
                <div className="pageRow">
                    <div className="pageColumn" style={{ width: "50%" }}>
                        <div className="textBox">Positional body tracking for 2D games, created in 36 hours for <a href="https://www.hw.com/hackhw/index.html" target="_blank">HackHW Fall 2019</a>.</div>
                        <div className="textBox">
                            The system uses two webcams, one in front of a play space and one to the side, to track your position in two axes. Using a simple OpenCV positional tracking model, the player's position on a 2D grid can be found, within 3cm of accuracy. The resulting coordinates are sent over a local server to the game client in real time.
                        </div>
                        <div className="textBox">
                            <ul>Tech Stack -
                                <li>ML: Python/Tensorflow</li>
                                <li>Game: Gamemaker Studio 2</li>
                            </ul>
                        </div>
                    </div>
                    <Slideshow >
                        <img src={i1}></img>
                        <img src={i2}></img>
                    </Slideshow>
                </div>
                <div className="pageRow">
                    <LinkButton link="https://docs.google.com/presentation/d/1peyDdFdO-PX4OWXvgIV0yTC6snX3P-mz8nkTCC_MoaY/edit?usp=sharing">Learn More</LinkButton>
                    <LinkButton link="https://github.com/willf668/hackhw21Backend">Source Code</LinkButton>
                </div>
            </div>
        </div>
    )
}
