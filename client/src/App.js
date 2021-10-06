import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Landing from './components/landing/Landing';
import Detail from './components/detail/Detail';
import Add from './components/add/Add';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path = '/' component = {Landing}/>
    <Route exact path = '/home' component = {Home} />
    <Route exact path = '/details/:id' component = {Detail} />
    <Route exact path = '/Add' component = {Add} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
