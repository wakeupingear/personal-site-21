import { ReactElement, useState, useEffect } from 'react'

import ChadminDashboard from './ChadminDashboard'
import Files from './Files'

import { setAPIFromData } from '../scripts/API'

import '../assets/CSS/Chadmin.css'

interface Props {

}

export default function Chadmin({ }: Props): ReactElement {
    const [signedIn, setSignIn] = useState(false);
    useEffect(() => {
        setAPIFromData("secrets/ip", setSignIn);
    }, []);
    const enterPassword = function () {
        const password: string | null = prompt("Enter the password");
        if (password !== null) {
            localStorage.setItem("password", password);
            setAPIFromData("secrets/ip", setSignIn);
        }
    }

    const login = (
        <div>
            <div id="loginPage">
                <div id="loginButton" className="clickable" onClick={enterPassword}>
                    <div>Log In</div>
                </div>
            </div>
            <a href="https://willfarhat.com" id="loginFooter">
                <div>
                    If you are not Will, you have gotten hopelessly lost on this site. Click here.
                </div>
            </a>
        </div>
    )

    return (
        (signedIn) ? ((!window.location.href.includes("files")) ? <ChadminDashboard /> : <Files isPrivate={true} />) : login
    )
}
