import React from 'react'

import { Radio, Label, RadioContainer } from './form-radio.styles'


const RadioInput = ({ handleChange, label, checked, ...props }) => {
  return(
  <RadioContainer checked={checked} onclick={handleChange} >
    <Radio type="radio" onChange={handleChange} {...props} checked={checked} />
    <Label>{label}</Label>
  </RadioContainer>
)}

export default RadioInput
