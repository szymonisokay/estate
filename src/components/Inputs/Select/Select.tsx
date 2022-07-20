import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import {
  Select as SelectInput,
  SelectHeaderWrapper,
  SelectHeader,
  OptionsContainer,
  OptionsList,
  Option,
} from './Select.styled'

type ComponentType = {
  value: any
  values: any[]
  onValueChange: (value: any) => void
}

const Select: React.FC<ComponentType> = ({ value, values, onValueChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const changeValue = (value: any) => {
    setIsOpen(false)
    onValueChange(value)
  }

  return (
    <SelectInput>
      <SelectHeaderWrapper onClick={toggleOpen}>
        <SelectHeader>{!value.value ? value : value.name}</SelectHeader>
        <BiChevronDown />
      </SelectHeaderWrapper>
      {isOpen && (
        <OptionsContainer>
          <OptionsList>
            {values?.map((value) => (
              <Option
                key={!value.value ? value : value.value}
                onClick={() => changeValue(value)}
              >
                {!value.value ? value : value.name}
              </Option>
            ))}
          </OptionsList>
        </OptionsContainer>
      )}
    </SelectInput>
  )
}

export default Select
