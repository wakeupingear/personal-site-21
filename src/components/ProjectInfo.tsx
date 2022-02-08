import React, { Children, ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';

import Slideshow from './Slideshow';
import LinkButton from "./LinkButton"

type Props = {
    id: string,
    title: string,
    color: string,
    borderColor?: string,
    text?: any[],
    images?: any[],
    alwaysHorizontal?: boolean,
    slideWidth?: number,
    nested?: true,
    collaborators?: string[][],
    links?: string[][],
    date?: string,
};

export default function ProjectInfo(props: Props) {
    const colorStyle = { backgroundColor: props.color, borderColor: props.color, borderStyle: "none" };
    if (props.borderColor) {
        colorStyle.borderStyle = "solid";
        colorStyle.borderColor = props.borderColor;
    }

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

    const collabs = ((props.collaborators) ?
        <div className="textBox">
            {props.collaborators.map((t) => {
                if (t.length === 1) return <div>{t[0]}</div>
                if (t.length === 2) return <div>{t[0] + " - " + t[1]}</div>
                return <div><a href={t[2]} target="_blank">{t[0]}</a>{" - " + t[1]}</div>
            })}
        </div> : null);

    const text = ((props.text) ? <div className='column centered'>
        {props.text.map((t) => {
            return <div className="textBox">{t}</div>
        })}
    </div> : null);

    const slideStyle = { "maxWidth": "100%", "height": "100%" };
    if (props.slideWidth) slideStyle.maxWidth = props.slideWidth + "%";
    const slides = ((props.images) ? <Slideshow >
        {props.images.map(function (element) {
            if ((typeof element) != "string") return <div className='videoSlide'>{element}</div>;
            return <img src={element} />
        })}
    </Slideshow> : null)

    const buttons = <div className="pageRow linkButtonRow">
        {(props.links) ? props.links.map(function (element) {
            return <LinkButton link={element[1]} >
                {element[0]}
            </LinkButton>
        }) : null}
    </div>

    return <div className={(!props.nested) ? 'pageHolder' : "jamGame"} id={props.id} style={colorStyle}>
        {(props.date && false) ? <div className="pageDate">
            {props.date}
        </div> : null}
        <div className={(props.nested) ? "jamGameTitle" : "pageTitle"}>
            <div>{props.title}</div>
        </div>
        {(!isPortrait || props.alwaysHorizontal) ?
            <div className='row centered'>
                <div className="pageColumn noSpacePage">
                    {text}
                    {collabs}
                    {buttons}
                </div>
                {(props.images) ? <div className='pageColumn noSpacePage' style={slideStyle}>
                    {slides}
                </div> : null}
            </div> :
            <div className='pageColumn noSpacePage'>
                {text}
                <div className='pageColumn' style={slideStyle}>
                    {slides}

                </div>
                {buttons}
                {collabs}
            </div>}
    </div>;
}
