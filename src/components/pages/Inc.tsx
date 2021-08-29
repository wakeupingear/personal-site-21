import React, { ReactElement } from 'react'
import ImageGallery from 'react-image-gallery';

import './Page.css'
import LinkButton from "../LinkButton"

interface Props {

}

export default function Inc(props: Props): ReactElement {
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
        <div className="pageHolder" id="IncPage">
            <div className="pageTitle">Inc Life</div>
            <div className="pageColumn">
                <div className="pageRow">
                    <div className="pageColumn" style={{width:"50%"}}>
                        <div className="textBox">Use a GRAPPLING HOOK to explore a Platformer-RPG world.</div>
                        <div className="textBox">I've been working on Outset since August 2017 using Gamemaker Studio 2. Scheduled for release in 2022.</div>
                    </div>
                    <ImageGallery items={images} />
                </div>
                <div className="pageRow">
                    <LinkButton link="https://willfarhat.com/outset/">Learn More</LinkButton>
                    <LinkButton link="https://store.steampowered.com/app/1256900/Outset/">Play Now!</LinkButton>
                </div>
            </div>
        </div>
    )
}
