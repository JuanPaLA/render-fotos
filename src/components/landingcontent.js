import React,{useState, useEffect} from 'react';
import '../App.css';
import '../index.css';
import { Jumbotron, Container } from 'reactstrap';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import {BsCollectionPlay} from 'react-icons/bs';

export default function Content(props){    

    return(
            <div>
            <Card body>
                
                <CardText style={{ padding:'0% 10% 0% 10%'}}> ¿De quién te enamorás para no crear? ¿Cuánto tarda? ¿Cuánto tiempo pasó? ¿Cuánto plástico te seduce? ¿Cuánto arte cabe en la gota de saliva compartida? ¿Qué se escurre por las comisuras? ¿Dónde reside le otre? ¿Cuándo lo ves sin verte? ¿Qué tan descartable es tu tiempo? ¿Qué te urge de deseo? ¿Qué no aparece en los sueños de otres? ¿Qué te decís en silencio? ¿Cuándo te cansaste del vacío? ¿En qué crees para dar cuerpo a alguien? ¿Cuándo se acaba la ficción? ¿Quién sos después? ¿Cómo creás sin amor?</CardText>
                <div style={{textAlign:'center'}}>
                    <Link to={'/content'}>
                        <Button 
                        style={{
                            width: '28vw', 
                            textAlign:'center',
                            color:'#e1cde5'
                                }}>
                            <BsCollectionPlay fa-4x/>
                        </Button>
                    </Link>
                </div>
                <CardText style={{ fontStyle:'italic', padding:'0% 10% 0% 10%', fontSize: '1.2em', marginTop:'2vh'}}>Una obra de Anabel Chaves del Pino</CardText>
                </Card>
            </div>
    )
}