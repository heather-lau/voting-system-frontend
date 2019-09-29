import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import DateInput from '../date-input/date-input.component'

class NewCampaignForm extends React.Component {
  constructor() {
    super()

    this.state = {
      title: '',
      description: '',
      starts: null,
      ends: null,
      voteOptions: [],
      focusedInput: null
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ 
      title: '',
      description: '',
      starts: null,
      ends: null,
    })
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
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
            required
          />
          <DateInput
            startDate={this.state.starts}
            startDateId="your_unique_start_date_id" 
            endDate={this.state.ends}
            endDateId="your_unique_end_date_id"
            onDatesChange={({ startDate, endDate }) => this.setState({ starts: startDate, ends: endDate })}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
          />
          <CustomButton type='submit'> Create </CustomButton>
        </form>
      </div>
    )
  }
}

export default NewCampaignForm