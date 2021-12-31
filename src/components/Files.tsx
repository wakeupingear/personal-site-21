import React, { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'

import { setAPIFromData } from '../scripts/API'
import { getAPIAuth } from '../scripts/APIAuth'
import { getAPIUrl } from '../scripts/APIUrl'

interface Props {
    isPrivate?: boolean,
}

export default function Files(props: Props): ReactElement {
    const url = window.location.href;
    const APIURL = getAPIUrl();
    const [body, setBody] = useState<ReactElement | ReactElement[]>(<div></div>);
    const getFile = (path: string) => { //used for fetching with auth
        axios({
            url: APIURL + "chadmin/files/" + path,
            responseType: 'blob',
            method: 'GET',
            headers: getAPIAuth()
        })
            .then((response) => {
                const url = window.URL
                    .createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'image.jpg');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
    }
    const setFiles = function (files: string[]) {
        const newBody: ReactElement[] = files.map((element, i) => {
            if (props.isPrivate) return (<div className="fileLink clickable"><a onClick={() => getFile(element)}>{element}</a></div>);
            return (<div className="fileLink clickable"><a href={url + "/" + element}>{element}</a></div>);
        });
        setBody(newBody);
    }
    const folder = (props.isPrivate) ? "private" : "public";
    useEffect(() => {
        setAPIFromData("fileList/" + folder, setFiles);
    }, []);
    return (
        <div id="filePage">
            <div className="title">Files</div>
            <div id="fileHolder">
                {body}
            </div>
        </div>
    )
}
