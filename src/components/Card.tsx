import React, { ReactElement,useState } from 'react'
import { isPropertySignature } from 'typescript'

import { setAPIFromData } from '../scripts/API'

interface Props {
    content:string,
    type?:number,
    children: ReactElement[] | ReactElement | undefined
}

export default function Card(props: Props): ReactElement {
    const [complete, setComplete] = useState(props.type!==null&&props.type);
    if (!complete) setAPIFromData(props.content,setComplete);
    
    return (
        <div className={"chadminCard "+(complete?"chadminComplete":"")}>
            {props.children}
        </div>
    )
}
