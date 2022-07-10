import React, { useState } from 'react'
import { BiChevronDown, BiSearch, BiSliderAlt } from 'react-icons/bi'
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
}

const OPTIONS = [
  { id: 'purchase', value: 'Purchase' },
  { id: 'rent', value: 'Rent' },
]

const Search: React.FC<ComponentType> = ({ isHome }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState<string>(OPTIONS[0].value)
  const [location, setLocation] = useState<string>('')

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const selectValue = (value: string) => {
    setValue(value)
    setIsOpen(false)
  }

  return (
    <SearchInputWrapper>
      <Select>
        <SelectHeaderWrapper onClick={toggleOpen}>
          <SelectHeader>{value}</SelectHeader>
          <BiChevronDown size={18} />
        </SelectHeaderWrapper>
        {isOpen && (
          <OptionsContainer>
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
        onChange={(e) => setLocation(e.target.value)}
      />
      <IconWrapper>
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
