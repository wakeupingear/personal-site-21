import React, { ReactElement } from 'react'

interface Props {
    children: string,
    text: string,
}

export default function ClickCopy(props: Props): ReactElement {
    const click = () => {
        navigator.clipboard.writeText(props.text);
    }
    return (
        <div className='clickable' onClick={click}>
            {props.children}
        </div>
    )
}
