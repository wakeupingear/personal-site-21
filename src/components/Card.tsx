import React, { ReactElement, useState, useRef } from 'react'
import axios from 'axios'

import { setAPIFromData } from '../scripts/API'
import { getAPIAuth } from '../scripts/APIAuth'
import { getAPIUrl } from '../scripts/APIUrl'

interface Props {
    content: string,
    type?: number,
    path?: string,
    link?: string,
    children: ReactElement[] | ReactElement | undefined
}

export default function Card(props: Props): ReactElement {
    const [data, setData] = useState("");
    const el = useRef(null); // accesing input element
    const APIURL = getAPIUrl();
    let onClick = function () {
        if (props.link !== undefined) window.open(props.link);
    }

    let classColor: string = "";
    let body: ReactElement = <div></div>;
    if (props.type === undefined) {
        classColor = "chadminLink ";
    }
    else if (props.type === 1) {
        if (props.content === "ip") {
            body = <div>
                <h1>Terminal</h1>
                <p>pi@{data}</p>
            </div>
        }
        //if (!complete) setAPIFromData(props.content, setComplete);
    }
    else if (props.type === 2 || props.type === 3) {
        const url = APIURL + "upload/" + props.content;

        const uploadFile = (file: File) => {
            const formData = new FormData();
            console.log(file)
            if (file !== undefined) formData.append('file', file, file.name.replace(/\s/g, '_')); // appending file
            axios.post(url, formData, {
                headers: getAPIAuth()
            }).then(res => {
                if (res.status === 200) {
                    setData(res.data);
                }
            }).catch(err => console.log(err))
        }

        const handleChange = (e: any) => {
            const newFile = e.target.files[0]; // accessing file
            //setFile(newFile); // storing file
            uploadFile(newFile);
        }

        body = <div>
            {data !== "" && <img src={APIURL + data} className="dailyArt" />}
            <div className="file-upload">
                <input type="file" ref={el} onChange={handleChange} />
            </div>
        </div>
    }

    if (props.type !== undefined && props.type !== 0&&props.type!==3) setAPIFromData(props.content, setData);

    return (
        <div onClick={onClick} className={"chadminCard " + classColor + (props.type === 3 || data !== "" ? "chadminComplete " : "")}>
            {props.children}
            {body}
        </div>
    )
}
