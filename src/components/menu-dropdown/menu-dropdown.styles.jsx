import styled from 'styled-components'

export const DropdownMenuContainer = styled.div`
  position: absolute;
  width: 240px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0,0,0,0.2);
`

export const MenuItem = styled.div`
  padding: 10px 0;
  color: #91919A;

  &:hover {
    color:#333;
  }

  cursor: pointer
`