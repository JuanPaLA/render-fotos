import React,{useState, useEffect} from 'react';
import '../App.css';
import '../index.css';
import { Jumbotron, Container } from 'reactstrap';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Content(props){    
    return(
            <div>
            <Card body>
                <CardTitle tag="h1" style={{ textAlign:'center'}}>Objeto afecto</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <div style={{textAlign:'center'}}>
                    <Link to={'/content'}>
                        <Button color="danger" style={{width: '28vw', textAlign:'center'}}>Go somewhere</Button>
                    </Link>
                </div>
                </Card>
            </div>
    )
}