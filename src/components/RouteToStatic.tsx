import React, { ReactElement } from 'react'

interface Props {
    name:string
}

export default function RouteToStatic(props: Props): ReactElement {
    const finalPath="../"+props.name+"/index.html";
    return (
        <div>
            <a href={finalPath}></a>
        </div>
    )
}
