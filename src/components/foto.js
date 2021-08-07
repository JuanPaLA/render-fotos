import React,{useState, useEffect} from 'react';
import '../index.css';

export default function Foto({src, id}){
    const [ID, setId] = useState(id+2)
    useEffect(() => {
        
    }, [src])

    return(
        <div class="layered-image">
            <img src={`/assets/${id}.png`} height="50%" width="100%"/>
            <img class="image-overlay" src={`/assets/${id}.png`} height="50%" width="100%"/>
        </div>
    )
}