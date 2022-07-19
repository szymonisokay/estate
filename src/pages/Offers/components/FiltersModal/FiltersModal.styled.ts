import styled from 'styled-components'

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 40%);
  z-index: 9999;
`

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-width: 900px;
  height: 70%;
  background: #fff;
  z-index: 10000;
  padding: 50px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
`

export const ModalHeader = styled.div`
  flex: 1;
`

export const ModalHeading = styled.p`
  color: var(--black);
  font-size: 22px;
`

export const IconWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  cursor: pointer;

  ${'svg'} {
    color: var(--black);
  }
`

export const ModalContent = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const InputGroup = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`

export const ModalFooter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const Button = styled.button`
  border: none;
  outline: none;
  background: var(--black);
  color: #fff;
  padding: 12px 30px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
`

export const Text = styled.p`
  color: var(--gray);
  cursor: pointer;
  transition: 200ms;

  &:hover {
    text-decoration: underline;
  }
`
