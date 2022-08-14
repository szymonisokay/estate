import styled from 'styled-components'
import { NavLink as RouterNavLink, Link as RouterLink } from 'react-router-dom'

export const HeaderWrapper = styled.div<{ isTransformed?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  background: ${(props) => (props.isTransformed ? '#0B0B0B80' : 'transparent')};
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

export const Navigation = styled.ul<{ isTransformed?: boolean }>`
  list-style: none;
  display: flex;
  justify-content: center;

  ${'a'} {
    color: ${(props) => props.isTransformed && '#fff'};
  }
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
  position: relative;
`

export const User = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  cursor: pointer;
`

export const Button = styled(RouterLink)`
  border: none;
  outline: none;
  padding: 10px 30px;
  border-radius: 25px;
  color: #fff;
  background: var(--accent);
  cursor: pointer;
  text-decoration: none;
`

export const IconWrapper = styled.div<{
  isAuth?: boolean
  isTransformed?: boolean
}>`
  display: flex;
  cursor: pointer;
  position: relative;

  ${'svg'} {
    color: ${(props) => (props.isTransformed ? '#fff' : 'var(--black)')};
  }

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background: ${(props) => (props.isAuth ? 'var(--accent)' : 'transparent')};
    position: absolute;
    bottom: -8px;
    right: 50%;
    transform: translateX(50%);
  }
`

export const UserMenuContainer = styled.div`
  position: absolute;
  top: calc(100% + 20px);
  right: 0;
  min-width: 100%;
  background: #fff;
  box-shadow: 0px 5px 40px 0px #0b0b0b26;
  border-radius: 10px;
  padding: 10px 0;
`

export const UserMenuHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 20px 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid #f1f1f1;
`

export const UserMenuHeaderText = styled.span`
  color: var(--black);
`

export const UserMenuList = styled.ul`
  list-style: none;
`

export const UserMenuListItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  transition: 200ms;
  color: var(--black);
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background: #f1f1f1;
  }
`

export const UserMenuLink = styled(Link)`
  &:hover {
    color: var(--black);
  }
`

export const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #f1f1f1;
  margin: 10px 0;
`
