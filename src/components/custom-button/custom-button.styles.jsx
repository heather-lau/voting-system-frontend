import styled, { css } from 'styled-components'

const buttonStyles = css`
  background-color: rgb(0, 51, 232);
  border: 1px solid rgb(0, 51, 232);
  color: white;

  &:hover {
    background-color: white;
    color: rgb(0, 51, 232);
  }
`;

const invertedButtonStyles = css`
  border: 1px solid rgb(0, 51, 232);
  color: rgb(0, 51, 232);
  
  &:hover {
    background-color: rgb(0, 51, 232);
    color: white;
  }
`;

const getButtonStyles = props => {
  return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 0.8rem;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`