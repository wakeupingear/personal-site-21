import { ReactElement } from 'react'
import './assets/CSS/App.css'
import Preview from './components/Preview'
import ProjectRow from './components/ProjectRow'
import Sidebar from './components/Sidebar'

import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import { Provider, ClapButton } from "@lyket/react";
import { useMediaQuery } from 'react-responsive';

import Outset from "./assets/outsetBg.PNG"
import Inc from "./assets/incLifeTitleSquare.png"
import THK from "./assets/thk.png"
import Jam from "./assets/jamGames.png"
import CFE from "./assets/cfe.png"
import Freehand from "./assets/freehandVR.jpg"
import Remotion from "./assets/remotionLogo.jpg"

export default function App() {
  const { width, height } = useWindowSize();

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  let confettiDiv: ReactElement = <div></div>;
  if (new Date().getDay() === 5) confettiDiv =
    <div style={{ position: "sticky", top: "0px" }}>
      <Confetti width={width}
        height={height} style={{ position: "absolute" }} />
    </div>;

  return (
    <div className="App">
      {confettiDiv}
      <header className="App-header">
        <iframe src="https://jcw87.github.io/c2-sans-fight/" title="Game"></iframe>
        {isPortrait && <Sidebar />}
        <div id="content">
          <div id="projectList">
            {/*<div id="topBar">
              <div className="pageTitle">Proonclickjects</div>
              <div id="filter">Filter</div>
            </div>
            */}
            <ProjectRow rowID="row1">
              <Preview id="Outset" icon={Outset} style={{ width: "63%" }} year="2022" />
              <Preview id="Inc" icon={Inc} style={{ width: "37%" }} year="2020" />
            </ProjectRow>
            <ProjectRow rowID="row2">
              <Preview id="CFE" icon={CFE} style={{ width: "30%", backgroundColor: "grey" }} year="2021" />
              <Preview id="THK" icon={THK} style={{ width: "50%" }} year="2020" />
              <Preview id="Freehand" icon={Freehand} style={{ width: "20%" }} year="2019" />
            </ProjectRow>
            <ProjectRow rowID="row3">
              <Preview id="Remotion" icon={Remotion} style={{ width: "65%" }} year="2019" />
              <Preview id="Jam" icon={Jam} style={{ width: "50%" }} year="2018-" />
            </ProjectRow>
          </div>
          {!isPortrait && <Sidebar />}
        </div>
        <div id="footer">
          <div>
            Site programmed and hosted by Will Farhat - {(new Date().getFullYear())}
          </div>
          <Provider apiKey="st_c11e1cd54478683640776c747b4f05">
            <ClapButton
              namespace="my-blog-post"
              id="applause-react"
              component={ClapButton.templates.Medium}
            />
          </Provider>
        </div>
      </header>
    </div >
  );
}