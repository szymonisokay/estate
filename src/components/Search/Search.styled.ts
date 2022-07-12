import styled from 'styled-components'

export const SearchInputWrapper = styled.div<{
  isHome?: boolean
  width?: number
}>`
  max-width: ${(props) => (props.isHome ? '90%' : `${props.width}%`)};
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0px 5px 40px 0px #0b0b0b26;
  padding: 18px 35px;
  border-radius: 60px;

  @media (min-width: 1200px) {
    width: 70%;
  }
`

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
  background: #fff;
  padding: 10px 0;
  box-shadow: 0px 5px 40px 0px #0b0b0b26;
  border-radius: 10px;
`

export const OptionsList = styled.ul`
  list-style: none;
`

export const Option = styled.li`
  padding: 10px 20px;
  transition: 200ms;
  cursor: pointer;

  &:hover {
    background: #f1f1f1;
  }
`

export const Input = styled.input`
  flex: 2;
  border: none;
  outline: none;
  font-size: 16px;
  color: var(--black);

  ::placeholder {
    color: var(--gray);
  }
`

export const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
`
