import styled from 'styled-components'

export const Select = styled.div`
  border: none;
  outline: none;
  font-size: 16px;
  position: relative;
`

export const SelectHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`

export const SelectHeader = styled.div`
  font-size: 16px;
`

export const OptionsContainer = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: -10px;
  background: #fff;
  padding: 10px 0;
  box-shadow: 0px 5px 40px 0px #0b0b0b26;
  border-radius: 10px;
  z-index: 10;
`

export const OptionsList = styled.ul`
  list-style: none;
`

export const Option = styled.li`
  padding: 10px 15px;
  transition: 200ms;
  cursor: pointer;

  &:hover {
    background: #f1f1f1;
  }
`
