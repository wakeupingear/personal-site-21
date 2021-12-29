import React, { ReactElement } from 'react'
import ImageGallery from 'react-image-gallery';

import './Page.css'

interface Props {

}

export default function Will(props: Props): ReactElement {

    return (
        <div className="pageHolder" id="WillPage">
            <div className="pageTitle">Will Farhat</div>
            <div className="pageColumn">
            </div>
        </div>
    )
}
