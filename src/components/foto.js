import React,{useState, useEffect, useContext} from 'react';
import '../index.css';
import {TimeContext} from '../context/context';
import Home from '../assets/home.png';

export default function Foto({src, id}){
    const [,,time] = useContext(TimeContext)
    const [ID, setId] = useState(id+2)
    useEffect(() => {
        // opacifyer();
    }, [src])

    // function opacifyer(){
    //     for(var i=0; i=time; i+time/4){
    //         console.log(i, 'from pic');
    //     }
    // }

    return(
        <div className="layered-image">
            <img src={(`../assets/id${id}.png`)} height="50%" width="90%"/>
        </div>
    )
}