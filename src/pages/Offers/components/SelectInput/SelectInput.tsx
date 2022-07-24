import React, { useEffect, useState } from 'react'
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
import { transformNumber } from '../../../../helpers/TransformNumber'
import { settingsSelector } from '../../../../features/settings/settingsSlice'
import { useSelector } from 'react-redux'

type ComponentType = {
  name: string
  values?: string[]
  placeholder: string
  currentlyOpen: string
  setCurrentlyOpen: (name: string) => void
  onSelectValue: (name: string, value: string | number) => void
}

const SelectInput: React.FC<ComponentType> = ({
  name,
  values,
  placeholder,
  currentlyOpen,
  setCurrentlyOpen,
  onSelectValue,
}) => {
  const { filters } = useSelector(settingsSelector)

  const filterValue = filters.find((filter) => filter.slug === name)?.value

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
    setCurrentlyOpen(name)
  }

  const selectValue = (value: string) => {
    setIsOpen(false)
    onSelectValue(name, value)
  }

  useEffect(() => {
    if (name !== currentlyOpen) {
      setIsOpen(false)
    }
  }, [name, currentlyOpen])

  return (
    <SelectWrapper isOpen={!!isOpen}>
      <SelectHeader onClick={toggleOpen}>
        <SelectText isPlaceholder={!filterValue}>
          {filterValue ? filterValue : placeholder}
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
                key={value}
                onClick={() => selectValue(value)}
              >
                {typeof value === 'number' ? transformNumber(value) : value}
              </SelectMenuListItem>
            ))}
          </SelectMenuList>
        </SelectMenuWrapper>
      )}
    </SelectWrapper>
  )
}

export default SelectInput
