import React, { ReactElement } from 'react'
import Slideshow from '../Slideshow'

import './Page.css'
import LinkButton from "../LinkButton"

interface Props {

}

export default function Research(props: Props): ReactElement {
    return (
        <div className="pageHolder" id="ResearchPage">
            <div className="pageTitle">Research and References</div>
            <div className="pageColumn">
            </div>
        </div>
    )
}
