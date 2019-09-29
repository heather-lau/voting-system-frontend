import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.css';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import NewCampaignPage from './pages/new-campaign/new-campagin.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import UserCampaignsPage from './pages/user-campaigns/user-campaigns.component.jsx'
import MenuDropdown from './components/menu-dropdown/menu-dropdown.component.jsx'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' render={()=><Redirect to='/campaigns'/>}/>
        <Route path='/campaigns' component={HomePage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
        <Route exact path='/new-campaign' component={NewCampaignPage}/>
        <Route exact path='/me/campaigns' component={UserCampaignsPage}/>
      </Switch>
      <MenuDropdown/>
    </div>
  );
}

export default App;
