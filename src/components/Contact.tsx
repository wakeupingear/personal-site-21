import React, { ReactElement, useState } from 'react'

import ClickCopy from './ClickCopy';

interface Contact {
    name: string,
    emails?: string[],
    socials?: string[],
    numbers?: string[],
    aliases?: string[],
    addresses: string[],
    [className: string]: any,
}

export default function Contact(props: Contact): ReactElement {
    const [open, setOpen] = useState(false);
    const categoryMap: any = {
        emails: ["Email", "Emails"],
        socials: ["Social", "Socials"],
        numbers: ["Number", "Numbers"],
        aliases: ["AKA", "AKA"],
        addresses: ["Address", "Addresses"],
    }
    return (
        <div className='contactCard'>
            <h1 className='clickable contactTitle' onClick={() => setOpen(!open)}>{props.name}</h1>
            {open ? <div className="contactFields">
                {Object.keys(props).map(function (key: string) {
                    if (key === "name") return;
                    return (
                        <div className='contactCategory'>
                            {(true) ? null : <h2 className='contactTitle'>{(props[key].length == 1) ? categoryMap[key][0] : categoryMap[key][1]}: </h2>}
                            {props[key].map((item: string) => {
                                return (
                                    <ClickCopy text={item}>{item}</ClickCopy>
                                )
                            })}
                        </div>
                    )
                })}
            </div> : null}
        </div>
    )
}
