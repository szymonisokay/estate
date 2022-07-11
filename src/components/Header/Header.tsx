import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/svgs/Estate.svg'
import { useAuth } from '../../contexts/auth/AuthContext'
import {
  HeaderWrapper,
  HeaderContent,
  LogoWrapper,
  NavWrapper,
  Navigation,
  NavLink,
  Link,
  UserWrapper,
  User,
  Button,
  IconWrapper,
  UserMenuContainer,
  UserMenuHeaderWrapper,
  UserMenuHeaderText,
  UserMenuList,
  UserMenuListItem,
  UserMenuLink,
  Divider,
} from './Header.styled'
import { BiLogOut, BiUser } from 'react-icons/bi'
import { userMenu } from './UserMenu'
import useOutsideClick from '../../hooks/useOutsideClick'
import { getFallbackPath } from '../../helpers/FallbackPath'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const userMenuRef = useRef(null)
  const userIconRef = useRef(null)

  const close = useOutsideClick(userMenuRef, userIconRef)

  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { user, signOut } = useAuth()

  const isShown = pathname.includes('login') || pathname.includes('register')

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const signOutUser = () => {
    signOut()
    setIsOpen(false)
  }

  const navigateTo = () => {
    navigate('/login')
    setIsOpen(false)
  }

  useEffect(() => {
    if (close) {
      setIsOpen(false)
    }
  }, [close])

  return (
    <>
      {!isShown && (
        <HeaderWrapper>
          <HeaderContent>
            <LogoWrapper to='/'>
              <Logo />
            </LogoWrapper>
            <NavWrapper>
              <Navigation>
                <NavLink>
                  <Link to='/'>New offers</Link>
                </NavLink>
                <NavLink>
                  <Link to='/'>All offers</Link>
                </NavLink>
              </Navigation>
            </NavWrapper>
            <UserWrapper>
              <IconWrapper
                ref={userIconRef}
                onClick={!!user ? toggleOpen : navigateTo}
              >
                <BiUser size={24} />
              </IconWrapper>
              <Button to={!!user ? '/' : '/login'}>Add offer</Button>
              {isOpen && !!user && (
                <UserMenuContainer ref={userMenuRef}>
                  <Link to='/'>
                    <UserMenuHeaderWrapper>
                      <User src={user?.image || getFallbackPath()} />
                      <UserMenuHeaderText>{user?.username}</UserMenuHeaderText>
                    </UserMenuHeaderWrapper>
                  </Link>
                  <UserMenuList>
                    {userMenu.map((item) => (
                      <UserMenuLink key={item.id} to={item.action}>
                        <UserMenuListItem>
                          <item.icon />
                          {item.value}
                        </UserMenuListItem>
                      </UserMenuLink>
                    ))}
                    <Divider />
                    <UserMenuLink to='/login'>
                      <UserMenuListItem onClick={signOutUser}>
                        <BiLogOut />
                        Log out
                      </UserMenuListItem>
                    </UserMenuLink>
                  </UserMenuList>
                </UserMenuContainer>
              )}
            </UserWrapper>
          </HeaderContent>
        </HeaderWrapper>
      )}
    </>
  )
}

export default Header
