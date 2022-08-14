import {
  FooterWrapper,
  FooterContent,
  Column,
  FooterMeta,
  Link,
} from './Footer.styled'
import { ReactComponent as Logo } from '../../assets/svgs/Estate-white.svg'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Link to='/'>
          <Logo />
        </Link>
        <Column>
          <h3>Useful links</h3>
          <Link to='/offers'>New offers</Link>
          <Link to='/offers'>All offers</Link>
        </Column>
        <Column>
          <h3>Account</h3>
          <Link to='/'>Edit account</Link>
          <Link to='/'>Your offers</Link>
        </Column>
      </FooterContent>
      <FooterMeta>
        <span>Copyright 2022 Estate.</span>
        <span>Created by S. Walach</span>
      </FooterMeta>
    </FooterWrapper>
  )
}

export default Footer
