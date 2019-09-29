import React from 'react'

import FormInput from '../form-input/form-input.component'
import CutsomButton from '../custom-button/custom-button.component'

import Auth from '../../utils/auth'

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

    if (password !== confirmPassword) {
      alert("password don't match")
      return
    }

    try {
      const response = await Auth.signup(name, email, hkid, password)
      const { accessToken, refreshToken } = response
      Auth.storeTokens(accessToken, refreshToken)
      this.setState({
        name: '',
        email: '',
        hkid: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { name, email, hkid, password, confirmPassword } = this.state
    return (
      <SignUpContainer>
        <SignUpTitle>I don't have a account</SignUpTitle>
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

export default SignUp