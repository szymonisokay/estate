import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div<{ step?: number }>`
  display: flex;
  justify-content: ${(props) =>
    props.step === 1 ? 'flex-end' : 'space-between'};
  align-items: center;
`

export const Button = styled.button<{ isBack?: boolean }>`
  text-decoration: none;
  background: ${(props) => (props.isBack ? 'var(--black)' : 'var(--accent)')};
  padding: 10px 30px;
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`
