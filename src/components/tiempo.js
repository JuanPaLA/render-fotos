import React,{useEffect, useState, useContext} from 'react';
import {TimeContext} from '../context/context'

export default function Tiempo(){
  const [isActive, setIsActive] = useState(true);
  const [isPaused, setIsPaused] = useState(true);
  const [unit, setUnit] = useState(10)
  const [addTime,lessTime,time] = useContext(TimeContext)

  // useEffect(() => {
  //   let interval = null;
  
  //   if (isActive) {
  //     interval = setInterval(() => {
  //       setTime((time) => time + unit);
  //     }, 10);
  //       } else {
  //       clearInterval(interval);
  //       }
  //       return () => {
  //       clearInterval(interval);
  //       };
  //   }, [isActive, isPaused, unit]);
    
    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };
    
    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };
    
    const handleReset = () => {
        setIsActive(false);
        // setTime(0);
    };
    
    return(
        <div id="time">
        <div>
          <span>
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          </span>
          <span>
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
          </span>
          <span>
            {("0" + ((time / 10) % 100)).slice(-2)}
          </span>
        </div>
        <div id="stop-watch">
          <input type="submit" value= "+" onClick={()=>addTime(1000)}></input>
          <input type="submit" value= "-" onClick={()=>lessTime(-1000)}></input>
          {unit}
        </div>
        </div>
    )
}