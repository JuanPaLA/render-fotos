import React from 'react';
import { useState, useEffect } from 'react';

export const TimeContext = React.createContext([]);

function TimeContextProvider (props) {
    const [time,setTime] = useState(4000);
    const [tiempo, setTiempo] = useState(0)

    function addTime(a){
        setTime(time+a)
    }

    function lessTime(a){
        setTime(time+a)
    }

    function startTiempo() {
        setTiempo(tiempo + 1000) 
    }

    function timer() {
        setInterval(startTiempo, 1000);
    }
 

    useEffect(()=>{
        console.log(time);
    },[time])

    return(
        <TimeContext.Provider value={[addTime, lessTime, time, tiempo, startTiempo,timer]}>
            {props.children}
        </TimeContext.Provider>
    )
}

export default TimeContextProvider;