import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.css';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import NewCampaignPage from './pages/new-campaign/new-campagin.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' render={()=><Redirect to='/campaigns'/>}/>
        <Route path='/campaigns' component={HomePage}/>
        <Route exact path='/new-campaign' component={NewCampaignPage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
