import React,{useEffect, useState, useContext} from 'react';
import {TimeContext} from '../context/context'
import {BsSkipForward, BsSkipBackward, BsPlay, BsPause} from 'react-icons/bs'

export default function Tiempo(){

  const [addTime,lessTime,time, pausa, pauser, tiempo, timer] = useContext(TimeContext);

  useEffect(() => {
    setTimeout(()=>{
      timer()
    },1000)
  }, [tiempo])
    
    return(
        <div id="time">

          <div id="timer">
            <div id="timer-text">
              Tiempo percibido
            </div>
            <div>
              <span>
                {("0" + Math.floor((tiempo / 60000) % 60)).slice(-2)}:
              </span>
              <span>
                {("0" + Math.floor((tiempo / 1000) % 60)).slice(-2)}.
              </span>
              <span>
                {("0" + ((tiempo / 10) % 100)).slice(-2)}
              </span>
            </div>
          </div>

          <div id="stop-watch">
            <BsSkipBackward onClick={()=>lessTime(1000)}/>
              {!pausa ? <BsPause onClick={()=>pauser()}/> :<BsPlay onClick={()=>pauser()}/> }
            <BsSkipForward onClick={()=>addTime(-1000)}/>
          </div>
          
          <div id="unit">
            <div>
              {/* <span>{time}</span> */}
              {( '' + Math.floor((time / 1000) % 600)).slice(-2)}s
            </div>
            <div id="timer-text">
              Unidad de tiempo
            </div>
        </div>
        </div>
    )
}