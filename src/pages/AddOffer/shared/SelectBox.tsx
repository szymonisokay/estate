import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import {
  Label,
  Select as SelectInput,
  SelectHeaderWrapper,
  SelectHeader,
  OptionsContainer,
  OptionsList,
  Option,
  SelectBoxWrapper,
} from './Shared.styled'

export interface SelectItem {
  value: string | number
  name: string | number
}

interface ComponentInterface {
  selectItems: SelectItem[]
  placeholder: string
  label: string
  onValueChange: (item: SelectItem) => void
}

const SelectBox: React.FC<ComponentInterface> = ({
  selectItems,
  placeholder,
  label,
  onValueChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState<SelectItem>({} as SelectItem)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const onlabelClick = () => {
    setIsOpen(true)
  }

  const changeValue = (item: SelectItem) => {
    setIsOpen(false)
    setCurrentItem(item)
    onValueChange(item)
  }

  return (
    <SelectBoxWrapper>
      <Label onClick={onlabelClick}>{label}</Label>
      <SelectInput>
        <SelectHeaderWrapper onClick={toggleOpen}>
          <SelectHeader>{currentItem.name || placeholder}</SelectHeader>
          <BiChevronDown />
        </SelectHeaderWrapper>
        {isOpen && (
          <OptionsContainer>
            <OptionsList>
              {selectItems?.map((item) => (
                <Option key={item.value} onClick={() => changeValue(item)}>
                  {item.name}
                </Option>
              ))}
            </OptionsList>
          </OptionsContainer>
        )}
      </SelectInput>
    </SelectBoxWrapper>
  )
}

export default SelectBox
