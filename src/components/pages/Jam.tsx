import React, { ReactElement } from 'react'
import ImageGallery from 'react-image-gallery';

import './Page.css'

interface Props {

}

export default function Jam(props: Props): ReactElement {

    return (
        <div className="pageHolder" id="JamPage">
            <div className="pageTitle">Jam Games</div>
            <div className="pageColumn">
                Games go here
            </div>
        </div>
    )
}
