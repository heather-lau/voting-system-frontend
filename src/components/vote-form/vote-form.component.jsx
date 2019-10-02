import React from 'react'
import { withRouter } from 'react-router-dom'

import RadioInput from '../form-radio/form-radio.component'
import CustomButton from '../custom-button/custom-button.component'

import { VoteListContainer } from './vote-form.styles'

import Auth from '../../utils/auth'
import API from '../../constants/api'

class VoteForm extends React.Component{
  constructor() {
    super()

    this.state = {
      voteOption: null
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { voteOption } = this.state
    const { history, currentUser, campaign } = this.props
    if (!currentUser) history.push('/signin')

    try {
      const tokens = Auth.getTokens()
      const { accessToken } = tokens
      const url = `${API.campaigns}/${campaign._id}/vote`
      console.log(url)
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ voteOption }),
      })
      let responseJson = await response.json()
      if (response.status === 201) {
        alert('Success voted')
      } else {
        alert(responseJson.errMsg)
        throw new Error(responseJson.errMsg)
      }
    } catch (err) {
      console.error(err)
    }
  }

  handleChange = event => {
    this.setState({ voteOption: event.target.value })
  }

  render() {
    const { campaign } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <VoteListContainer>
          {campaign.voteOptions.map(option => (
            <RadioInput 
              key={option._id}
              label={option.name}
              value={option._id}
              checked={this.state.voteOption === option._id}
              handleChange={this.handleChange}
            />
          ))}
        </VoteListContainer>
        <CustomButton type='submit'>Submit Vote</CustomButton>
      </form>
    )
  }
}

export default withRouter(VoteForm)