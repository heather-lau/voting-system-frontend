import React from 'react'
import { connect } from 'react-redux'

import { setCurrentUser } from '../../redux/user/user.actions'

import Auth from '../../utils/auth'
import API from '../../constants/api'

import FormInput from '../form-input/form-input.component'
import CutsomButton from '../custom-button/custom-button.component'

import { SignUpContainer, SignUpTitle } from './sign-up.styles'

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      hkid: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { name, email, hkid, password, confirmPassword } = this.state
    const { setCurrentUser } = this.props

    if (password !== confirmPassword) {
      alert("password don't match")
      return
    }

    try {
      let response = await fetch(API.signUp, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, hkid, password }),
      })
      
      // Check if is server not returning ok
      let responseJson = await response.json()
      if (response.status !== 201) {
        throw new Error(responseJson.errMsg)
      }

      // Store tokens 
      const { accessToken, refreshToken, userData } = responseJson.payload
      Auth.storeTokens(accessToken, refreshToken)
      this.setState({
        name: '',
        email: '',
        hkid: '',
        password: '',
        confirmPassword: ''
      })
      if (userData) { 
        setCurrentUser({...userData})
      }
    } catch (error) {
      alert(error)
    }
  }

  render() {
    const { name, email, hkid, password, confirmPassword } = this.state
    return (
      <SignUpContainer>
        <SignUpTitle>Register to vote and create campaign</SignUpTitle>
        <span>Sign up with your email and hkid</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput 
            type='text'
            name='name'
            value={name}
            onChange={this.handleChange}
            label='Name'
            required
          />
          <FormInput 
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput 
            type='text'
            name='hkid'
            value={hkid}
            onChange={this.handleChange}
            label='HKID'
            required
          />
          <FormInput 
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput 
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CutsomButton type='submit'>Sign up</CutsomButton>
        </form>
      </SignUpContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(SignUp)