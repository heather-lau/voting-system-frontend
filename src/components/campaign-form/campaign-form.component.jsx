import React from 'react'
import moment from 'moment'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import FormDate from '../form-date/form-date.component'
import { AppendInputButton, CampaignFormContainer } from './campaign-form.styles'

import API from '../../constants/api'

class CampaignForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.title || '',
      description: this.props.description || '',
      starts: this.props.starts || null,
      ends: this.props.ends || null,
      voteOptions: this.props.voteOptions || [],

      focusedInput: null,
      showdata: null,
      inputs: ['input-0']
    }
  }

  async componentDidMount() {
    const { id, token } = this.props
    if (id) {
      try {
        const response = await fetch(`${API.userCampaigns}/${id}`, {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}`}
        })
        const responseJson = await response.json()
        const campaign = responseJson && responseJson.payload
        const { title, description, starts, ends, voteOptions } = campaign
        
        const options = voteOptions.map(voteOption => { return voteOption.name })
        const inputs = voteOptions.map((voteOption, idx) => { return `input-${idx}` })

        this.setState({
          title: title,
          description: description,
          voteOptions: options,
          inputs: inputs,
          starts: moment(starts),
          ends: moment(ends)
        })
      } catch (err) {
        console.error(err)
      }
    }
 
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { title, description, starts, ends, voteOptions } = this.state
    const { token, action, method } = this.props
    try {
      const response = await fetch(action, {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          starts,
          ends,
          voteOptions, 
        })
      })
      let responseJson = await response.json()
      if (response.status === 201) {
        alert('Success created')
      } else {
        alert(responseJson.errMsg)
        throw new Error(responseJson.errMsg)
      }
    } catch (err) {
      console.error(err)
    }

    this.setState({ 
      title: '',
      description: '',
      starts: null,
      ends: null,
      voteOptions: [],
      focusedInput: null,
      showdata: null,
      inputs: ['input-0']
    })
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  onOptionChange(index, e) {
    var options = this.state.voteOptions.slice();
    options[index] = e.target.value;
    this.setState({
      voteOptions: options
    });
  }

  appendInput() {
    var newInput = `input-${this.state.inputs.length}`;
    this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
  }

  render() {
    return (
      <CampaignFormContainer>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='title'
            type='text'
            handleChange={this.handleChange}
            value={this.state.title}
            label='Title'
            required
          />
          <FormInput
            name='description'
            type='text'
            handleChange={this.handleChange}
            value={this.state.description}
            label='Description'
          />
          <FormDate
            startDate={this.state.starts}
            startDateId="your_unique_start_date_id" 
            endDate={this.state.ends}
            endDateId="your_unique_end_date_id"
            onDatesChange={({ startDate, endDate }) => this.setState({ starts: startDate, ends: endDate })}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
          />
          <div>Vote Options</div>
          {this.state.inputs.map((input, idx) => (
            <FormInput
              key={input}
              name='voteOptions[]'
              type='text'
              handleChange={this.onOptionChange.bind(this, idx)}
              value={this.state.voteOptions[idx]}
              label='Vote option'
              required
            />
          ))}
          <AppendInputButton onClick={ () => this.appendInput() }>
            + Add option
          </AppendInputButton>
          <CustomButton type='submit'> Submit </CustomButton>
        </form>
      </CampaignFormContainer>
    )
  }
}

export default CampaignForm