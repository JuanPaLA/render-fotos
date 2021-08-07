import React from 'react';
import { useState, useEffect } from 'react';

export const TimeContext = React.createContext([]);

function TimeContextProvider (props) {
    const [time,setTime] = useState(4000);

    function addTime(a){
        setTime(time+a)
    }

    function lessTime(a){
        setTime(time+a)
    }

    useEffect(()=>{
        console.log(time);
    },[time])

    return(
        <TimeContext.Provider value={[addTime, lessTime, time]}>
            {props.children}
        </TimeContext.Provider>
    )
}

export default TimeContextProvider;