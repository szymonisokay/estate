import styled from 'styled-components'

export const Chip = styled.div`
  background: #ff7a0033;
  width: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 25px;
`

export const ChipName = styled.span`
  font-weight: bold;
  color: var(--black);
`

export const ChipValue = styled.span`
  color: var(--black);
  font-size: 0.9rem;
`

export const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;

  ${'svg'} {
    color: var(--black);
  }
`
