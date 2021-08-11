import React,{useEffect, useState, useContext} from 'react';
import {TimeContext} from '../context/context'

export default function Tiempo(){
  const [addTime,lessTime,time, tiempo, startTiempo, timer] = useContext(TimeContext)

  useEffect(() => {
    timer()
  }, [])
    
    return(
        <div id="time">
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
        <div id="stop-watch">
          <input type="submit" value= "+" onClick={()=>addTime(1000)}></input>
          <input type="submit" value= "-" onClick={()=>lessTime(-1000)}></input>
          Unit: {time}
        </div>
        </div>
    )
}