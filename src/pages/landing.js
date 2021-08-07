import React,{useState, useEffect} from 'react';
import '../App.css';
import '../index.css';
import Content from '../components/landingcontent';
import { Jumbotron, Container } from 'reactstrap';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export default function Landing(props){
    
    return(
        <div id="main">
                <img src="../assets/10.png"/>
            <div>
                <Content/>
            </div>
        </div>
    )
}