import React, { ReactElement } from 'react'

import './Page.css'
import ProjectInfo from '../ProjectInfo'

import i1 from "../../assets/incLife/incLifeCharacterCustomization.png"
import i2 from "../../assets/incLife/inc life chat.png"
import i3 from "../../assets/incLife/inc life l2.png"
import i4 from "../../assets/incLife/many folks.png"
import i5 from "../../assets/incLife/many inc ppl.png"

interface Props {

}

export default function Inc(props: Props): ReactElement {
    return (
        <ProjectInfo
            id="inc"
            color="#9E1D21"
            title='Inc Life'
            text={[
                <div>A multiplayer social hub, modeled after the <a href="https://hw.com" target="_blank">Harvard-Westlake</a> library</div>,
                <div>I built Inc Life for <a href="https://inc.hw.com" target="_blank">HW Inc</a>, my high school's annual entrepreneurship summer camp,
                    when we were forced to take the program virtual during the Covid-19 Pandemic.
                    The platform connects participants to coaches, Zoom rooms, and program resources.
                    It also has a number of hidden cosmetics, emotes, and an secret questline that evolved as the week of camp progressed.</div>,
                "Built with GameMaker Studio 2, deployed on AWS"
            ]}
            images={[i1, i2, i3, i4, i5]}
            links={[
                ["Play Now!", "https://gamejolt.com/games/inclife/501764"],
            ]}
            date='June 2020'
        />
    )
}
