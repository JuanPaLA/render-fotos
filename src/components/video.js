import React,{useEffect, useState} from 'react';
import Webcam from "react-webcam";

export default function Video(props){
    const px = 200;
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };
    useEffect(()=>{
        // alert('asd')
    },[window.innerWidth])
    return(
        <div id="video">
        <Webcam     
            audio={false}
            height={160}
            screenshotFormat="image/jpeg"
            width={300}
            videoConstraints={videoConstraints}
        />
        </div>
    )
}