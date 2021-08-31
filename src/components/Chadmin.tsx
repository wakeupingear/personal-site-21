import React, { ReactElement, useState, useEffect } from 'react'
import axios from 'axios'
import { decode as base64_decode, encode as base64_encode } from 'base-64'

import '../assets/CSS/Chadmin.css'

interface Props {

}

export default function Chadmin({ }: Props): ReactElement {
    const [ip, setIP] = useState();
    const password = "";

    const netObj = {
        method: 'GET',
        withCredentials: true,
        headers: {
            'Authorization': 'Basic' + base64_encode("admin:" + password)
        }
    }
    const setFromAPIData = async function (path: string, resultFunc: Function): Promise<any> {
        return new Promise(function (resolve) {
            fetch("http://localhost:5000/api/" + path, netObj).then(response => response.json())
                .then(function (data) {
                    resultFunc(data.data);
                    resolve(null);
                });
        });
    }

    setFromAPIData("ip", setIP);

    return (
        <div id="Chadmin">
            <div id="ssh">
                ssh pi@{ip}
            </div>
        </div>
    )
}
