import styled from 'styled-components'

export const SelectBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Label = styled.span`
  color: #7d7d7d;
`

export const Select = styled.div`
  border: none;
  outline: none;
  font-size: 16px;
  position: relative;
  height: 40px;
`

export const SelectHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  height: 100%;
  border: 1px solid #ded4ca;
  border-radius: 4px;
  padding: 10px 15px;
`

export const SelectHeader = styled.div`
  font-size: 14px;
  color: var(--black);
`

export const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  z-index: 10;
  border: 1px solid #ded4ca;
`

export const OptionsList = styled.ul`
  list-style: none;
`

export const Option = styled.li`
  padding: 12px 15px;
  transition: 200ms;
  cursor: pointer;
  border-bottom: 1px solid #ded4ca;
  color: var(--black);
  font-size: 14px;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background: #f1f1f1;
  }
`
