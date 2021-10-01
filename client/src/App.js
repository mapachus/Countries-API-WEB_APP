import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Landing from './components/landing/Landing';
import Detail from './components/detail/Detail';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path = '/' component = {Landing}/>
    <Route exact path = '/home' component = {Home} />
    <Route exact path = '/details/:id' component = {Detail} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
