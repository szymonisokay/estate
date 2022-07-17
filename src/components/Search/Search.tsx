import React, { useEffect, useRef, useState } from 'react'
import { BiChevronDown, BiSearch, BiSliderAlt } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { addFilter } from '../../features/filters/filtersSlice'
import useOutsideClick from '../../hooks/useOutsideClick'
import {
  SearchInputWrapper,
  Select,
  SelectHeaderWrapper,
  SelectHeader,
  OptionsContainer,
  OptionsList,
  Option,
  Input,
  IconWrapper,
} from './Search.styled'

type ComponentType = {
  isHome?: boolean
  width?: number
  onIconClick?: () => any
}

const OPTIONS = [
  { id: 'purchase', value: 'Purchase' },
  { id: 'rent', value: 'Rent' },
]

const Search: React.FC<ComponentType> = ({ isHome, width, onIconClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState<string>(OPTIONS[0].value)
  const [location, setLocation] = useState<string>('')

  const dispatch = useDispatch()

  const menuWrapperRef = useRef(null)
  const selectWrapperRef = useRef(null)

  const close = useOutsideClick(menuWrapperRef, selectWrapperRef)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const selectValue = (value: string) => {
    setValue(value)
    setIsOpen(false)
    dispatch(addFilter({ name: 'type', value }))
  }

  const onLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
    dispatch(addFilter({ name: 'location', value: event.target.value }))
  }

  useEffect(() => {
    if (!!close) {
      setIsOpen(false)
    }
  }, [close])

  return (
    <SearchInputWrapper isHome={isHome} width={width}>
      <Select>
        <SelectHeaderWrapper ref={selectWrapperRef} onClick={toggleOpen}>
          <SelectHeader>{value}</SelectHeader>
          <BiChevronDown size={18} />
        </SelectHeaderWrapper>
        {isOpen && (
          <OptionsContainer ref={menuWrapperRef}>
            <OptionsList>
              {OPTIONS.map((option) => (
                <Option
                  key={option.id}
                  onClick={() => selectValue(option.value)}
                >
                  {option.value}
                </Option>
              ))}
            </OptionsList>
          </OptionsContainer>
        )}
      </Select>
      <Input
        id='location'
        placeholder='Search by location'
        value={location}
        onChange={(e) => onLocationChange(e)}
      />
      <IconWrapper onClick={onIconClick}>
        {isHome ? (
          <BiSearch size={22} color='var(--accent)' />
        ) : (
          <BiSliderAlt size={22} color='var(--accent)' />
        )}
      </IconWrapper>
    </SearchInputWrapper>
  )
}

export default Search

// 8109
