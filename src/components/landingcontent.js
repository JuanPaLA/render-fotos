import React,{useState, useEffect} from 'react';
import '../App.css';
import '../index.css';
import { Jumbotron, Container } from 'reactstrap';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import { getFirestore } from '../firestore'
import {BsCollectionPlay} from 'react-icons/bs';

export default function Content(props){    
    const [data, setData] = useState([]);
    const [visitas, setVisitas] = useState(0);

    useEffect(()=> {
        const db = getFirestore();
        const data = db.collection("visitas").limit(1);
        // 2do: aca deberia ser un random + no hay estado 

        data
        .get()
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setVisitas(data[0].cantidad);
          console.log(visitas);
        })
        .then(
            db.collection('visitas').doc('8dG89A2PQ5MxoDNZZZwr').update({
                cantidad: visitas
            })
        );
        
    },[])

    return(
            <div>
            <Card body>
                <CardTitle tag="h1" style={{ textAlign:'center'}}></CardTitle>
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
                </Card>
            </div>
    )
}