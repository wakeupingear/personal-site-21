import React from 'react';
import './App.css';
import Preview from './Preview'

import Logo from "./assets/logo.svg"
import ProjectPage from './ProjectPage';

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
            <div className="clickable">Resume</div>
          </div>
        </div>
        <div id="footer">
          Site programmed and hosted by Will Farhat - {(new Date().getFullYear())}
        </div>
      </header>
    </div>
  );
}