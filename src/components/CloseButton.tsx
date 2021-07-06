import React, { ReactElement } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

interface Props {
    id: string,
    onclick: Function
}

export default function CloseButton(props: Props): ReactElement {

    function clicked() {
        if (props.onclick !== undefined) {
            props.onclick(props.id);
        }
    }

    return (
        <div className="closeButton clickable" onClick={clicked} style={{zIndex:3}}>
            <FontAwesomeIcon icon={faWindowClose}/>
        </div>
    )
}
