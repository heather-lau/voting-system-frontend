import React from 'react'
import { connect } from 'react-redux'

import { setCurrentUser } from '../../redux/user/user.actions'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import Auth from '../../utils/auth.js'
import API from '../../constants/api' 

import {
  SignInContainer,
  SignInTitle
} from './sign-in.styles'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { email, password } = this.state
    const { setCurrentUser } = this.props

    try {
      let response = await fetch(API.signIn, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email,password }),
      })

      // Check if is user not created
      let responseJson = await response.json()
      if (response.status !== 200) {
        throw new Error(responseJson.errMsg)
      }

      // Store tokens
      const { accessToken, refreshToken, userData } = responseJson.payload
      Auth.storeTokens(accessToken, refreshToken)
      this.setState({ 
        email: '', 
        password: '' 
      })
      if (userData) { 
        setCurrentUser({...userData})
      }
    } catch (error) {
      alert(error)
    }
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <CustomButton type='submit'> Sign in </CustomButton>
        </form>
      </SignInContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(SignIn)
