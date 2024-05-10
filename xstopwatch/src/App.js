import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(()=>{
    let intervalID;
    if(isRunning){
      intervalID=setInterval(()=>{
        setTime((prev)=>prev+1);
      },1000);
    }
    return()=> clearTimeout(intervalID);
  },[isRunning])


  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  };

  const startStop=()=>{
    setIsRunning(!isRunning);
  }
  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time:{formatTime(time)}</p>
      <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
