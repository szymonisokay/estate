import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/svgs/Estate.svg'
import { ReactComponent as LogoWhite } from '../../assets/svgs/Estate-white.svg'
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
  const { user, signOut, checkTokenExpiration } = useAuth()

  const isShown = pathname.includes('login') || pathname.includes('register')
  const isTransformed = pathname.includes('offers/')

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const signOutUser = () => {
    signOut()
    setIsOpen(false)
  }

  const navigateTo = () => {
    navigate('/login', { state: pathname })
    setIsOpen(false)
  }

  useEffect(() => {
    if (close) {
      setIsOpen(false)
    }
  }, [close])

  useEffect(() => {
    const isExpired = checkTokenExpiration()

    if (!!isExpired) return signOut()
  }, [user, checkTokenExpiration, signOut])

  return (
    <>
      {!isShown && (
        <HeaderWrapper isTransformed={isTransformed}>
          <HeaderContent>
            <LogoWrapper to='/'>
              {isTransformed ? <LogoWhite /> : <Logo />}
            </LogoWrapper>
            <NavWrapper>
              <Navigation isTransformed={isTransformed}>
                <NavLink>
                  <Link to='/offers'>New offers</Link>
                </NavLink>
                <NavLink>
                  <Link to='/offers'>All offers</Link>
                </NavLink>
              </Navigation>
            </NavWrapper>
            <UserWrapper>
              <IconWrapper
                ref={userIconRef}
                onClick={!!user ? toggleOpen : navigateTo}
                isAuth={!!user ? true : false}
                isTransformed={isTransformed}
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
                    <UserMenuLink to='/login' state={pathname}>
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
