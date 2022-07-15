import styled from 'styled-components'

export const SelectWrapper = styled.div`
  border: 1px solid #c7c7c7;
  position: relative;
  width: 100%;
`

export const SelectHeader = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

export const SelectText = styled.p<{ isPlaceholder?: boolean }>`
  color: ${(props) => (props.isPlaceholder ? `var(--gray)` : `var(--black)`)};
  padding: 20px;
`

export const SelectMenuWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #c7c7c7;

  &::-webkit-scrollbar {
    width: 10px;
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    width: 10px;
    background: var(--gray);
  }
`

export const SelectMenuList = styled.ul`
  list-style: none;
`

export const SelectMenuListItem = styled.li`
  background: #fff;
  padding: 20px;
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
  padding: 20px;
  border-left: 1px solid #c7c7c7;
`
