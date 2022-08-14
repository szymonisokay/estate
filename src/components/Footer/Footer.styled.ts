import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const FooterWrapper = styled.footer`
  padding: 50px;
  background: var(--black);
  color: #fff;

  ${'svg'} {
    width: 150px;
    margin-right: 100px;
  }
`

export const FooterContent = styled.div`
  display: flex;
  margin-bottom: 50px;
`

export const Column = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;

  ${'h3'} {
    margin-bottom: 10px;
  }
`

export const Link = styled(RouterLink)`
  color: #fff;
  text-decoration: none;
  font-weight: 300;
  margin-bottom: 5px;
`

export const FooterMeta = styled.div`
  display: flex;
  justify-content: space-between;
`
