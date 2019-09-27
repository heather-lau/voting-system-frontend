import React from 'react'

import FormInput from '../form-input/form-input.component'
import CutsomButton from '../custom-button/custom-button.component'

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

  handleSubmit = event => {
    event.preventDefault()

    const { password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert("password don't match")
      return
    }

    this.setState({
      name: '',
      email: '',
      hkid: '',
      password: '',
      confirmPassword: ''
    })
  }

  render() {
    const { name, email, hkid, password, confirmPassword } = this.state
    return (
      <div>
        <h2>I don't have a account</h2>
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
      </div>
    )
  }
}

export default SignUp