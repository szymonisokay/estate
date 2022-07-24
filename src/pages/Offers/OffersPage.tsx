import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { AppDispatch } from '../../app/store'
import Offers from '../../components/Offers/Offers'
import { fetchOffers, offersSelector } from '../../features/offers/offersSlice'
import { settingsSelector } from '../../features/settings/settingsSlice'
import TopSection from './components/TopSection/TopSection'
import { PageWrapper, Container, TopSectionWrapper } from './OffersPage.styled'

const OffersPage = () => {
  const { offers, isLoading, isError, errorMsg } = useSelector(offersSelector)
  const { filters, pagination, sort, layout } = useSelector(settingsSelector)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchOffers())
  }, [dispatch, filters, pagination, sort])

  useEffect(() => {
    if (!!isError) {
      toast.error(errorMsg)
    }
  }, [isError, errorMsg])

  return (
    <PageWrapper>
      <Container>
        <TopSectionWrapper>
          <TopSection />
        </TopSectionWrapper>
        <Offers offers={offers} isLoading={isLoading} layout={layout} />
      </Container>
    </PageWrapper>
  )
}

export default OffersPage
