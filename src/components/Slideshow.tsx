import React, { ReactElement } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Styles } from '@fortawesome/fontawesome-svg-core';

interface Props {
    children: ReactElement[]
}

export default function Slideshow(props: Props): ReactElement {

    return (
        <div className="slideshow">
            <Carousel infiniteLoop={true} showThumbs={false} autoFocus={false} useKeyboardArrows={true}>
                {props.children.map(function (element) {
                    return <div className='slideshowImg'>{element}</div>
                })}
            </Carousel>
        </div>
    )
}
