import React, { ReactElement, useState } from 'react'

import Card from "./Card"
import LinkButton from './LinkButton'

import { setAPIFromData } from '../scripts/API'

interface Props {

}

export default function ChadminDashboard({ }: Props): ReactElement {
    const [ip, setIP] = useState();
    const [dailyArt, setArt] = useState();
    const [date, setDate] = useState(new Date());

    setAPIFromData("ip", setIP);

    return (
        <div id="Chadmin">
            <div id="chadminTitle">{date.toLocaleDateString()}</div>
            <div id="chadminGrid">
                <Card content="ssh" type={1}>
                    <h1>Terminal</h1>
                    <p>ssh pi@{ip}</p>
                </Card>
                <Card content="journal">
                    <h1>Journal</h1>
                </Card>
                <Card content="art">
                    <h1>Daily Art</h1>
                    <img id="dailyArt" src={dailyArt}></img>
                    <LinkButton link="https://github.com/freehandvr">Upload</LinkButton>
                </Card>
                <Card content="homework" type={2}>

                </Card>
            </div>
        </div>
    )
}
