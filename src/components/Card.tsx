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
    const [file, setFile] = useState<File>(); // storing the uploaded file    // storing the recived file from backend
    const [data, setData] = useState("");
    const [progress, setProgess] = useState(""); // progess bar
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
    else if (props.type === 2) {
        const url = APIURL + "upload/" + props.content;
        const handleChange = (e: any) => {
            setProgess("");
            const newFile = e.target.files[0]; // accessing file
            console.log(newFile)
            setFile(newFile); // storing file
        }

        const uploadFile = () => {
            const formData = new FormData();
            if (file !== undefined) formData.append('file', file, file.name.replace(/\s/g, '_')); // appending file
            axios.post(url, formData, {
                onUploadProgress: (ProgressEvent) => {
                    let progress = Math.round(
                        ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                    setProgess(progress);
                },
                headers: getAPIAuth()
            }).then(res => {
                if (res.status === 200) {
                    setData(res.data);
                }
            }).catch(err => console.log(err))
        }

        body = <div>
            {data!==""&&<img src={APIURL+data} className="dailyArt clickable"/>}
            <div className="file-upload">
                <input type="file" ref={el} onChange={handleChange} />                <div className="progessBar" style={{ width: progress }}>
                    {progress}
                </div>
                <button onClick={uploadFile} className="upbutton">
                    Upload
                </button>
            </div>
        </div>
    }

    if (props.type !== undefined && props.type !== 0) setAPIFromData(props.content, setData);

    return (
        <div onClick={onClick} className={"chadminCard " + classColor + (data !== "" ? "chadminComplete " : "")}>
            {props.children}
            {body}
        </div>
    )
}
