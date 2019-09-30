import styled from 'styled-components';

export const OptionItemContainer = styled.div`
  text-align: center;
  font-size: 1.1rem;
  padding: 40px 0;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 16px;
  width: 32%;
  font-weight: 700;

  @media only screen and (max-width: 768px) {
    width: 48%;
  }

  &:hover {
    color: rgb(0, 51, 232);
    border-color: rgb(0, 51, 232);
  }
`