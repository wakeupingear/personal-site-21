import React, { ReactElement, useState, useEffect, useRef } from 'react'

import { setAPIFromData } from '../../scripts/API'
import { getAPIAuth } from '../../scripts/APIAuth'
import { getAPIUrl } from '../../scripts/APIUrl'

import ClickCopy from '../ClickCopy';

interface Props {
    classColor: string,
    title: string,
    content: string[][]
}

type Fields = {
    [key: string]: number 
}

export default function CopyCard(props: Props): ReactElement {
    const strArr=[];
    for (let i=0;i<props.content.length;i++){
        strArr.push(props.content[i]);
    }
    const [data, setData] = useState(strArr);
    const completedFields:Fields = {};
    const addProperty = (result: string, label: string) => {
        const oldData = data;
        let len=oldData[completedFields[label]].length;
        oldData[completedFields[label]][(len>2)?1:0]=oldData[completedFields[label]][(len>2)?1:0].replace("$",result);
        setData(oldData => [...oldData]);
    }
    useEffect(() => {
        for (let i=0;i<props.content.length;i++){
            const element=props.content[i];
            completedFields[element[0]] = i;
            if (element.length === 2) setAPIFromData("secrets/"+element[1], addProperty, element[0]);
            else for (let j = 2; j < element.length; j++) {
                setAPIFromData("secrets/"+element[j], addProperty, element[0]);
            }
        }
    }, []);
    return (
        <div className={"chadminCard " + props.classColor} >
            <div className='chadminCardTitle'>{props.title}</div>
            {data.map((item) => (item[1] !== "" ? <ClickCopy text={item[1]}>{item[0]}</ClickCopy> : null),)}
        </div>
    )
}