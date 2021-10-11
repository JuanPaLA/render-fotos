import React,{useEffect, useState, useContext} from 'react';
import {TimeContext} from '../context/context'
import '../index.css';

export default function Foto({id}){
    const [fadeProp, setFadeProp] = useState({fade: 'fade-in'})
    const [, ,time, , , , ] = useContext(TimeContext);
    useEffect(() => {
        console.log(id);
    }, [id])

    function setIn(){
        setFadeProp({fade:'fade-in'})
    }

    function setOut(){
        setFadeProp({fade:'fade-out'})
    }

    // para time = 7
    useEffect(() => {
        setIn() // 2 seg / F-IN / x CSS
        setTimeout(()=>{
            setOut()
        },(time-1500)) // en 3 seg de Perma
        setIn()
   }, [id])

    return(
        <div className={fadeProp.fade}>
            <img src={(`../assets/${id}a.jpg`)} height="50%" width="90%"/>
        </div>
    )
}