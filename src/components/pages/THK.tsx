import React, { ReactElement } from 'react'
import Slideshow from '../Slideshow'

import './Page.css'
import LinkButton from "../LinkButton"

import i1 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_09_10 PM.png"
import i2 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_18_28 PM.png"
import i3 from "../../assets/thk/THK Client 2.3 - GameMaker Studio 2 12_15_2020 10_19_38 PM.png"
import i4 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_08_22 PM.png"
import i5 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_09_30 PM.png"
import i6 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_11_11 PM.png"
import i7 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_12_46 PM.png"
import i8 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_17_38 PM.png"
import i9 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_14_13 PM.png"
import i10 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_15_31 PM.png"
import i11 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_16_06 PM.png"
import i12 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_16_50 PM.png"
import i13 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_18_37 PM.png"
import i14 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_19_12 PM.png"

interface Props {

}

export default function THK(props: Props): ReactElement {
    return (
        <div className="pageHolder" id="THKPage">
            <div className="pageTitle">Tiny Headed Game</div>
            <div className="pageColumn">
                <div className="pageRow">
                    <div className="pageColumn" style={{ minWidth: "65%" }}>
                        <div id="thkAnimals">
                            <img src={i3}></img>
                        </div>
                        <div className="textBox">Explore the multiplayer open world of the <a href="https://tinyheadedkingdom.com/" target="_blank">Tiny Headed Kindom</a>.</div>
                        <div className="textBox">
                            I developed this game for THK's Holdiay 2020 Campaign.
                            In it, you explore various areas, including a tropical ocean, a bamboo forest, and an icy mountain. Along the way, you collect new outfits, help out the local Tiny Headed animals, and solve a series of riddles to unwravel the mysteries of the land.
                        </div>
                        <div className="textBox">
                            <ul>Tech Stack -
                                <li>Game: Gamemaker Studio 2, JS</li>
                                <li>Backend: NodeJS, AWS Elastic Beanstalk</li>
                                <li>DB: Firebase Realtime Database</li>
                            </ul>
                        </div>
                    </div>
                    <Slideshow >
                        <img src={i1}></img>
                        <img src={i2}></img>
                        <img src={i4}></img>
                        <img src={i5}></img>
                        <img src={i6}></img>
                        <img src={i7}></img>
                        <img src={i8}></img>
                        <img src={i9}></img>
                        <img src={i10}></img>
                        <img src={i11}></img>
                        <img src={i12}></img>
                        <img src={i13}></img>
                        <img src={i14}></img>
                    </Slideshow>
                </div>
                <div className="pageRow">
                    <LinkButton link="http://thkgame.com">Play Now!</LinkButton>
                </div>
            </div>
        </div>
    )
}
