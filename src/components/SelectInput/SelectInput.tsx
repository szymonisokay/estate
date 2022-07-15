import React, { useState } from 'react'
import {
  SelectWrapper,
  SelectHeader,
  SelectText,
  SelectMenuWrapper,
  SelectMenuList,
  SelectMenuListItem,
  IconWrapper,
} from './SelectInput.styled'
import { BiChevronDown } from 'react-icons/bi'
import { transformNumber } from '../../helpers/TransformNumber'

type ComponentType = {
  name: string
  values?: Value[]
  placeholder: string
  onValueChange: (name: string, value: Value) => void
}

export type Value = {
  value: string | number
}

const SelectInput: React.FC<ComponentType> = ({
  name,
  values,
  placeholder,
  onValueChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState<null | Value>(null)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const selectValue = (value: Value) => {
    setIsOpen(false)
    setValue(value)
    onValueChange(name, value)
  }

  return (
    <SelectWrapper>
      <SelectHeader onClick={toggleOpen}>
        <SelectText isPlaceholder={!value}>
          {value
            ? typeof value.value === 'number'
              ? transformNumber(value.value)
              : value.value
            : placeholder}
        </SelectText>
        <IconWrapper>
          <BiChevronDown size={26} />
        </IconWrapper>
      </SelectHeader>
      {isOpen && (
        <SelectMenuWrapper>
          <SelectMenuList>
            {values?.map((value) => (
              <SelectMenuListItem
                key={value.value}
                onClick={() => selectValue(value)}
              >
                {typeof value.value === 'number'
                  ? transformNumber(value.value)
                  : value.value}
              </SelectMenuListItem>
            ))}
          </SelectMenuList>
        </SelectMenuWrapper>
      )}
    </SelectWrapper>
  )
}

export default SelectInput
