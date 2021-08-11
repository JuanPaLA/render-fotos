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
  {id:3 , src: '../assets/3.png', texto: "titulo 1", hue: '#230E21 '},
  {id:4 , src: '../assets/4.png', texto: "titulo 2", hue: '#8C7283 '},
  {id:5 , src: '../assets/5.png', texto: "titulo 3", hue: '#230E21 '},
  {id:6 , src: '../assets/6.png', texto: "titulo 4", hue: '#8C7283 '},
  {id:7 , src: '../assets/7.png', texto: "titulo 5", hue: '#230E21 '},
  {id:8 , src: '../assets/8.png', texto: "titulo 6", hue: '#8C7283 '},
  {id:9 , src: '../assets/9.png', texto: "titulo 7", hue: '#230E21 '},
  {id:10 , src: '../assets/10.png', texto: "titulo 8", hue: '#8C7283 '},
  {id:11, src: '../assets/11.png', texto: "titulo 9", hue: '#230E21 '},
  {id:12 , src: '../assets/12.png', texto: "titulo 10", hue: '#8C7283 '},
  {id:13 , src: '../assets/13.png', texto: "titulo 5", hue: '#230E21 '},
  {id:14 , src: '../assets/14.png', texto: "titulo 6", hue: '#8C7283 '},
  {id:15 , src: '../assets/15.png', texto: "titulo 1", hue: '#230E21 '},
  {id:16 , src: '../assets/16.png', texto: "titulo 2", hue: '#8C7283 '},
  {id:17 , src: '../assets/17.png', texto: "titulo 3", hue: '#230E21 '},
  {id:18 , src: '../assets/18.png', texto: "titulo 4", hue: '#8C7283 '},
  {id:19 , src: '../assets/19.png', texto: "titulo 5", hue: '#230E21 '},
  {id:20 , src: '../assets/20.png', texto: "titulo 6", hue: '#8C7283 '},
  {id:21 , src: '../assets/21.png', texto: "titulo 1", hue: '#230E21 '},
  {id:22 , src: '../assets/22.png', texto: "titulo 2", hue: '#8C7283 '},
  {id:23 , src: '../assets/23.png', texto: "titulo 3", hue: '#230E21 '},
  {id:24 , src: '../assets/24.png', texto: "titulo 4", hue: '#8C7283 '},
  {id:25 , src: '../assets/25.png', texto: "titulo 5", hue: '#230E21 '},
  {id:26 , src: '../assets/26.png', texto: "titulo 6", hue: '#8C7283 '}
])
const [id, setId] = useState(0)
const [src, setSrc] = useState()
const [texto, setTexto] = useState()
const [paleta, setPaleta] = useState() 
const [,,time] = useContext(TimeContext)

function interval() {
    setTimeout(()=>{
      if(id == 23){
        setPaleta(fotos[id].hue)
        // document.getElementById('grid-container').style.backgroundColor = `${paleta}`
        setId(0)
        setTexto(fotos[id].texto)
      }else{
        console.log('line', id);
        setPaleta(fotos[id].hue)
        setTexto(fotos[id].texto)
        // document.getElementById('grid-container').style.backgroundColor = `${paleta}`
        setId(id+1)
      }    
    },time)
}

useEffect(() => {
  // alert(time)
    console.log(id, ' l => ', fotos.length)
    interval()
    return () => clearInterval(interval);
}, [id])

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
