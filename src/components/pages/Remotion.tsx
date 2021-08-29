import React, { ReactElement } from 'react'
import ImageGallery from 'react-image-gallery';

import './Page.css'
import LinkButton from '../LinkButton'

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
        <div className="pageHolder" id="RemotionPage">
            <div className="pageTitle">Remotion</div>
            <div className="pageColumn">
                <div className="pageRow">
                    <div className="pageColumn" style={{ width: "50%" }}>
                        <div className="textBox">WebRTC P2P video calling, created in 36 hours for <a href="https://www.hw.com/hackhw/index.html" target="_blank">HackHW Fall 2019</a>.</div>
                        <div className="textBox">
                            <ul>Tech Stack
                                <li>ML: Python/Tensorflow</li>
                                <li>Game: Gamemaker Studio 2</li>
                            </ul>
                        </div>
                    </div>
                    <ImageGallery items={images} />
                </div>
                <div className="pageRow">
                    <LinkButton link="https://docs.google.com/presentation/d/1HrbUpzwM75nluZ9jZCHrM3QzYHynYORhWvgdSZP9I9E/edit?usp=sharing">Learn More</LinkButton>
                    <LinkButton link="https://github.com/willf668/hackhw21Backend">Source Code</LinkButton>
                </div>
            </div>
        </div>
    )
}
