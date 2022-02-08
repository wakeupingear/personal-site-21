import React, { ReactElement } from 'react'

import ProjectInfo from 'components/ProjectInfo'

import i1 from "../../assets/freehand/hands.png"

interface Props {

}

export default function Freehand(props: Props): ReactElement {
    const images:any[] = [
        <iframe src="https://www.youtube.com/embed/ism-aDmwwI0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>,
        i1
    ]

    return (
        <ProjectInfo
            id="black"
            color="#51464F"
            title='Freehand VR'
            text={[
                <div>Markerless VR hand tracking system, created in 36 hours for <a href="https://www.hw.com/hackhw/index.html" target="_blank">HackHW Spring 2019</a></div>,
                "Built with Python, TensorFlow, Unity, C#, and the Mixed Reality Toolkit"
            ]}
            images={images}
            collaborators={[
                ["Will Liu", "Hand Tracking","https://github.com/BitsByWill"],
                ["Lukas Seklir", "ML Training", "https://github.com/lukiebukie"],
                ["Yvette Copeland", "Positional Tracking", ],
                ["Will Farhat", "Unity Development", "https://github.com/yvettejade"]
            ]}
            links={[
                ["Learn More", "https://docs.google.com/presentation/d/1HrbUpzwM75nluZ9jZCHrM3QzYHynYORhWvgdSZP9I9E/edit?usp=sharing"],
                ["Source Code", "https://github.com/freehandvr"],
            ]}
            date='March 2019'
        />
    )
}
