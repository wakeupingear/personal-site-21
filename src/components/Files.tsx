import React, { ReactElement, useState } from 'react'

import { setAPIFromData } from '../scripts/API'

interface Props {
    url: string
}

export default function Files(props: Props): ReactElement {
    const [files, setFiles] = useState([]);
    setAPIFromData("fileList", setFiles);
    return (
        <div id="filePage">
            <div className="title">Files</div>
            <div id="fileHolder">
                {files.map((element,i) => {
                    return (<div className="fileLink"><a href={element}>{element}</a></div>);
                })}
            </div>
        </div>
    )
}
