import { Input, Select } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { BiChevronDown, BiSearch, BiSliderAlt } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  addFilter,
  settingsSelector,
} from '../../features/settings/settingsSlice'
import useOutsideClick from '../../hooks/useOutsideClick'

type ComponentType = {
  isHome?: boolean
  onAction?: () => any
}

const OPTIONS = [
  { id: 'purchase', value: 'Purchase' },
  { id: 'rent', value: 'Rent' },
]

const Search: React.FC<ComponentType> = ({ isHome, onAction }) => {
  const { filters } = useSelector(settingsSelector)
  const dispatch = useDispatch()

  const stateLocation = filters.find(
    (filter) => filter.slug === 'location'
  )?.value

  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState<string>(OPTIONS[0].value)
  const [location, setLocation] = useState(stateLocation ? stateLocation : '')

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
    const value = event.target.value

    setLocation(value)
  }

  useEffect(() => {
    if (!!close) {
      setIsOpen(false)
    }
  }, [close])

  useEffect(() => {
    dispatch(addFilter({ name: 'location', value: location }))
  }, [dispatch, location])

  const onSearch = (searchValue: string) => {
    console.log(searchValue)
  }

  const onSelect = (selectValue: 'purchase' | 'rent') => {
    console.log(selectValue)
  }

  const selectBefore = (
    <Select defaultValue='purchase' onChange={onSelect}>
      <Select.Option value='purchase'>Purchase</Select.Option>
      <Select.Option value='rent'>Rent</Select.Option>
    </Select>
  )

  return (
    <Input.Search
      addonBefore={selectBefore}
      placeholder='Search based on location'
      allowClear
      onSearch={onSearch}
      size='large'
    />
  )
}

export default Search

// 8109
