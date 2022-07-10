import styled from 'styled-components'
import { NavLink as RouterNavLink, Link as RouterLink } from 'react-router-dom'

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1400px;
  max-height: 100px;
  margin: 0 auto;
  padding: 20px 50px;
  display: flex;
  align-items: center;
`

export const LogoWrapper = styled(RouterLink)`
  display: inline-block;
  max-width: 120px;

  ${'svg'} {
    width: 100%;
  }
`

export const NavWrapper = styled.div`
  flex: 2;
`

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`

export const NavLink = styled.li`
  padding: 0 10px;
`

export const Link = styled(RouterNavLink)`
  color: var(--black);
  text-decoration: none;
  transition: 200ms;

  &:hover {
    color: var(--accent);
  }
`

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const User = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
  cursor: pointer;
`

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px 30px;
  border-radius: 25px;
  color: #fff;
  background: var(--accent);
  cursor: pointer;
`
