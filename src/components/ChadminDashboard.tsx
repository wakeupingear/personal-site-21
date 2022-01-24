import { ReactElement, useState } from 'react'

import CopyCard from './chadminCards/CopyCard';
import LinkCard from './chadminCards/LinkCard';
import UploadCard from './chadminCards/UploadCard';
import DailyArt from './chadminCards/DailyArt';
import ContactCard from './chadminCards/ContactCard';

interface Props {

}

export default function ChadminDashboard({ }: Props): ReactElement {
    const [date, setDate] = useState(new Date());

    const secretContent = [
        ["IP", "$","ip"],
        ["GitHub Token", "$","github"],
        ["USC ID", "$","uscID"],
        ["SSN", "$","ssn"],
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
                <UploadCard classColor='chadminBlue' path='files' title='Public Files' />
                <UploadCard classColor='chadminBlue' path='chadmin/files' title='Private Files' />
                <DailyArt classColor='chadminOrange'/>
                <ContactCard classColor='chadminRed' />
            </div>
        </div>
    )
}
