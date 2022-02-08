import React, { ReactElement } from 'react'

import ProjectInfo from 'components/ProjectInfo'

import i1 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_09_10 PM.png"
import i2 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_18_28 PM.png"
import i3 from "../../assets/thk/THK Client 2.3 - GameMaker Studio 2 12_15_2020 10_19_38 PM.png"
import i4 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_08_22 PM.png"
import i5 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_09_30 PM.png"
import i6 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_11_11 PM.png"
import i7 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_12_46 PM.png"
import i8 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_17_38 PM.png"
import i9 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_14_13 PM.png"
import i10 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_15_31 PM.png"
import i11 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_16_06 PM.png"
import i12 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_16_50 PM.png"
import i13 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_18_37 PM.png"
import i14 from "../../assets/thk/Tiny Headed Kingdom 12_15_2020 10_19_12 PM.png"

interface Props {

}

export default function THK(props: Props): ReactElement {
    return (
        <ProjectInfo
            id="thk"
            color="#E5B489"
            title='Tiny Headed Game'
            text={[
                <div>Explore the multiplayer open world of the <a href="https://tinyheadedkingdom.com/" target="_blank">Tiny Headed Kindom</a></div>,
                "I developed this game for THK's Holdiay 2020 Campaign. In it, you explore various areas, including a tropical ocean, a bamboo forest, and an icy mountain. Along the way, you collect new outfits, help out the local Tiny Headed animals, and solve a series of riddles to unwravel the mysteries of the land.",
                "Built with GameMaker Studio 2 and NodeJS. Deployed on AWS Elastic Beanstalk and Firebase.",
                "Fun fact: this was my first published game!"
            ]}
            images={[i1,i3,i2,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14]}
            links={[
                ["Play Now!", "http://thkgame.com"],
            ]}
            date='December 2020'
        />
    )
}
