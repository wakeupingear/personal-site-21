import React, { ReactElement } from 'react'
import ImageGallery from 'react-image-gallery';

import './Page.css'
import LinkButton from "../LinkButton"

interface Props {

}

export default function CFE(props: Props): ReactElement {
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
        <div className="pageHolder" id="CFEPage">
            <div className="pageTitle">Coffeehouse</div>
            <div className="pageColumn">
                <div className="pageRow">
                    <div className="pageColumn" style={{ width: "50%" }}>
                        <div className="textBox">WebRTC P2P video calling, created in 36 hours for <a href="https://www.hw.com/hackhw/index.html" target="_blank">HackHW 2021</a>.</div>
                        <div className="textBox">
                            <ul>Tech Stack
                                <li>Frontend: ReactJS, NextJS, WebRTC</li>
                                <li>Backend: NodeJS, Netlify</li>
                            </ul>
                        </div>
                        <div className="textBox">
                            <ul>Collaborators
                                <li><a href="https://kosinw.com/" target="_blank">@kosinw</a></li>
                                <li><a href="https://github.com/lukiebukie" target="_blank">@lukiebukie</a></li>
                            </ul>
                        </div>
                    </div>
                    <ImageGallery items={images} />
                </div>
                <div className="pageRow">
                    <LinkButton link="https://docs.google.com/presentation/d/1HrbUpzwM75nluZ9jZCHrM3QzYHynYORhWvgdSZP9I9E/edit?usp=sharing">Learn More</LinkButton>
                    <LinkButton link="https://github.com/willf668/hackhw21Backend">Source Code</LinkButton>
                    <LinkButton link="https://store.steampowered.com/app/1256900/Outset/">Demo</LinkButton>
                </div>
            </div>
        </div>
    )
}
