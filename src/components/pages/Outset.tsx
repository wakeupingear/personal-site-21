import React, { ReactElement } from 'react'

import ProjectInfo from 'components/ProjectInfo'

interface Props {

}

export default function Outset(props: Props): ReactElement {
    const isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
    let fileURL = "http://localhost:2000/outset/";
    if (!isDev) fileURL = "https://willfarhat.com/outset/";

    const images: any[] = [
        <iframe src="https://www.youtube.com/embed/gfKm_Wfhamk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    ];
    ["a", "b", "c", "d", "e", "f", "g", "h"].forEach(letter => {
        images.push(fileURL + "screenshots/" + letter + ".png");
    });

    return (
        <ProjectInfo
            id="outset"
            color="#205E72"
            title='Outset'
            text={[
                "Use a GRAPPLING HOOK to explore a Platformer-RPG world",
                "I've been working on Outset since August 2017 using Gamemaker Studio 2. Scheduled for release in 2022."
            ]}
            images={images}
            links={[
                ["Play Now!", "https://store.steampowered.com/app/1256900/Outset/"],
                ["Learn More", "https://willfarhat.com/outset/"],
            ]}
            date='December 2020'
        />
    )
}
