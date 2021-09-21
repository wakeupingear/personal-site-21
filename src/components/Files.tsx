import React, { ReactElement, useEffect, useState } from 'react'

import { setAPIFromData } from '../scripts/API'

interface Props {
}

export default function Files(props: Props): ReactElement {
    const [body, setBody] = useState<ReactElement | ReactElement[]>(<div></div>);
    const setFiles = function (files: string[]) {
        const newBody: ReactElement[] = files.map((element, i) => {
            return (<div className="fileLink"><a href={url + "/" + element}>{element}</a></div>);
        });
        setBody(newBody);
    }
    useEffect(() => {
        setAPIFromData("fileList", setFiles);
    }, []);
    const url = window.location.href;
    return (
        <div id="filePage">
            <div className="title">Files</div>
            <div id="fileHolder">
                {body}
            </div>
        </div>
    )
}
