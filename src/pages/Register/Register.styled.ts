import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  overflow: hidden;
`

export const Column = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`

export const ImageColumn = styled(Column)`
  @media (max-width: 768px) {
    display: none;
  }
`

export const BuildingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ColumnContent = styled.div`
  max-width: 70%;

  @media (min-width: 1750px) {
    max-width: 30%;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
`

export const Logo = styled(Link)`
  text-decoration: none;
`

export const Text = styled.p`
  font-size: 18px;
  color: var(--black);
`

export const FormContainer = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const FormInputContainer = styled.div<{ isError?: boolean }>`
  width: 100%;
  padding: 16px 25px;
  box-shadow: 0px 5px 40px 0px #0b0b0b26;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 15px;
  border: 1px solid
    ${(props) => (props.isError ? `var(--error)` : `transparent`)};
`

export const Input = styled.input`
  flex: 2;
  border: none;
  outline: none;
  font-size: 16px;
  color: var(--black);

  ::placeholder {
    color: var(--gray);
  }
`

export const FormMetaData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const Checkbox = styled.input``

export const Paragraph = styled.p`
  color: var(--gray);
`

export const LinkTag = styled(Link)`
  color: var(--black);
  text-decoration: none;
  transition: 200ms;

  &:hover {
    color: var(--black);
  }
`

export const Button = styled.button`
  width: 100%;
  background: var(--black);
  padding: 12px 22px;
  color: #fff;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 5px 40px 0px #0b0b0b4d;
`

export const SignUp = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
