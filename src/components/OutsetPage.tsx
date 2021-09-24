import React, { ReactElement } from 'react'
import { Helmet } from 'react-helmet'

import Favicon from 'react-favicon'
import '../assets/CSS/Outset.css'
import OutsetTextbox from './OutsetTextbox'

interface Props {

}

export default function OutsetPage(props: Props): ReactElement {
    const isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
    let fileURL = "http://localhost:2000/outset/";
    if (!isDev) fileURL = "https://willfarhat.com/outset/"
    return (
        <div id="outsetSite">
            <Favicon url={fileURL + "favicon.ico"} />
            <Helmet>
                <title>Outset</title>
            </Helmet>
            <div id="outsetBGLayer">
                <img id="outsetGradient" src={fileURL + "gradient.png"} />
                <div id="outsetBG">
                    <img src={fileURL + "g1.png"} />
                    <img src={fileURL + "g2.png"} />
                </div>
                <img className="outsetSprite" src={fileURL + "ground.png"} />
                <a href="https://store.steampowered.com/app/1256900/Outset/" target="_blank">
                    <img className="outsetSprite" src={fileURL + "title.png"} />
                </a>
            </div>
            <div id="outsetElementLayer">
                <OutsetTextbox>
                    Hi! I'm Will Farhat, a software developer and designer.
                </OutsetTextbox>
                <div className="clickable" id="outsetFooterText">
                    <a href="https://willfarhat.com" target="_blank">Made by Will Farhat</a>
                </div>
            </div>
        </div>
    )
}
