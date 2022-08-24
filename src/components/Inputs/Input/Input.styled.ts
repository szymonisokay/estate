import styled from 'styled-components'

export const Wrapper = styled.div<{ isValid?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 5px;

  ${'label'} {
    color: ${(props) => (props.isValid ? '#7d7d7d' : '#EC1313')};
  }
`

export const InputWrapper = styled.div<{ isValid?: boolean }>`
  display: flex;
  border: 1px solid ${(props) => (props.isValid ? '#ded4ca' : '#EC1313')};
  padding: 10px 15px;
  border-radius: 4px;
  height: 40px;

  ${'input'} {
    border: none;
    outline: none;
    flex: 11;
    padding-right: 10px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  ${'span'} {
    font-size: 14px;
    color: #7d7d7d;
  }
`

export const IconWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 10px;
`
