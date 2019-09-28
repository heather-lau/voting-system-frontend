import styled, { css } from 'styled-components'

const buttonStyles = css`
  background-color: #0033E8;
  border: 1px solid #0033E8;
  color: white;

  &:hover {
    background-color: white;
    color: #0033E8;
  }
`;

const invertedButtonStyles = css`
  border: 1px solid #0033E8;
  color: #0033E8;
  
  &:hover {
    background-color: #0033E8;
    color: white;
  }
`;

const getButtonStyles = props => {
  return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  letter-spacing: 0.5px;
  padding: 20px 40px;
  font-size: 0.8rem;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 4px;

  ${getButtonStyles}
`