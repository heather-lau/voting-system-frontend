import styled from 'styled-components'

export const VoteResultListContainer = styled.div`
  background-color: #F8F9FE;
  padding: 30px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`

export const VoteResultItemContainer = styled.div`
  width: 48%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`