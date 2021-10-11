import React,{useState, useContext, useEffect} from 'react';
import '../index.css';
import {TimeContext} from '../context/context';

export default function Zocalo(props){
    const [, ,time, , , , ] = useContext(TimeContext);
    
    const [fadeProp, setFadeProp] = useState({fade: 'fade-in'})
    useEffect(()=>{
        // alert(props.texto);
    },[])

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
   }, [props.texto])

    return(
        <div className={fadeProp.fade}>
            
            {typeof(props.texto) == 'undefined' ? 'HORA 1: Te miro - sos el soporte': <span>{props.texto
                }</span>}
        </div>
    )
}