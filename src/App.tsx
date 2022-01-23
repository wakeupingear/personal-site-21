import { ReactElement, useState, useEffect } from 'react'
import './assets/CSS/App.css'
import Preview from './components/Preview'
import ProjectRow from './components/ProjectRow'
import Sidebar from './components/Sidebar'
import ClapButton from './components/ClapButton'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import { setAPIFromData } from 'scripts/API'

import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import { useMediaQuery } from 'react-responsive'
import Iframe from 'react-iframe'
import { Helmet } from "react-helmet"

import Outset from "./assets/outsetPage/outsetBg.png"
import Inc from "./assets/incLife/incLifeTitleSquare.png"
import THK from "./assets/thk/thk.png"
import Jam from "./assets/jam/jamGames.png"
import CFE from "./assets/cfe/cfe.png"
import Freehand from "./assets/freehand/freehandVR.jpg"
import Remotion from "./assets/remotion/remotionLogo.jpg"
import YouTube from "./assets/youtube/thumbnail.png"
import Emotive from "./assets/emotive/emotive.png"
import Research from "./assets/research/thumbnail.png"
import Ending from "./assets/will/ending.png"

export default function App() {
  const { width, height } = useWindowSize();

  const isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');

  //const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  //const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  //const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const [alive, setAlive] = useState(true);
  const [date, setDate] = useState("");
  useEffect(() => {
    setAPIFromData("alive", setAlive);
    setAPIFromData("date", setDate);
  }, []);
  //const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  let confettiDiv: ReactElement = <div></div>;
  if (new Date().getDay() === 5) confettiDiv =
    <div style={{ position: "sticky", top: "0px" }}>
      <Confetti width={width}
        height={height} style={{ position: "absolute" }} />
    </div>;

  //let gameURL=process.env.PUBLIC_URL+"http://127.0.0.1:51264/index.html";
  let gameURL = process.env.PUBLIC_URL + "/personal-site-game/build/index.html";
  if (!isDev) gameURL = "https://api.willfarhat.com:5000/game";

  return (
    <div className="App">
      <Helmet>
        <title>Will Farhat</title>
        <meta name="description" content="Will Farhat's personal website. Game Design, Software Engineering, Digital Art" />
        <meta name="keywords" content="Will Farhat, Will Farhat's personal website, Game Design, Software Engineering, Digital Art" />
        <meta name="author" content="Will Farhat" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
      </Helmet>
      {confettiDiv}
      <header className="App-header">
        <Iframe id="headerGame" url={gameURL} title="Game" />
        {isPortrait && <Sidebar />}
        <div id="content">
          <div id="projectList">
            {/*<div id="topBar">
              <div className="pageTitle">Proonclickjects</div>
              <div id="filter">Filter</div>
            </div>
            */}
            <ProjectRow rowID="row1">
              <Preview id="outset" icon={Outset} style={{ width: "63%" }} year="Releasing 2022" />
              <Preview id="youtube" icon={YouTube} style={{ width: "37%" }} />
            </ProjectRow>
            <ProjectRow rowID="row2">
              <Preview id="inc" icon={Inc} style={{ width: "37%" }} year="2020" />
              <Preview id="thk" icon={THK} style={{ width: "63%" }} year="2020" />
            </ProjectRow>
            <ProjectRow rowID="row3">
              <Preview id="jam" icon={Jam} style={{ width: "50%" }} />
              <Preview id="research" icon={Research} style={{ width: "50%" }} />
            </ProjectRow>
            <ProjectRow rowID="row4">
              <Preview id="cfe" icon={CFE} style={{ width: "30%", backgroundColor: "grey" }} year="2021" />
              <Preview id="emotive" icon={Emotive} style={{ width: "70%" }} year="2021" />
            </ProjectRow>
            <ProjectRow rowID="row5">
              <Preview id="remotion" icon={Remotion} style={{ width: "65%" }} year="2019" />
              <Preview id="freehand" icon={Freehand} style={{ width: "35%" }} year="2019" />
            </ProjectRow>
            {!alive ?
              <ProjectRow rowID="row6">
                <Preview id="will" icon={Ending} style={{ width: "100%" }} year={"2002 - " + date} />
              </ProjectRow>
              : null
            }
          </div>
          {!isPortrait && <Sidebar />}
        </div>
        <div id="footer">
          <div>
            Site programmed and hosted by Will Farhat - {(new Date().getFullYear())}<br></br>
          </div>
          <div>
            Say Hi!
            <span>&nbsp;&nbsp;</span>
            <ClapButton />
          </div>
        </div>
      </header>
    </div >
  );
}