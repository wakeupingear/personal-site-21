import React from 'react'

interface PreviewBox {
    icon: string,
    alt: string,
    children:React.ReactNode
}

export default function Preivew(props:PreviewBox) {
    let opened:boolean = false;

    function buttonClicked(){
        if (opened){

        }
        else {

        }
        opened=!opened;
    }

    return (
        <div className="previewBox" onClick={buttonClicked}>
            <img src={props.icon} alt={props.alt}></img>
        </div>
    )
}
