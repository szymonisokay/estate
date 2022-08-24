import { useEffect, useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import ReactPaginate from 'react-paginate'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { AppDispatch } from '../../app/store'
import Offers from '../../components/Offers/Offers'
import { fetchOffers, offersSelector } from '../../features/offers/offersSlice'
import {
  changePage,
  settingsSelector,
} from '../../features/settings/settingsSlice'
import TopSection from './components/TopSection/TopSection'
import { PageWrapper, Container, TopSectionWrapper } from './OffersPage.styled'

const OffersPage = () => {
  const { offers, isLoading, isError, errorMsg } = useSelector(offersSelector)
  const {
    filters,
    pagination: { limit, page },
    sort,
    layout,
  } = useSelector(settingsSelector)
  const dispatch = useDispatch<AppDispatch>()

  const [pageCount, setPageCount] = useState(0)

  const { total } = offers

  const handlePageChange = (e: any) => {
    dispatch(changePage(e.selected + 1))
  }

  useEffect(() => {
    const count = Math.ceil(total / limit)

    if (count === 1) {
      setPageCount(count)
      dispatch(changePage(count))

      return
    }

    setPageCount(count)
  }, [dispatch, total, limit])

  useEffect(() => {
    dispatch(fetchOffers())
  }, [dispatch, filters, limit, sort, page])

  useEffect(() => {
    if (!!isError) {
      // toast.error(errorMsg)
    }
  }, [isError, errorMsg])

  return (
    <PageWrapper>
      <Container>
        <TopSectionWrapper>
          <TopSection />
        </TopSectionWrapper>
        <Offers offers={offers} isLoading={isLoading} layout={layout} />
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          className='pagination'
          previousClassName='pagination prev'
          nextClassName='pagination next'
          activeClassName='pagination active'
          previousLabel={<BiChevronLeft />}
          nextLabel={<BiChevronRight />}
          disabledClassName='disabled'
        />
      </Container>
    </PageWrapper>
  )
}

export default OffersPage
