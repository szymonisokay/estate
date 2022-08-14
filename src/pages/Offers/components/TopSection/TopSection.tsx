import {
  ChipsWrapper,
  SettingsWrapper,
  Pagination,
  Text,
} from './TopSection.styled'
import Search from '../../../../components/Search/Search'
import { useState } from 'react'
import FiltersModal from '../FiltersModal/FiltersModal'
import FilterChip from '../FilterChip/FilterChip'
import { useSelector } from 'react-redux'
import {
  deleteFilter,
  settingsSelector,
} from '../../../../features/settings/settingsSlice'
import { useDispatch } from 'react-redux'
import PaginationSwitcher from '../PaginationSwitcher/PaginationSwitcher'
import { offersSelector } from '../../../../features/offers/offersSlice'

const TopSection = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { filters } = useSelector(settingsSelector)
  const { offers } = useSelector(offersSelector)

  const dispatch = useDispatch()

  const openFiltersModal = () => {
    setIsOpen(true)
  }

  const closeFiltersModal = () => {
    setIsOpen(false)
  }

  const onChipDelete = (name: string) => {
    dispatch(deleteFilter({ name }))
  }

  return (
    <>
      <SettingsWrapper>
        <Search onAction={openFiltersModal} />
        <ChipsWrapper>
          {filters?.map((filter) => (
            <FilterChip
              key={filter.slug}
              name={filter.name}
              value={filter.value}
              onDelete={onChipDelete}
            />
          ))}
        </ChipsWrapper>
        <Pagination>
          <Text>
            Showing{' '}
            <strong>
              {Array.isArray(offers.results) ? offers.results.length : '...'}
            </strong>{' '}
            of {offers.total} results
          </Text>
          <PaginationSwitcher />
        </Pagination>
      </SettingsWrapper>

      {isOpen && <FiltersModal onClose={closeFiltersModal} />}
    </>
  )
}

export default TopSection
