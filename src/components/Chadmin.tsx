import React, { ReactElement, useState, useEffect } from 'react'

import ChadminDashboard from './ChadminDashboard'

import { setAPIFromData } from '../scripts/API'

import '../assets/CSS/Chadmin.css'

interface Props {

}

export default function Chadmin({ }: Props): ReactElement {
    const [signedIn, setSignIn] = useState(false);
    setAPIFromData("ip", setSignIn);
    const enterPassword = function () {
        const password: string | null = prompt("Enter the password");
        if (password !== null) {
            localStorage.setItem("password", password);
            setAPIFromData("ip", setSignIn);
        }
    }

    let root = document.documentElement;
    const setBoxSpacing= function () {
        root.style.setProperty('--GWN', "" + Math.floor(window.innerWidth / 300));
        root.style.setProperty('--GHN', "" + Math.floor(window.innerHeight / 300));
        console.log(root.style.getPropertyValue("--GWN"))
    }
    setBoxSpacing();
    window.onresize=setBoxSpacing;

    const login = (
        <div>
            <div onClick={enterPassword}>Log In</div>
        </div>
    )

    return (
        (signedIn) ? <ChadminDashboard /> : login
    )
}
