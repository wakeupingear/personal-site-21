import React, { ReactElement } from 'react'

import ProjectInfo from 'components/ProjectInfo'

import i1 from "../../assets/remotion/benefits.png"
import i2 from "../../assets/remotion/games.png"

interface Props {

}

export default function CFE(props: Props): ReactElement {
    return (
        <ProjectInfo
            id="remotion"
            color="#293990"
            title='Remotion'
            text={[
                <div>Positional body tracking for 2D games, created in 36 hours for <a href="https://www.hw.com/hackhw/index.html" target="_blank">HackHW Fall 2019</a></div>,
                "The system uses two webcams, one in front of a play space and one to the side, to track your position in two axes. Using a simple OpenCV positional tracking model, the player's position on a 2D grid can be found, within 3cm of accuracy. The resulting coordinates are sent over a local server to the game client in real time.",
                "Built with Python, OpenCV, and GameMaker Studio 2"
            ]}
            images={[i1, i2]}
            links={[
                ["Learn More", "https://docs.google.com/presentation/d/1peyDdFdO-PX4OWXvgIV0yTC6snX3P-mz8nkTCC_MoaY/edit?usp=sharing"],
            ]}
            date='November 2019'
        />
    )
}
