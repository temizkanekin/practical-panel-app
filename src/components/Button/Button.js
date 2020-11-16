import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => props.isToggleActive ? "lightblue" : "white"};
  color: black;
  width: ${props => props.width || "70px"};
  height: ${props => props.height || "50px"};
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    opacity: .2;
    pointer-events: none;
  }
`