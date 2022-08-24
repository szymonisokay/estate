import React, { useEffect, useRef, useState } from 'react'
import { IconWrapper, InputWrapper, Wrapper } from './Input.styled'
import { VscChromeClose } from 'react-icons/vsc'
import { BiCheck } from 'react-icons/bi'
import { transformNumber } from '../../../helpers/TransformNumber'

interface ComponentInterface {
  id: string
  type: string
  name: string
  value: string | number
  labelText: string
  required?: boolean
  isSuffix?: boolean
  suffixSymbol?: string
  onChange: (e: any) => void
}

const Input: React.FC<ComponentInterface> = ({
  id,
  type,
  name,
  value,
  labelText,
  required,
  isSuffix,
  suffixSymbol,
  onChange,
}) => {
  const [isTouched, setIsTouched] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const isValid = inputRef.current?.validity.valid

  const onInputChange = (e: any) => {
    onChange(e)
    setIsTouched(true)
  }

  useEffect(() => {
    if (!!value) {
      setIsTouched(true)
    }
  }, [value])

  return (
    <Wrapper isValid={isTouched ? isValid : true}>
      <label htmlFor={id}>
        {labelText}
        {required && '*'}
      </label>
      <InputWrapper isValid={isTouched ? isValid : true}>
        <input
          ref={inputRef}
          id={id}
          type={type}
          name={name}
          value={value || ''}
          required={required}
          onChange={onInputChange}
        />
        {isSuffix && <span>{suffixSymbol}</span>}
        {isTouched && required && (
          <IconWrapper>
            {isValid ? (
              <BiCheck color='#FF7A00' />
            ) : (
              <VscChromeClose color='#EC1313' size={14} />
            )}
          </IconWrapper>
        )}
      </InputWrapper>
    </Wrapper>
  )
}

export default Input
