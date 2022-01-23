import React, { ReactElement, useState } from 'react'
import Contact from '../Contact'

import { setAPIFromData } from '../../scripts/API';
import { ScrollTo } from '../../scripts/ScrollTo'

import TextField, { Input } from '@material/react-text-field';

interface Props {
    classColor: string,
}

interface Contact {
    name: string,
    emails?: string[],
    socials?: string[],
    numbers?: string[],
    aliases?: string[],
    addresses: string[],
}

export default function ContactCard(props: Props): ReactElement {
    const [data, setData] = useState([]);
    const [state, setState] = useState("");
    return (
        <div className={"chadminCard " + props.classColor} >
            <div className='chadminCardTitle' id="contactCard">Contacts</div>
            <TextField>
                <Input
                    value={state}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setState(e.currentTarget.value);
                        setAPIFromData("contacts/search/" + e.currentTarget.value.toLowerCase().trim(), setData);
                        setTimeout(() => {
                            ScrollTo("contactCard");
                        }, 50);
                    }} />
            </TextField>
            {(data.length === 0) ? null :
                <div id="contactList">
                    {data.map((user: Contact) => {
                        return (
                            <Contact {...user} />
                        )
                    })}
                </div>
            }
        </div>
    )
}
