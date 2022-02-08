import React, { ReactElement } from 'react'

import ProjectInfo from 'components/ProjectInfo'

import i1 from "../../assets/emotive/emotiveHow.png"
import i2 from "../../assets/emotive/emotiveBreakout.png"
import i3 from "../../assets/emotive/demo.png"

interface Props {

}

export default function Emotive(props: Props): ReactElement {
    return (
        <ProjectInfo
            id="emotive"
            color="#352957"
            title='Emotive'
            text={[
                <div>Machine learning program for sending a player's emotions into a video game, made in 24 hours for <a href="https://trojanhacks-fall-2021.devpost.com/" target="_blank">Trojan Hacks Fall 2021</a></div>,
                "Built with React, NodeJS, OpenCV, Python, and GameMaker Studio 2"
            ]}
            collaborators={[
                ["Will Farhat", "Frontentd + ML"],
                ["Levi Pinkert", "Game Design + Programming", "https://levipinkert.wixsite.com/portfolio"],
            ]}
            images={[i1, i2, i3]}
            links={[
                ["Source Code","https://github.com/willf668/emotive"],
            ]}
            date='November 2021'
        />
    )
}
