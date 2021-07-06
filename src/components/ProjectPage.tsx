import { ReactElement,useState,useEffect  } from "react";

interface PageInfo {
    isActive?: boolean,
    innerHTML?:ReactElement
}

export default function ProjectPage(props:PageInfo) {
    const [data,setData]=useState(props);
    useEffect(() => {
        setData(props);
    }, [props]);
    return (
        <div className={ data.isActive ? "opening" : "closing" }>
            {data.innerHTML}
        </div>
    )
}