import { Input, Select } from 'antd'

const Search = () => {
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
