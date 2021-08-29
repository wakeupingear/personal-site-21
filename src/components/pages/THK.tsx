import React, { ReactElement } from 'react'
import ImageGallery from 'react-image-gallery';

import './Page.css'
import LinkButton from "../LinkButton"

interface Props {

}

export default function THK(props: Props): ReactElement {
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
        <div className="pageHolder" id="THKPage">
            <div className="pageTitle">Tiny Headed Game</div>
            <div className="pageColumn">
                <div className="pageRow">
                    <div className="pageColumn" style={{ width: "50%" }}>
                        <div className="textBox">Explore the multiplayer open world of the <a href="https://tinyheadedkingdom.com/" target="_blank">Tiny Headed Kindom</a></div>
                        <div className="textBox">I developed this game for THK's Holdiay 2020 Campaign.</div>
                        <div className="textBox">
                            <ul>Tech Stack
                                <li>Game: Gamemaker Studio 2, JS</li>
                                <li>Backend: NodeJS, AWS Elastic Beanstalk</li>
                                <li>DB: Firebase Realtime Database</li>
                            </ul>
                        </div>
                    </div>
                    <ImageGallery items={images} />
                </div>
                <div className="pageRow">
                    <LinkButton link="http://thkgame.com">Play Now!</LinkButton>
                </div>
            </div>
        </div>
    )
}
