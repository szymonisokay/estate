import { FormEvent, useEffect, useState } from 'react'
import Building from '../../assets/images/Building.png'
import { ReactComponent as Estate } from '../../assets/svgs/Estate.svg'
import { BiEnvelope, BiLockAlt, BiUser, BiErrorCircle } from 'react-icons/bi'
import {
  PageWrapper,
  ImageColumn,
  BuildingImage,
  Column,
  ColumnContent,
  LogoWrapper,
  Logo,
  Text,
  FormContainer,
  FormInputContainer,
  Input,
  Paragraph,
  LinkTag,
  Button,
  SignUp,
} from './Register.styled'
import { SignUpFormDataModel } from '../../models/FormData.model'
import { toast } from 'react-toastify'
import { useAuth } from '../../contexts/auth/AuthContext'
import { useNavigate } from 'react-router-dom'

const initialSignUpFormData = {
  username: '',
  email: '',
  password: '',
  password2: '',
}

const Register = () => {
  const [formData, setFormData] = useState<SignUpFormDataModel>(
    initialSignUpFormData
  )

  const { signUp, isSuccess, isLoading, isError, errorMessage } = useAuth()
  const navigate = useNavigate()

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    signUp(formData)
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Signed Up successfully!')
      setTimeout(() => navigate('/'), 1000)
    }
  }, [isSuccess, navigate])

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
            Create an <strong>Estate.</strong> account and start your journey.
          </Text>
          <FormContainer onSubmit={(e) => onFormSubmit(e)}>
            <FormInputContainer isError={isError && !formData.username && true}>
              <BiUser size={18} className='svg' />
              <Input
                id='name'
                type='text'
                placeholder='Your name '
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
              {isError && !formData.username && (
                <BiErrorCircle size={20} color='#ec1313' />
              )}
            </FormInputContainer>
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
            <FormInputContainer
              isError={isError && !formData.password2 && true}
            >
              <BiLockAlt size={18} className='svg' />
              <Input
                id='password2'
                type='password'
                placeholder='Confirm password'
                value={formData.password2}
                onChange={(e) =>
                  setFormData({ ...formData, password2: e.target.value })
                }
              />
              {isError && !formData.password2 && (
                <BiErrorCircle size={20} color='#ec1313' />
              )}
            </FormInputContainer>
            <Button>{isLoading ? 'Loading' : 'Sign Up'}</Button>
          </FormContainer>
          <SignUp>
            <Paragraph>Already have an account?</Paragraph>
            <LinkTag to='/login'>Sign In</LinkTag>
          </SignUp>
        </ColumnContent>
      </Column>
    </PageWrapper>
  )
}

export default Register
