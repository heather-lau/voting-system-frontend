import React from 'react'
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { DateInputContainer } from './date-input.styles'

const DateInput = ({...props}) => (
  <DateInputContainer>
    <p>Date Range</p>
    <DateRangePicker {...props}/>
  </DateInputContainer>
)

export default DateInput