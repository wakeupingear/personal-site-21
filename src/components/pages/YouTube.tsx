import React, { ReactElement } from 'react'

import ProjectInfo from "components/ProjectInfo"

import i1 from "../../assets/home/portrait.png"

interface Props {

}

export default function Outset(props: Props): ReactElement {
    return (
        <ProjectInfo
            id="youTube"
            color="#C9D5FD"
            title='YouTube Channel'
            text={[
                "A channel for tech projects, game design, artwork, and anything funny that I can come up with on a vaguely weekly basis",
                "All videos scripted and edited by me in Kdenlive"
            ]}
            images={[
                i1,
                <iframe src="https://www.youtube.com/embed/kjnvO49QhC0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>,
                <iframe src="https://www.youtube.com/embed/kjnvO49QhC0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>,
            ]}
            links={[
                ["Subscribe!", "https://www.youtube.com/channel/UCImSybcXB8pCtulA-_T0WCw?sub_confirmation=1"],
            ]}
            date='January 2021'
        />
    )
}
