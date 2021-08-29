import React, { ReactElement } from 'react'
import ImageGallery from 'react-image-gallery';

import './Page.css'
import LinkButton from "../LinkButton"

interface Props {

}

export default function Freehand(props: Props): ReactElement {
    //https://github.com/xiaolin/react-image-gallery
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];


    return (
        <div className="pageHolder" id="FreehandPage">
            <div className="pageTitle">Freehand VR</div>
            <div className="pageColumn">
                <div className="pageRow">
                    <div className="pageColumn" style={{ width: "50%" }}>
                        <div className="textBox">Markerless VR hand tracking system, created in 36 hours for <a href="https://www.hw.com/hackhw/index.html" target="_blank">HackHW Spring 2019</a>.</div>
                        <div className="textBox">
                            <ul>Tech Stack
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
                    <ImageGallery items={images} />
                </div>
                <div className="pageRow">
                    <LinkButton link="https://docs.google.com/presentation/d/1HrbUpzwM75nluZ9jZCHrM3QzYHynYORhWvgdSZP9I9E/edit?usp=sharing">Learn More</LinkButton>
                    <LinkButton link="https://github.com/freehandvr">Source Code</LinkButton>
                </div>
            </div>
        </div>
    )
}
