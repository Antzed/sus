import * as React from "react";
import { Engine, RenderClones, Walls, Circle } from "react-matter-js";


export function SussyBakas() {
    const width = window.innerWidth;
    const height = window.innerHeight+100;
    const circleCount = 100;
    const cirlceSize = height * 0.05;
    const whoppyCount = 30;
    const lemonSusCount = 30;

    const susOptions = (url)   => {
        return {
            render: {
                sprite:{
                    texture: url,
                    xScale: 0.5,
                    yScale: 0.5
                }
            }
        }
    }

    const susSriteUrl = {
        circle: "https://www.graphicpie.com/wp-content/uploads/2020/11/red-among-us-png-370x450.png",
        whoppy: "https://www.graphicpie.com/wp-content/uploads/2020/11/among-us-green-png-370x450.png",
        lemonSus: "https://www.graphicpie.com/wp-content/uploads/2020/11/cyan-among-us-character-1-370x450.png"
    }

    const renderSus = (count, options, url) => {
        return [...Array(count).keys()].map(num => (
            <Circle key={num} clone x={300} y={100} radius={cirlceSize} options={options(url)}/>
        ));
    }

    return (
        <>
        <Engine options={{}}>
            <RenderClones
            enableMouse
            options={{
                width,
                height,
                background: "transparent",
                wireframeBackground: "transparent",
                wireframes: false,
                visible: false
            }}
            >
            <Walls x={0} y={0} width={width} height={height} wallWidth={10} />
             
            {renderSus(circleCount, susOptions, susSriteUrl.circle)}
            {renderSus(whoppyCount, susOptions, susSriteUrl.whoppy)}
            {renderSus(lemonSusCount, susOptions, susSriteUrl.lemonSus)}
            
            </RenderClones>
        </Engine>
        </>
    );
}