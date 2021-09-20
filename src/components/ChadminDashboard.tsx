import React, { ReactElement, useState } from 'react'

import Card from "./Card"

import { setAPIFromData } from '../scripts/API'

interface Props {

}

export default function ChadminDashboard({ }: Props): ReactElement {
    const [date, setDate] = useState(new Date());

    return (
        <div id="Chadmin">
            <div id="chadminTitle">{date.toLocaleDateString()}</div>
            <div id="chadminGrid">
                <Card content="ip" type={1}>
                </Card>
                <Card content="journal">
                    <h1>Journal</h1>
                </Card>
                <Card type={2} content="art" path='../../assets/upload.png'>
                    <h1>Art</h1>
                </Card>
                <Card content="homework" link="https://myhomeworkapp.com/">
                    <h1>Homework</h1>
                </Card>
                <Card type={3} content="files" path='../../assets/upload.png'>
                    <h1>Drive</h1>
                </Card>
            </div>
        </div>
    )
}
