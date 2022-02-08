import React, { ReactElement } from 'react'
import Slideshow from '../Slideshow'

import './Page.css'
import ProjectInfo from 'components/ProjectInfo'

import i1 from "../../assets/cfe/3person.png"
import i2 from "../../assets/cfe/music.png"
import i3 from "../../assets/cfe/demo.png"
import i4 from "../../assets/cfe/theBoys.png"

interface Props {

}

export default function CFE(props: Props): ReactElement {
    //<a href="https://kosinw.com/" target="_blank">@kosinw</a></li>
    //<li><a href="https://github.com/lukiebukie" target="_blank">@lukiebukie</a>
    return (
        <ProjectInfo
            id="cfe"
            color="#808080"
            title='Coffeehouse'
            text={[
                <div>WebRTC P2P video calling with synced music production tools, created in 36 hours for <a href="https://www.hw.com/hackhw/index.html" target="_blank">HackHW 2021</a>.</div>,
                "Built with NextJS, WebRTC, and NodeJS"
            ]}
            collaborators={[
                ["Kosi Nwabueze","Frontend", "https://kosinw.com/"],
                ["Will Farhat", "Backend"],
                ["Lukas Seklir","Music Encoding", "https://github.com/lukiebukie"]
            ]}
            images={[i1, i2, i3, i4]}
            links={[
                ["Learn More","https://docs.google.com/presentation/d/1HrbUpzwM75nluZ9jZCHrM3QzYHynYORhWvgdSZP9I9E/edit?usp=sharing"],
                ["Source Code","hhttps://github.com/willf668/hackhw21Backend"]
            ]}
            date='April 2020'
        />
    )
}
