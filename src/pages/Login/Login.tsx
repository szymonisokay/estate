import { FormEvent } from 'react'
import Building from '../../assets/images/Building.png'
import { ReactComponent as Estate } from '../../assets/svgs/Estate.svg'
import {
  PageWrapper,
  ImageColumn,
  Column,
  BuildingImage,
  ColumnContent,
  Logo,
  Text,
  FormContainer,
  FormInputContainer,
  Input,
  FormMetaData,
  CheckboxContainer,
  Checkbox,
  Paragraph,
  Link,
  Button,
  SignUp,
} from './Login.styled'
import { BiEnvelope, BiLockAlt } from 'react-icons/bi'

const Login = () => {
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <PageWrapper>
      <ImageColumn>
        <BuildingImage src={Building} alt='' />
      </ImageColumn>
      <Column>
        <ColumnContent>
          <Logo>
            <Estate className='logo' />
          </Logo>
          <Text>
            Login into your <strong>Estate.</strong> account and continue your
            journey.
          </Text>
          <FormContainer onSubmit={(e) => onFormSubmit(e)}>
            <FormInputContainer>
              <BiEnvelope size={18} className='svg' />
              <Input type='email' placeholder='Your email ' />
            </FormInputContainer>
            <FormInputContainer>
              <BiLockAlt size={18} className='svg' />
              <Input type='password' placeholder='Password' />
            </FormInputContainer>
            <FormMetaData>
              <CheckboxContainer>
                <Checkbox type='checkbox' id='remember' />
                <Paragraph as='label' htmlFor='remember'>
                  Remember me
                </Paragraph>
              </CheckboxContainer>
              <Link as='a' href='#'>
                Forgot password?
              </Link>
            </FormMetaData>
            <Button>Sign In</Button>
          </FormContainer>
          <SignUp>
            <Paragraph>Don't have an account?</Paragraph>
            <Link black as='a' href='/register'>
              Sign Up
            </Link>
          </SignUp>
        </ColumnContent>
      </Column>
    </PageWrapper>
  )
}

export default Login
