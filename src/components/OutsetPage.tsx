import React, { ReactElement } from 'react'
import { Helmet } from 'react-helmet'

import Favicon from 'react-favicon'
import '../assets/CSS/Outset.css'
import OutsetTextbox from './OutsetTextbox'

import Slideshow from './Slideshow'

interface Props {

}

export default function OutsetPage(props: Props): ReactElement {
    const isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
    let fileURL = "http://localhost:2000/outset/";
    if (!isDev) fileURL = "https://willfarhat.com/outset/";
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
                <div id="outsetGroup1" className="outsetGroup">
                    <OutsetTextbox profile={fileURL + "harold.png"}>
                        Use a GRAPPLING HOOK to explore and uncover the mysteries of a vast, interconnceted world.
                    </OutsetTextbox>
                    <div className="outsetSlideshow">
                        <Slideshow>
                            <iframe src="https://www.youtube.com/embed/gfKm_Wfhamk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            <img src={fileURL + "screenshots/a.png"}></img>
                            <img src={fileURL + "screenshots/b.png"}></img>
                            <img src={fileURL + "screenshots/c.png"}></img>
                            <img src={fileURL + "screenshots/d.png"}></img>
                            <img src={fileURL + "screenshots/e.png"}></img>
                            <img src={fileURL + "screenshots/f.png"}></img>
                            <img src={fileURL + "screenshots/g.png"}></img>
                            <img src={fileURL + "screenshots/h.png"}></img>
                        </Slideshow>
                    </div>
                    <OutsetTextbox>
                        Play Chapter 1 for free now!
                    </OutsetTextbox>
                    <div>
                        <iframe src="https://store.steampowered.com/widget/1256900/" id="outsetSteam"></iframe>
                    </div>
                </div>
                <div id="outsetCoreLink" className="clickable">
                    <a href="https://willfarhat.com" target="_blank">
                        <img src={fileURL + "discord.png"} />
                    </a>
                </div>
                <div id="outsetGroup2" className="outsetGroup">
                    <OutsetTextbox>
                        The Story so far...
                    </OutsetTextbox>
                    <OutsetTextbox profile={fileURL+"harold.png"}>
                        JUST PLAY THE DEMO, COMRADE!
                    </OutsetTextbox>
                </div>
                <div className="clickable" id="outsetFooterText">
                    <a href="https://willfarhat.com" target="_blank">A Game by Will Farhat</a>
                </div>
            </div>
        </div>
    )
}
