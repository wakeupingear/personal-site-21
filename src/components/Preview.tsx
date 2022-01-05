import { useEffect } from "react"

interface PreviewBox {
    id: string,
    icon: string,
    style: React.CSSProperties,
    year?: string,
    onclick?: Function
}

export default function Preivew(props: PreviewBox) {

    function clicked() {
        if (props.onclick !== undefined) {
            props.onclick(props.id);
        }
    }

    useEffect(() => {
        const urlPath = window.location.pathname.substring(1);
        if (urlPath == props.id) {
            clicked();
        }
    }, []);

    return (
        <div className="previewBox clickable" onClick={clicked} style={props.style}>
            {props.year !== undefined ? <div className="previewDate">
                {props.year}
            </div> : null}
            <img src={props.icon} alt={props.id}></img>
        </div>
    )
}
