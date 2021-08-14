import React from 'react';
import { useState, useEffect } from 'react';

export const TimeContext = React.createContext([]);

function TimeContextProvider (props) {
    const [time,setTime] = useState(7000);
    const [tiempo,setTiempo] = useState(0);
    const [pausa, setPausa] = useState(false)

    function addTime(a){
        setTime(time+a)
    }

    function lessTime(a){
        setTime(time+a)
    }
 
    function pauser(){
        setPausa(!pausa)
    }

    function timer(){
       setTiempo(tiempo + 1000) 
    }

    useEffect(()=>{
        console.log(time);
        if (time < 7000){
            setTime(7000)
        }
    },[time])

    return(
        <TimeContext.Provider value={[addTime, lessTime, time, pausa, pauser, tiempo, timer]}>
            {props.children}
        </TimeContext.Provider>
    )
}

export default TimeContextProvider;