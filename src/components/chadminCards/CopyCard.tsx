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
        strArr.push([props.content[i][0],props.content[i][1]]);
    }
    const [data, setData] = useState(strArr);
    const completedFields:Fields = {};
    const addProperty = (result: string, label: string) => {
        const oldData = data;
        oldData[completedFields[label]][1]=oldData[completedFields[label]][1].replace("$",result);
        console.log(oldData)
        setData(oldData => [...oldData]);
    }
    useEffect(() => {
        for (let i=0;i<props.content.length;i++){
            const element=props.content[i];
            completedFields[element[0]] = i;
            if (element.length === 2) addProperty(element[2], element[1]);
            else for (let j = 2; j < element.length; j++) {
                setAPIFromData(element[j], addProperty, element[0]);
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