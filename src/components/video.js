import React,{useEffect, useState} from 'react';
import Webcam from "react-webcam";

export default function Video(){
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };
    return(
        <div id="video">
        <Webcam     
            audio={false}
            height={160}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
        />
        </div>
    )
}