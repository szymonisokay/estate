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
import { useDispatch } from 'react-redux'
import { addFilter, filtersSelector } from '../../features/filters/filtersSlice'
import { useSelector } from 'react-redux'
import { Filters } from '../../features/filters/filters.model'

type ComponentType = {
  name: string
  values?: string[]
  placeholder: string
}

const SelectInput: React.FC<ComponentType> = ({
  name,
  values,
  placeholder,
}) => {
  const { filters } = useSelector(filtersSelector)
  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState<any>(filters[name as keyof Filters])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const selectValue = (value: string) => {
    setIsOpen(false)
    setValue(value)
    dispatch(addFilter({ name, value }))
  }

  return (
    <SelectWrapper isOpen={!!isOpen}>
      <SelectHeader onClick={toggleOpen}>
        <SelectText isPlaceholder={!value}>
          {value ? filters[name as keyof Filters] : placeholder}
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
