import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Sidebar() {
    return (
        <div id="sidebar">
            <a className="socialLink" target="_blank" href="https://github.com/willf668"><FontAwesomeIcon icon={faGithub} /></a>
            <a className="socialLink" target="_blank" href="https://www.linkedin.com/in/will-farhat-12b89817b/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className="socialLink" target="_blank" href="https://www.instagram.com/will_farhat/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="socialLink" target="_blank" href="https://www.youtube.com/channel/UCImSybcXB8pCtulA-_T0WCw"><FontAwesomeIcon icon={faYoutube} /></a>
            <a className="socialLink" target="_blank" href="https://twitter.com/will_farhat"><FontAwesomeIcon icon={faTwitter} /></a>
            <a id="resumeBox" className="clickable" href="./resources/WillFarhatResume.docx" download>Resume</a>
        </div>
    )
}
