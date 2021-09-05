import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { useMediaQuery } from 'react-responsive'

import Photo from "../assets/home/portrait.png"

export default function Sidebar() {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    let sidebarID:string="sidebarCol";
    if (isPortrait) sidebarID="sidebarRow";

    let schoolYear="a freshman";

    return (
        <div id={sidebarID}>
            <a className="socialLink" target="_blank" href="https://github.com/willf668"><FontAwesomeIcon icon={faGithub} /></a>
            <a className="socialLink" target="_blank" href="https://www.linkedin.com/in/will-farhat-12b89817b/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className="socialLink" target="_blank" href="https://www.instagram.com/will_farhat/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="socialLink" target="_blank" href="https://www.youtube.com/channel/UCImSybcXB8pCtulA-_T0WCw"><FontAwesomeIcon icon={faYoutube} /></a>
            <a className="socialLink" target="_blank" href="https://twitter.com/will_farhat"><FontAwesomeIcon icon={faTwitter} /></a>
            <Popup trigger={<div className="resumeBox clickable">About</div>} closeOnDocumentClick modal>
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
                    <div style={{width:"0%"}}>
                        <img id="portrait" src={Photo} alt="Portrait"></img>
                    </div>
                </div>
            </Popup><br></br>
            <a className="resumeBox clickable" href="./resources/Will Farhat Resume.docx" download>Resume</a>
        </div>
    )
}