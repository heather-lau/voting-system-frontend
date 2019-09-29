import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import Auth from '../../utils/auth.js'

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

    try {
      const response = await Auth.signin(email, password)
      const { accessToken, refreshToken } = response
      Auth.storeTokens(accessToken, refreshToken)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error)
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

export default SignIn
