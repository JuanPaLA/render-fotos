import React,{useState, useEffect} from 'react';
import '../index.css';

export default function Zocalo({texto}){
    useEffect(() => {
        console.log(texto);
    }, [texto])
    return(
        <div id="slide-right">
            <h4>{texto}</h4>
        </div>
    )
}