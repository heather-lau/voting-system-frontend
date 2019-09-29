import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';

import { setCurrentUser } from './redux/user/user.actions'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import NewCampaignPage from './pages/new-campaign/new-campagin.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import UserCampaignsPage from './pages/user-campaigns/user-campaigns.component.jsx'

import Auth from './utils/auth'


class App extends React.Component {
  async componentDidMount() {
    const { setCurrentUser } = this.props
    const tokens = Auth.getTokens()
    if (tokens && tokens.accessToken) {
      const user = await Auth.checkUser(tokens.accessToken)
      if (user) { 
        setCurrentUser({...user})
      }
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><Redirect to='/campaigns'/>}/>
          <Route path='/campaigns' component={HomePage}/>
          <Route exact path='/signin' component={SignInAndSignUpPage}/>
          <Route exact path='/new-campaign' component={NewCampaignPage}/>
          <Route exact path='/me/campaigns' component={UserCampaignsPage}/>
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App)
