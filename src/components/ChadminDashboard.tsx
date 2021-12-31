import React, { ReactElement, useState } from 'react'

import Card from "./chadminCards/Card"
import CopyCard from './chadminCards/CopyCard';
import LinkCard from './chadminCards/LinkCard';
import DriveCard from './chadminCards/UploadCard';
import ContactCard from './chadminCards/ContactCard';

import { setAPIFromData } from '../scripts/API'

interface Props {

}

export default function ChadminDashboard({ }: Props): ReactElement {
    const [date, setDate] = useState(new Date());

    const secretContent = [
        ["IP", "$","ip"],
        ["GitHub Token", "$","github"],
    ];

    const commands = [
        ["Router Login","ssh pi@$ -L 12345:192.168.1.1:80","ip"]
    ]

    return (
        <div id="Chadmin">
            <div id="chadminTitle">{date.toLocaleDateString()}</div>
            <div id="chadminGrid">
                <CopyCard classColor='chadminGreen' title="Secret Info" content={secretContent} />
                <LinkCard classColor='chadminBlue' />
                <CopyCard classColor='chadminGreen' title="Commands" content={commands} />
                <DriveCard classColor='chadminBlue' path='files' title='Public Files' />
                <DriveCard classColor='chadminBlue' path='chadmin/files' title='Private Files' />
                <ContactCard classColor='chadminRed' />
            </div>
        </div>
    )
}
