interface PreviewBox {
    id: string,
    icon: string,
    alt: string,
    style: React.CSSProperties,
    buttonClicked?:Function
}

export default function Preivew(props: PreviewBox) {

    function clicked(){
        if (props.buttonClicked!==undefined){
            props.buttonClicked(props.id);
        }
    }

    return (
        <div className="previewBox clickable" onClick={clicked} style={props.style}>
            <img src={props.icon} alt={props.alt}></img>
        </div>
    )
}
