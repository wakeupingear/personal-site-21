import './App.css';
import Preview from './components/Preview';
import ProjectRow from './components/ProjectRow';
import Sidebar from './components/Sidebar';

import Outset from "./assets/outsetBg.PNG";
import Inc from "./assets/incLifeTitleSquare.png";
import THK from "./assets/thkLogo.jpg";
import Jam from "./assets/jamGames.png";

export default function App() {


  return (
    <div className="App">
      <header className="App-header">
        <iframe src="https://jcw87.github.io/c2-sans-fight/" title="Game"></iframe>
        <div id="content">
          <div id="projectList">
            <ProjectRow>
              <Preview id="Outset" icon={Outset} alt="Alt text" style={{ width: "63%" }} />
              <Preview id="Inc" icon={Inc} alt="Alt text" style={{ width: "37%" }} />
            </ProjectRow>
            <ProjectRow>
              <Preview id="THK" icon={THK} alt="Alt text" style={{ width: "50%" }} />
              <Preview id="Jam" icon={Jam} alt="Alt text" style={{ width: "50%" }} />
            </ProjectRow>
          </div>
          <Sidebar />
        </div>
        <div id="footer">
          Site programmed and hosted by Will Farhat - {(new Date().getFullYear())}
        </div>
      </header>
    </div>
  );
}