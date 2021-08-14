import React,{useState, useEffect, useContext} from 'react';
import '../App.css';
import '../index.css';
import Foto from '../components/foto';
import Video from '../components/video';
import Zocalo from '../components/zocalo';
import Tiempo from '../components/tiempo';
import {TimeContext} from '../context/context';


function FotoRender() {
const [fotos, setFotos] = useState([
  {id:1 , src: '../assets/1.jpg', texto: "HORA 1: Te miro - sos el soporte", hue: '#230E21 '},
  {id:2 , src: '../assets/2.jpg', texto: "HORA 2: Estoy dispuesta - sos prometedor", hue: '#8C7283 '},
  {id:3 , src: '../assets/3.jpg', texto: "HORA 3: Te pruebo - sos la materia", hue: '#230E21 '},
  {id:4 , src: '../assets/4.jpg', texto: "HORA 4: Te reconozco - sos yo", hue: '#8C7283 '},
  {id:5 , src: '../assets/5.jpg', texto: "HORA 5: Me desnudo - sos sensible ", hue: '#230E21 '},
  {id:6 , src: '../assets/6.jpg', texto: "HORA 6: Te peleo - sos mi dolor", hue: '#8C7283 '},
  {id:7 , src: '../assets/7.jpg', texto: "HORA 7: Te acompaño - me acompañas", hue: '#230E21 '},
  {id:8 , src: '../assets/8.jpg', texto: "HORA 8: Te disfruto - sos predecible", hue: '#8C7283 '},
  {id:9, src: '../assets/9.jpg', texto: "HORA 9: Te afecto - sos vulnerable", hue: '#230E21 '},
  {id:10 , src: '../assets/10.jpg', texto: "HORA 10: Te transformo - sos maleable", hue: '#8C7283 '},
  {id:11 , src: '../assets/11.jpg', texto: "HORA 11: Te pido - sos manipulable", hue: '#230E21 '},
  {id:12 , src: '../assets/12.jpg', texto: "HORA 12: Te atravieso - te rompes", hue: '#8C7283 '},
  {id:13 , src: '../assets/13.jpg', texto: "HORA 13: Te absorbo - sos mío", hue: '#230E21 '},
  {id:14 , src: '../assets/14.jpg', texto: "HORA 14: Corro tus límites - sos permisivo", hue: '#8C7283 '},
  {id:15 , src: '../assets/15.jpg', texto: "HORA 15: Te observo cambiar - sos otro", hue: '#230E21 '},
  {id:16 , src: '../assets/16.jpg', texto: "HORA 16: Te dejo algo de mí - sos noble", hue: '#8C7283 '},
  {id:17 , src: '../assets/17.jpg', texto: "HORA 17: Te pienso - te desvaneces", hue: '#230E21 '},
  {id:18 , src: '../assets/18.jpg', texto: "HORA 18: Te lamo - nos fusionamos", hue: '#8C7283 '},
  {id:19 , src: '../assets/19.jpg', texto: "HORA 19: Te marco - sos débil", hue: '#230E21 '},
  {id:20 , src: '../assets/20.jpg', texto: "HORA 20: Te desgarro - sos cuerpo", hue: '#8C7283 '},
  {id:21 , src: '../assets/21.jpg', texto: "HORA 21: Te nublo - sos esencial", hue: '#230E21 '},
  {id:22 , src: '../assets/22.jpg', texto: "HORA 22: Te fantaseo - sos cambiante", hue: '#8C7283 '},
  {id:23 , src: '../assets/23.jpg', texto: "HORA 23: Te escapás - sos demasiado libre ", hue: '#8C7283 '},
  {id:24 , src: '../assets/24.jpg', texto: "HORA 24: Te organizo - no te entiendo, tenés voluntad propia.", hue: '#8C7283 '}
])
const [id, setId] = useState(1)
const [src, setSrc] = useState()
const [texto, setTexto] = useState()
const [,,time,pausa] = useContext(TimeContext)

function interval() {
  if(!pausa){
    setTimeout(()=>{
      if(id == 23){
        setTexto(fotos[id].texto)
        setId(1)
      }else{
        setTexto(fotos[id].texto)
        setId(id+1)
      }    
    },time)
  }
}

useEffect(() => {
    console.log(pausa)
    interval()
    return () => clearInterval(interval);
}, [id, pausa])

  return (
    <div id="grid-container">
      
      <div id="foto-wrapper">
        <Foto src={src} id={id}/>
      </div>

      <div id="tiempo-wrapper">
        <Tiempo/>
      </div>

      <div id="video-wrapper">
        <Video/>
      </div>

      <div id="texto-wrapper">
        <Zocalo texto={texto}/>
      </div>
    </div>
  );
}

export default FotoRender;
