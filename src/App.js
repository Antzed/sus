import React from 'react';
//import button from react-bootstrap
import Button from 'react-bootstrap/Button';
import { SussyBakas } from './Components/sussy-bakas';
import song from './song/youtube-grd-K33tOSM-Among Us Drip Theme Song Original (Among Us Trap Remix _ Amogus Meme Music).webm';

function App() {
  function susInitial(){
    return <SussyBakas className="sussyBaka"/>
  }

  const [showButton, setShowButton] = React.useState("");
  const [showSussyBakas, setShowSussyBakas] = React.useState(null);
  const [overallClass, setOverallClass] = React.useState("startButton");

  const startGame = () => {
    setShowButton("hide");
    setOverallClass("startButton sussy-background");
    setShowSussyBakas(susInitial);
  }

  const audio = new Audio(song);

  function play(){
    audio.play()
    audio.autoplay = true;
  }

  
  return (
      <div className={overallClass}> 
        <span className={showButton}><Button variant="primary" onClick={() => {startGame();play()}}>Start</Button></span>
        {showSussyBakas}
      </div>
  );
}

export default App;
