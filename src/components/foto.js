import React,{useState, useEffect, useContext} from 'react';
import '../index.css';
import {TimeContext} from '../context/context';

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
        <div class="layered-image">
            <img src={`/assets/${id}.png`} height="50%" width="100%"/>
            {/* <img class="image-overlay" src={`/assets/${id}.png`} height="50%" width="100%"/> */}
        </div>
    )
}