import React from 'react';
import './App.css';
import Preview from './Preview';
import ProjectPage from './ProjectPage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faInstagram,faLinkedin,faTwitter,faYoutube,faGithub } from '@fortawesome/free-brands-svg-icons';

import Logo from "./assets/logo.svg";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <iframe src="https://jcw87.github.io/c2-sans-fight/" title="Game"></iframe>
        <div id="content">
          <div id="projectList">
            <Preview icon={Logo} alt="Alt text">
              <ProjectPage />
            </Preview>
          </div>
          <div id="sidebar">
            <a className="socialLink" target="_blank" href="https://www.instagram.com/will_farhat/"><FontAwesomeIcon icon={faGithub} /></a>
            <a className="socialLink" target="_blank" href="https://www.instagram.com/will_farhat/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="socialLink" target="_blank" href="https://www.instagram.com/will_farhat/"><FontAwesomeIcon icon={faYoutube} /></a>
            <a className="socialLink" target="_blank" href="https://www.instagram.com/will_farhat/"><FontAwesomeIcon icon={faTwitter} /></a>
            <a id="resumeBox" className="clickable" href="./resources/WillFarhatResume.docx" download>Resume</a>
          </div>
        </div>
        <div id="footer">
          Site programmed and hosted by Will Farhat - {(new Date().getFullYear())}
        </div>
      </header>
    </div>
  );
}