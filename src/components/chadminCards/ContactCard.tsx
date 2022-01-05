import React, { ReactElement, useState, useEffect, useRef } from 'react'
import Contact from '../Contact'

import { setAPIFromData } from '../../scripts/API'
import { getAPIAuth } from '../../scripts/APIAuth'
import { getAPIUrl } from '../../scripts/APIUrl'

import TextField, { HelperText, Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

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
            <div className='chadminCardTitle'>Contacts</div>
            <TextField>
                <Input
                    value={state}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setState(e.currentTarget.value);
                        setAPIFromData("contacts/search/" + e.currentTarget.value.toLowerCase().trim(), setData);
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
