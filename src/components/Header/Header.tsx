import { useNavigate, useLocation } from 'react-router-dom'
import person from '../../assets/images/person.jpg'
import { ReactComponent as Logo } from '../../assets/svgs/Estate.svg'
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
} from './Header.styled'

const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isShown = pathname.includes('login') || pathname.includes('register')

  const navigateTo = () => {
    navigate('/login')
  }

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
              <User src={person} />
              <Button onClick={navigateTo}>Add offer</Button>
            </UserWrapper>
          </HeaderContent>
        </HeaderWrapper>
      )}
    </>
  )
}

export default Header
