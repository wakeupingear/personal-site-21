interface PreviewBox {
    id: string,
    icon: string,
    style: React.CSSProperties,
    year:string,
    onclick?:Function
}

export default function Preivew(props: PreviewBox) {

    function clicked(){
        if (props.onclick!==undefined){
            props.onclick(props.id);
        }
    }

    return (
        <div className="previewBox clickable" onClick={clicked} style={props.style}>
            <div className="previewDate">
                {props.year}
            </div>
            <img src={props.icon} alt={props.id}></img>
        </div>
    )
}
