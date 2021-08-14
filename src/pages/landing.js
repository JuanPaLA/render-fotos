import React,{useState, useEffect} from 'react';
import '../App.css';
import '../index.css';
import Content from '../components/landingcontent';


export default function Landing(){
    
    return(
        <div id="main">
                <img src="assets/home.png" width="100%"/>
            <div>
                <Content/>
            </div>
        </div>
    )
}