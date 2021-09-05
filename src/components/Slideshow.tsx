import React, { ReactElement } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface Props {
    children:ReactElement[]
}

export default function Slideshow(props: Props): ReactElement {

    return (
        <div className="slideshow">
            <Carousel infiniteLoop={true} showThumbs={false} autoFocus={true}>
                {props.children}
            </Carousel>
        </div>
    )
}
