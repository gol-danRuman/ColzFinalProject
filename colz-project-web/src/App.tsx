import React, { Component, Fragment } from 'react';
import './App.css';
// import axios from './axios'
// import { getStarted, getHelloWorld } from './components/crimes';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import SideBar from './components/SideBar';
import LandingPage from './components/LandingPage';
import Graph from './components/Graph';
import Predict from './components/Predict';

const FourOhFour = () => <h1>404 error</h1>;


const Application = () =>(
  
  <BrowserRouter>
    <div className="app">
    <Header />
    <SideBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/graph" component={Graph}/>
        <Route exact path="/predict" component={Predict}/>
        <Route component={FourOhFour}/>
        {/* <Route path="/started" component={Started}/> */}
      </Switch>
    </div>
  </BrowserRouter>
);

 class App extends Component<any,any> {

  render(){
    return(
      <Application />
    )
  };
}

export default App;
