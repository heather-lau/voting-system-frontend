import React from 'react'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'

import 'react-dates/lib/css/_datepicker.css'

import { DateInputContainer } from './form-date.styles'

const FormDate = ({...props}) => (
  <DateInputContainer>
    <p>Date Range</p>
    <DateRangePicker {...props}/>
  </DateInputContainer>
)

export default FormDate