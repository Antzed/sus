import * as React from "react";
import { Engine, RenderClones, Walls, Circle } from "react-matter-js";


export function SussyBakas() {
    const width = window.innerWidth;
    const height = window.innerHeight+100;
    const circleCount = 125;
    const cirlceSize = height * 0.05;
    const whoppyCount = 30;
    
    const circleOptions = {
        render: {
            sprite:{
                texture: "https://www.graphicpie.com/wp-content/uploads/2020/11/red-among-us-png-370x450.png",
                xScale: 0.5,
                yScale: 0.5   
            }
            
        }
    }

    const whoppyOptions = {
        render: {
            sprite:{
                texture: "https://www.graphicpie.com/wp-content/uploads/2020/11/among-us-green-png-370x450.png",
                xScale: 0.5,
                yScale: 0.5
            }
            
        }
    }
  
    const renderCircles = () => {
        
      return [...Array(circleCount).keys()].map(num => (
        <Circle key={num} clone x={300} y={100} radius={cirlceSize} options={circleOptions}/>
      ));
    };

    const renderWhoppies = () => {
        
        return [...Array(whoppyCount).keys()].map(num => (
          <Circle key={num} clone x={300} y={100} radius={cirlceSize} options={whoppyOptions}/>
        ));
      };

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
            
            
            {renderWhoppies()}
            {renderCircles()}
            
            </RenderClones>
        </Engine>
        </>
    );
}