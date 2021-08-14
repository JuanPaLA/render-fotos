import React,{useState, useContext, useEffect} from 'react';
import '../index.css';
import {TimeContext} from '../context/context'

export default function Zocalo({texto}){
    
    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in'
    })

    const [addTime,lessTime,time, pausa, pauser, tiempo, timer] = useContext(TimeContext);
    
    useEffect(() => {
        const timeout = setInterval(() => {
           if (fadeProp.fade === 'fade-in') {
              setFadeProp({
                   fade: 'fade-out'
              })
           } else {
                setFadeProp({
                   fade: 'fade-in'
                })
           }
        }, time);
   return () => clearInterval(timeout)
   }, [fadeProp])

    

    return(
        <div className={fadeProp.fade}>
            {texto}
        </div>
    )
}