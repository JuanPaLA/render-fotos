import React,{useState, useEffect} from 'react';
import '../index.css';

export default function Foto({src, id}){
    const [ID, setId] = useState(id+2)
    useEffect(() => {
        
    }, [src])

    return(
        <div id="foto">
            <img id="pic" src={`/assets/${id}.png`} height="50%" width="100%"/>
        </div>
    )
}