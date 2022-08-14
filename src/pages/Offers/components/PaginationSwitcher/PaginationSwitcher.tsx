import { BiMenu, BiGridAlt } from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux'
import Select from '../../../../components/Inputs/Select/Select'
import {
  changeLayout,
  changePaginationLimit,
  changeSort,
  settingsSelector,
} from '../../../../features/settings/settingsSlice'
import { Wrapper, Layout } from './PaginationSwitcher.styled'

const paginationOptions = [12, 16, 20, 24]
const sortOptions = [
  { name: 'Date: Newest', value: 'newest' },
  { name: 'Price: Low-High', value: 'price_asc' },
  { name: 'Price: High-Low', value: 'price_desc' },
]

const PaginationSwitcher = () => {
  const { pagination, sort, layout } = useSelector(settingsSelector)

  const dispatch = useDispatch()

  const onOptionChange = (option: number) => {
    dispatch(changePaginationLimit(option))
  }

  const onSortChange = (sort: { name: string; value: string }) => {
    dispatch(changeSort(sort))
  }

  const onLayoutChange = () => {
    dispatch(changeLayout())
  }

  return (
    <>
      <Wrapper>
        <Select
          value={pagination.limit}
          values={paginationOptions}
          onValueChange={onOptionChange}
        />
        <Layout onClick={onLayoutChange}>
          {layout === 'grid' ? <BiMenu size={20} /> : <BiGridAlt size={20} />}
        </Layout>
      </Wrapper>
      <Select value={sort} values={sortOptions} onValueChange={onSortChange} />
    </>
  )
}

export default PaginationSwitcher
