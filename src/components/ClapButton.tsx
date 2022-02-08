import React, { Component, ReactElement, useEffect, useState } from 'react'

import { setAPIFromData } from 'scripts/API';
import mojs from "@mojs/core"

import Clap from "../assets/clap.png"

interface Props {

}

export default function ClapButton({ }: Props): ReactElement {
    const [clapState, setClapState] = useState(0);
    useEffect(() => {
        setAPIFromData("clap", setClapState);
        const clap = document.getElementById('clap');
        const clapIcon = document.getElementById('clap--icon');
        const initialNumberOfClaps = generateRandomNumber(500, 10000);
        const btnDimension = 80
        const tlDuration = 300
        let numberOfClaps:number = 0;
        let clapHold: ReturnType<typeof setInterval>;

        const triangleBurst = new mojs.Burst({
            parent: clap,
            radius: { 50: 95 },
            count: 5,
            angle: 30,
            children: {
                shape: 'polygon',
                radius: { 6: 0 },
                scale: 1,
                stroke: 'rgba(211,84,0 ,0.5)',
                strokeWidth: 2,
                angle: 210,
                delay: 30,
                speed: 0.2,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
                duration: tlDuration
            }
        })
        const circleBurst = new mojs.Burst({
            parent: clap,
            radius: { 50: 75 },
            angle: 25,
            duration: tlDuration,
            children: {
                shape: 'circle',
                fill: 'rgba(149,165,166 ,0.5)',
                delay: 30,
                speed: 0.2,
                radius: { 3: 0 },
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
            }
        })
        const scaleButton = new mojs.Html({
            el: '#clap',
            duration: tlDuration,
            scale: { 1.3: 1 },
            easing: mojs.easing.out
        })
        if (clap===null||clapIcon===null) return;
        clap.style.transform = "scale(1, 1)" /*Bug1 fix*/

        const animationTimeline = new mojs.Timeline()
        animationTimeline.add([
            triangleBurst,
            circleBurst,
            scaleButton
        ])


        clap.addEventListener('click', function () {
            repeatClapping();
        })

        clap.addEventListener('mousedown', function () {
            clapHold = setInterval(function () {
                repeatClapping();
            }, 400)
        })

        clap.addEventListener('mouseup', function () {
            clearInterval(clapHold);
        })


        function repeatClapping() {
            updateNumberOfClaps()
            animationTimeline.replay()
            if (clap===null||clapIcon===null) return;
            clapIcon.classList.add('checked')
        }

        function updateNumberOfClaps() {
            if (clap===null||clapIcon===null) return;
            if (numberOfClaps < 10) 
            {
                numberOfClaps++;
                setAPIFromData("newClap",setClapState);
            }
        }

        function generateRandomNumber(min:number, max:number) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }, []);

    return (
        <div id="clapBox">
            <button id="clap" className="clap">
                <span>
                    <svg id="clap--icon" xmlns="http://www.w3.org/2000/svg" viewBox="-549 338 100.1 125">
                        <path d="M-471.2 366.8c1.2 1.1 1.9 2.6 2.3 4.1.4-.3.8-.5 1.2-.7 1-1.9.7-4.3-1-5.9-2-1.9-5.2-1.9-7.2.1l-.2.2c1.8.1 3.6.9 4.9 2.2zm-28.8 14c.4.9.7 1.9.8 3.1l16.5-16.9c.6-.6 1.4-1.1 2.1-1.5 1-1.9.7-4.4-.9-6-2-1.9-5.2-1.9-7.2.1l-15.5 15.9c2.3 2.2 3.1 3 4.2 5.3zm-38.9 39.7c-.1-8.9 3.2-17.2 9.4-23.6l18.6-19c.7-2 .5-4.1-.1-5.3-.8-1.8-1.3-2.3-3.6-4.5l-20.9 21.4c-10.6 10.8-11.2 27.6-2.3 39.3-.6-2.6-1-5.4-1.1-8.3z" />
                        <path d="M-527.2 399.1l20.9-21.4c2.2 2.2 2.7 2.6 3.5 4.5.8 1.8 1 5.4-1.6 8l-11.8 12.2c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l34-35c1.9-2 5.2-2.1 7.2-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l28.5-29.3c2-2 5.2-2 7.1-.1 2 1.9 2 5.1.1 7.1l-28.5 29.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.4 1.7 0l24.7-25.3c1.9-2 5.1-2.1 7.1-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l14.6-15c2-2 5.2-2 7.2-.1 2 2 2.1 5.2.1 7.2l-27.6 28.4c-11.6 11.9-30.6 12.2-42.5.6-12-11.7-12.2-30.8-.6-42.7m18.1-48.4l-.7 4.9-2.2-4.4m7.6.9l-3.7 3.4 1.2-4.8m5.5 4.7l-4.8 1.6 3.1-3.9" />
                    </svg>
                </span>
            </button>
            <div id="clapCount">{clapState}</div>
        </div>
    )
}
