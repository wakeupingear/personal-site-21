import React, { ReactElement, useState, useEffect } from 'react'
import axios from 'axios'

import { FileUploader } from "react-drag-drop-files"

import { setAPIFromData } from '../../scripts/API'
import { getAPIAuth } from '../../scripts/APIAuth'
import { getAPIUrl } from '../../scripts/APIUrl'

import TextField, { Input } from '@material/react-text-field';
import { Bars } from 'react-loader-spinner'

interface Props {
    classColor: string
}

export default function UploadCard(props: Props): ReactElement {
    const APIURL = getAPIUrl();
    const [color, setColor] = useState(props.classColor);
    const [title, setTitle] = useState("");
    const [twitter, setTwitter] = useState("");
    const [twitterOn, setTwitterOn] = useState(false);
    const [instagram, setInstagram] = useState("");
    const [instagramOn, setInstagramOn] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const FRONTURL = (APIURL.includes("localhost") ? "http://localhost:3000/" : "https://willfarhat.com/");


    const checkLinks = () => {
        setAPIFromData("secrets/latestArtTwitter", setTwitter);
        setAPIFromData("secrets/latestArtInstagram", setInstagram);
    };
    useEffect(() => { checkLinks() }, []);

    const handleChange = (file: File) => {
        const formData = new FormData();
        const url = APIURL + "dailyArt/upload";
        if (file !== undefined) formData.append('file', file, file.name.replace(/\s/g, '_')); // appending file
        axios.post(url, formData, {
            headers: getAPIAuth()
        }).then(res => {
            if (res.status === 200) {
                console.log("Art uploaded");
            }
        }).catch(err => console.log(err));
    };
    const submitArt = () => {
        const url = APIURL + "dailyArt/submit";
        const formData = new FormData();
        formData.append('title', title);
        setSubmitting(true);
        setTwitterOn(false);
        setInstagramOn(false);
        axios.post(url, formData, {
            headers: getAPIAuth()
        }).then(res => {
            setSubmitting(false);
            if (res.status === 200) {
                console.log("Art submitted");
                setColor("chadminGreen");
                setTwitterOn(true);
                setInstagramOn(true);
                checkLinks();
            }
            else {
                setColor("chadminRed");
                if (res.status === 222) setInstagramOn(true);
                else if (res.status === 223) setTwitterOn(true);
            }
        }).catch(err => {
            console.log(err);
            setColor("chadminRed");
            setSubmitting(false);
        });
    };
    return (
        <div className={"chadminCard " + color} >
            <div className='chadminCardTitle'>Daily Art</div>
            {(twitterOn) ? <div className='clickable' onClick={() => { window.open(twitter, "_blank") }}>Twitter</div> : null}
            {(instagramOn) ? <div className='clickable' onClick={() => { window.open(instagram, "_blank") }}>Instagram</div> : null}
            {(!submitting && color !== "chadminGreen")
                ? (<div className='uploadField'>
                    <FileUploader handleChange={handleChange} name="file" />
                </div>)
                : ((submitting) ? (<div className="loading">
                    <Bars wrapperClass="loading" color="white" ariaLabel="loading-indicator" />
                </div>) : null)}
            {(!submitting && color !== "chadminGreen") ? (<div>
                <div>Title: </div>
                <span>&nbsp;&nbsp;</span>
                <TextField>
                    <Input
                        value={title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setTitle(e.currentTarget.value);
                        }} />
                </TextField>
            </div>) : null}
            {(!submitting && title !== "" && color !== "chadminGreen") ? (<div id="artSubmit" className="clickable" onClick={submitArt}>
                <p>Post to Twitter/Instagram</p>
            </div>) : null}
        </div>
    )
}
