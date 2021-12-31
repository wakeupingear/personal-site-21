import React, { ReactElement } from 'react'

interface Props {
    classColor: string,
}

export default function SecretCard(props: Props): ReactElement {
    const content = [
        ["https://myhomeworkapp.com/home", "Homework App"],
        ["https://my.usc.edu/", "MyUSC"],
    ];
    return (
        <div className={"chadminCard " + props.classColor} >
            <div className='chadminCardTitle'>Bookmarks</div>
            {content.map((item) => <div className='clickable' onClick={() => { window.open(item[0]) }}>{item[1]}</div>)}
        </div>
    )
}
