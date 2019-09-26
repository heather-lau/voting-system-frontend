import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import Header from './components/header/header.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'/>
        <Route path='/campaigns'/>
        <Route exact path='/new-campaign'/>
        <Route exact path='/signin'/>
      </Switch>
    </div>
  );
}

export default App;
