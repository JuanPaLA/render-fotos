import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Landing from './pages/landing';
import Render from './pages/render';
import  TimeContext  from './context/context';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
    <TimeContext>
    <Switch>
      <Route exact path="/">
        <Landing/>
      </Route>
      <Route exact path="/content">
        <Render/>
      </Route>
    </Switch>
    </TimeContext>
    </BrowserRouter>
  );
}

export default App;
