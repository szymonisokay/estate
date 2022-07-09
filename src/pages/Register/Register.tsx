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

const initialSignUpFormData = {
  name: '',
  email: '',
  password: '',
  password2: '',
}

const Register = () => {
  const [formData, setFormData] = useState<SignUpFormDataModel>(
    initialSignUpFormData
  )
  const [error, setError] = useState<{ value: boolean; msg: string }>({
    value: false,
    msg: '',
  })

  const { signUp } = useAuth()

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.password2
    ) {
      setError({ value: true, msg: 'Please fill up required fields' })
      return
    }

    if (formData.password !== formData.password2) {
      setError({ value: true, msg: 'Passwords do not match' })
      return
    }

    signUp(formData)

    // setFormData(initialSignUpFormData)
  }

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (error.value) {
      toast.error(error.msg)
      timeout = setTimeout(() => setError({ value: false, msg: '' }), 3000)
    }

    return () => clearTimeout(timeout)
  }, [error])

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
            Create an <strong>Estate.</strong> account and start your journey.
          </Text>
          <FormContainer onSubmit={(e) => onFormSubmit(e)}>
            <FormInputContainer isError={error.value && !formData.name && true}>
              <BiUser size={18} className='svg' />
              <Input
                id='name'
                type='text'
                placeholder='Your name '
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {error.value && !formData.name && (
                <BiErrorCircle size={20} color='#ec1313' />
              )}
            </FormInputContainer>
            <FormInputContainer
              isError={error.value && !formData.email && true}
            >
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
              {error.value && !formData.email && (
                <BiErrorCircle size={20} color='#ec1313' />
              )}
            </FormInputContainer>
            <FormInputContainer
              isError={error.value && !formData.password && true}
            >
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
              {error.value && !formData.password && (
                <BiErrorCircle size={20} color='#ec1313' />
              )}
            </FormInputContainer>
            <FormInputContainer
              isError={error.value && !formData.password2 && true}
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
              {error.value && !formData.password2 && (
                <BiErrorCircle size={20} color='#ec1313' />
              )}
            </FormInputContainer>
            <Button>Sign Up</Button>
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
