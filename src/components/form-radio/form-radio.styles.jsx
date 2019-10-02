import styled from 'styled-components'

export const Radio = styled.input.attrs({ type: 'radio' })`
  /* display:none; */
  
  &:checked {
    background-color: #241009
  }
`

export const Label = styled.label`
  margin: 16px;
`

export const RadioContainer = styled.div`
  text-align: center;
  font-size: 1.1rem;
  padding: 40px 0;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 16px;
  width: 32%;
  font-weight: 700;
  background-color: #fff;
  border-color: ${props => props.checked ? 'rgb(0, 51, 232)' : '#eee'};
  color: ${props => props.checked ? 'rgb(0, 51, 232)' : '#333'};

  @media only screen and (max-width: 768px) {
    width: 48%;
  }
  ${({ disabled }) => !disabled && `
    &:hover {
      border-color: rgb(0, 51, 232);
      color: rgb(0, 51, 232);
    }
  `}
`