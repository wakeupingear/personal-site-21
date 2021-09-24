import React, { ReactElement, useRef, useState, useEffect } from 'react'

import Typewriter from 'typewriter-effect';
import useOnScreen from './hooks/UseOnScreen';

interface Props {
    children: string,
    profile?: string
}

export default function OutsetTextbox(props: Props): ReactElement {
    const ref = useRef<Element>();
    const isVisible = useOnScreen(ref, "0px");
    let opened = true;

    const finalText = "<div class='outsetText'>"+props.children+"</div>";
    return (
        <div>
            {props.profile ? <img src={props.profile} alt="profile" className="profile-image" /> : null}
            {(opened || isVisible) && <Typewriter
                options={{
                    cursor: '',
                    delay: 10,
                    //strings: props.children.split(','),
                    skipAddStyles: true,
                }}
                onInit={(typewriter) => {
                    opened = true;
                    typewriter.typeString(finalText).start();
                }}
            />}
        </div>
    )
}