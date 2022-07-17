import styled from 'styled-components'

export const SelectWrapper = styled.div<{ isOpen?: boolean }>`
  /* border: 1px solid #c7c7c7; */
  position: relative;
  width: 100%;
  border-radius: ${(props) => (props.isOpen ? '6px 6px 0 0 ' : '6px')};
  box-shadow: 0px 0px 20px 0px #0b0b0b15;

  transition: 100ms;
`

export const SelectHeader = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 15px 20px;
`

export const SelectText = styled.p<{ isPlaceholder?: boolean }>`
  color: ${(props) => (props.isPlaceholder ? `var(--gray)` : `var(--black)`)};
`

export const SelectMenuWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0px 10px 10px 0px #0b0b0b10;
  transition: 100ms;
  border-radius: 0 0 6px 6px;
  z-index: 10;

  &::-webkit-scrollbar {
    width: 10px;
    background: #f1f1f1;
    border-radius: 10px;
    padding-right: 2px;
  }

  &::-webkit-scrollbar-thumb {
    width: 10px;
    background: #959595;
    border-radius: 10px;
    padding-right: 2px;
  }
`

export const SelectMenuList = styled.ul`
  list-style: none;
`

export const SelectMenuListItem = styled.li`
  background: #fff;
  padding: 15px 20px;
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background: #f1f1f1;
  }

  &:last-of-type {
    border: none;
  }
`

export const IconWrapper = styled.div`
  display: flex;
`
