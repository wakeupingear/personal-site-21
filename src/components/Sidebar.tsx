import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { useMediaQuery } from 'react-responsive'

import Photo from "../assets/home/portrait.png"
import { ReactElement } from 'react'

export default function Sidebar() {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    let sidebarID: string = "sidebarCol";
    if (isPortrait) sidebarID = "sidebarRow";

    let schoolYear: string = "a freshman";
    const aboutPage: ReactElement = <div></div>
    /*const aboutPage = () => (
        <div>
            <Popup trigger={<div className="resumeBox clickable" >About</div>} closeOnDocumentClick modal>
                <div id="popup">
                    <div id="popupText">
                        <div className="popupTitle">Hi, I'm Will Farhat!</div>
                        <div>Welcome to my site. Programmed in React, hosted on a Raspberry Pi.</div>
                        <div>What about me?</div>
                        <div>I'm {schoolYear} at <a className="clickable" href="https://viterbischool.usc.edu/">USC Viterbi</a> and a grad of <a className="clickable" href="https://www.hw.com/">Harvard-Westlake.</a></div>
                        <div>I'm a Full-Stack Dev, working primarily with C++, Java, Typescript, and Python.</div>
                        <div>I'm also a Game Dev, working on game development in GameMaker Studio 2, Unity, and Unreal.</div>
                        <div>Finally, I'm just a guy who likes making things!</div>
                    </div>
                    <div style={{ width: "0%" }}>
                        <img id="portrait" src={Photo} alt="Portrait"></img>
                    </div>
                </div>
            </Popup><br></br>
        </div>
    );*/

    return (
        <div id={sidebarID}>
            <a className="socialLink" target="_blank" href="https://willfarhat.com/github"><FontAwesomeIcon icon={faGithub} /></a>
            <a className="socialLink" target="_blank" href="https://willfarhat.com/github"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className="socialLink" target="_blank" href="https://willfarhat.com/instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="socialLink" target="_blank" href="https://www.youtube.com/channel/UCImSybcXB8pCtulA-_T0WCw?sub_confirmation=1"><FontAwesomeIcon icon={faYoutube} /></a>
            <a className="socialLink" target="_blank" href="https://willfarhat.com/twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a className="resumeBox clickable" href="https://willfarhat.com/resume" download>Resume</a>
        </div>
    )
}