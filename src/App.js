import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';

import { setCurrentUser } from './redux/user/user.actions'

import Header from './components/header/header.component'
import NewCampaignPage from './pages/new-campaign/new-campagin.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import ErrorNotFoundPage from './pages/error-not-found/error-not-found.component.jsx'

import CampaignRoutes from './routes/campaigns'
import UserCampaignsRoutes from './routes/user-campaigns'

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
    const { currentUser } = this.props
    return (
      <div>
        <Header/>
        <Switch>
            <Route exact path='/' render={()=><Redirect to='/campaigns'/>}/>
            <Route path='/campaigns' component={CampaignRoutes}/>
            <Route exact path='/signin' render={() => currentUser ? <Redirect to='/'/> : < SignInAndSignUpPage/>}/>
            <Route exact path='/new-campaign' render={() => currentUser ? <NewCampaignPage/> : <Redirect to='/signin'/>}/>
            <Route path='/me/campaigns' component={UserCampaignsRoutes}/>
            <Route exact component={ErrorNotFoundPage}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)
