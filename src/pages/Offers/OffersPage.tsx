import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppDispatch } from '../../app/store'
import Offers from '../../components/Offers/Offers'
import { fetchOffers, offersSelector } from '../../features/offers/offersSlice'
import TopSection from './components/TopSection/TopSection'
import { PageWrapper, Container, TopSectionWrapper } from './OffersPage.styled'

const OffersPage = () => {
  const { offers, isLoading } = useSelector(offersSelector)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchOffers())
  }, [dispatch])

  return (
    <PageWrapper>
      <Container>
        <TopSectionWrapper>
          <TopSection />
        </TopSectionWrapper>
        <Offers offers={offers} isLoading={isLoading} />
      </Container>
    </PageWrapper>
  )
}

export default OffersPage
