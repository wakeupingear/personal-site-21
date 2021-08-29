import React, { ReactElement } from 'react'

interface Props {
    link: string,
    children: string
}

export default function LinkButton(props: Props): ReactElement {
    function onclick() {
        window.open(props.link, "_blank");
    }

    return (
        <div className="linkButton clickable" onClick={onclick}>
            <span>{props.children}</span>
        </div>
    )
}
