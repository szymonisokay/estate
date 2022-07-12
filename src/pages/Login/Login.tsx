import { FormEvent, useState, useEffect } from 'react'
import Building from '../../assets/images/Building.png'
import { ReactComponent as Estate } from '../../assets/svgs/Estate.svg'
import {
  PageWrapper,
  ImageColumn,
  Column,
  BuildingImage,
  ColumnContent,
  LogoWrapper,
  Logo,
  Text,
  FormContainer,
  FormInputContainer,
  Input,
  FormMetaData,
  CheckboxContainer,
  Checkbox,
  Paragraph,
  LinkTag,
  Button,
  SignUp,
} from './Login.styled'
import { BiEnvelope, BiErrorCircle, BiLockAlt } from 'react-icons/bi'
import { SignInFormDataModel } from '../../models/FormData.model'
import { useAuth } from '../../contexts/auth/AuthContext'
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'

const initialSignInFormData = {
  email: '',
  password: '',
  remember: false,
}

const Login = () => {
  const [formData, setFormData] = useState<SignInFormDataModel>(
    initialSignInFormData
  )

  const { signIn, isLoading, isSuccess, isError, errorMessage } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const history = location.state as string

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    signIn(formData)
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Signed In successfully!')
      setTimeout(() => navigate(history ? history : '/'), 1000)
    }
  }, [isSuccess, navigate, history])

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage)
    }
  }, [isError, errorMessage])

  return (
    <PageWrapper>
      <ImageColumn>
        <BuildingImage src={Building} alt='' />
      </ImageColumn>
      <Column>
        <ColumnContent>
          <LogoWrapper>
            <Logo to='/'>
              <Estate className='logo' />
            </Logo>
          </LogoWrapper>
          <Text>
            Login into your <strong>Estate.</strong> account and continue your
            journey.
          </Text>
          <FormContainer onSubmit={(e) => onFormSubmit(e)}>
            <FormInputContainer isError={isError && !formData.email && true}>
              <BiEnvelope size={18} className='svg' />
              <Input
                id='email'
                type='email'
                placeholder='Your email'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {isError && !formData.email && (
                <BiErrorCircle size={20} color='#ec1313' />
              )}
            </FormInputContainer>
            <FormInputContainer isError={isError && !formData.password && true}>
              <BiLockAlt size={18} className='svg' />
              <Input
                id='password'
                type='password'
                placeholder='Password'
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {isError && !formData.password && (
                <BiErrorCircle size={20} color='#ec1313' />
              )}
            </FormInputContainer>
            <FormMetaData>
              <CheckboxContainer>
                <Checkbox
                  type='checkbox'
                  id='remember'
                  checked={formData.remember}
                  onChange={(e) =>
                    setFormData({ ...formData, remember: e.target.checked })
                  }
                />
                <Paragraph as='label' htmlFor='remember'>
                  Remember me
                </Paragraph>
              </CheckboxContainer>
              <LinkTag to='#'>Forgot password?</LinkTag>
            </FormMetaData>
            <Button>{isLoading ? 'Loading' : 'Sign In'}</Button>
          </FormContainer>
          <SignUp>
            <Paragraph>Don't have an account?</Paragraph>
            <LinkTag black='true' to='/register'>
              Sign Up
            </LinkTag>
          </SignUp>
        </ColumnContent>
      </Column>
    </PageWrapper>
  )
}

export default Login
