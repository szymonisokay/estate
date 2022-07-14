import { Wrapper, SearchWrapper } from './TopSection.styled'
import Search from '../../../../components/Search/Search'
import { useState } from 'react'
import FiltersModal from '../FiltersModal/FiltersModal'

const TopSection = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openFiltersModal = () => {
    setIsOpen(true)
  }

  const closeFiltersModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Wrapper>
        <SearchWrapper>
          <Search width={60} onIconClick={openFiltersModal} />
        </SearchWrapper>
      </Wrapper>

      {isOpen && <FiltersModal onClose={closeFiltersModal} />}
    </>
  )
}

export default TopSection
