import styled, { css } from 'styled-components'

export const TabBarContainer = styled.div`
  display: flex;
  outline: 1px dashed #fff;
  outline-offset: -10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 40px;
`

const tabOn = css`
  color: #333;
  border-bottom: 1px solid #333;
`;

export const Tab = styled.div`
  text-transform: uppercase;
  padding: 20px 0;
  margin-right: 40px;
  color: #91919A;

  &:hover {
    color: #333;
    margin-bottom: -1px;
    border-bottom: 1px solid #333;
  }

  ${props => props.on ? tabOn: null}
`