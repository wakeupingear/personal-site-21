import React, { ReactElement } from 'react'

import ProjectInfo from '../ProjectInfo'

import i1 from "../../assets/jam/companion.png"

interface Props {

}

export default function Jam(props: Props): ReactElement {

    return (
        <div className="pageHolder" id="JamPage">
            <div className="pageColumn jamColumn">
                <ProjectInfo
                    id="writus"
                    color="#343434"
                    title='Writus'
                    text={[
                        "Play as a heavenly security guard who must stop rogue souls from entering the wrong afterlife! Make use of Dual Window Technology™ to see the true intent of every wandering mortal...",
                        "Made in 36 hours for HackSC 2022. Won 1st place in Entertainment",
                    ]}
                    images={["https://willfarhat.com/writus/squareLogo2.PNG"]}
                    slideWidth={10}
                    nested={true}
                    collaborators={[
                        ['Levi Pinkert', 'Gameplay Programming + Art', 'https://levipinkert.wixsite.com/portfolio'],
                        ['Will Farhat', 'Web Development'],
                    ]}
                    links={[
                        ["Play Now!", "https://willfarhat.com/writus"],
                    ]}
                    date="February 2022"
                />
                <ProjectInfo
                    id="damnIt"
                    color="#71C1D9"
                    title='Damn It!'
                    text={[
                        "Play as a heavenly security guard who must stop rogue souls from entering the wrong afterlife! Make use of Dual Window Technology™ to see the true intent of every wandering mortal...",
                        "Made in 48 hours for the Global Game Jam 2022 at USC",
                        "\"You guys have made a profiling game\" - Gordon Bellamy"
                    ]}
                    images={["https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/featured_image/2022/01/449397/screen_shot_2022-01-30_at_2.46.59_pm_0.png"]}
                    slideWidth={100}
                    nested={true}
                    collaborators={[
                        ['Levi Pinkert', 'Gameplay Programming', 'https://levipinkert.wixsite.com/portfolio'],
                        ['Charlie Heatherly', 'Design + Art'],
                        ['Will Farhat', 'Tech Art + Systems Programming'],
                        ['William McCullen', 'Music + Characters']
                    ]}
                    links={[
                        ["Download Now!", "https://globalgamejam.org/2022/games/damn-it-5"],
                        ["Source Code", "https://github.com/willf668/global-game-jam-22"]
                    ]}
                    date="January 2022"
                />
                <ProjectInfo
                    id="companion"
                    color="#2E3192"
                    title='Companion'
                    text={[
                        "Embark on a turn-based RPG where you have absolutely no control over the turns made! Experience life from the frustrating perspective of a companion NPC! Enjoy a pixelated but not overly detailed game world!",
                        "Made in 48 hours for the GMTK Jam 2020",
                    ]}
                    images={[i1]}
                    slideWidth={100}
                    nested={true}
                    links={[
                        ["Play Now!", "https://willf668.itch.io/com"]
                    ]}
                    date="July 2020"
                />
            </div>
        </div>
    )
}
