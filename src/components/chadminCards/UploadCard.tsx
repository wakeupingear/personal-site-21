import React, { ReactElement, useState } from 'react'
import axios from 'axios'

import { FileUploader } from "react-drag-drop-files"

import { setAPIFromData } from '../../scripts/API'
import { getAPIAuth } from '../../scripts/APIAuth'
import { getAPIUrl } from '../../scripts/APIUrl'

interface Props {
    classColor: string,
    path: string,
    title: string,
}

export default function UploadCard(props: Props): ReactElement {
    const APIURL = getAPIUrl();
    const FRONTURL = (APIURL.includes("localhost") ? "http://localhost:3000/" : "https://willfarhat.com/");
    const handleChange = (file: File) => {
        const formData = new FormData();
        const url = APIURL + "upload/" + props.path;
        if (file !== undefined) formData.append('file', file, file.name.replace(/\s/g, '_')); // appending file
        axios.post(url, formData, {
            headers: getAPIAuth()
        }).then(res => {
            if (res.status === 200) {

            }
        }).catch(err => console.log(err))
    };
    return (
        <div className={"chadminCard " + props.classColor} >
            <div className='chadminCardTitle'>{props.title}</div>
            <div className='clickable' onClick={() => { window.open(FRONTURL + props.path, "_self") }}>View</div>
            <div className='uploadField'>
                <FileUploader handleChange={handleChange} name="file" />
            </div>
        </div>
    )
}
