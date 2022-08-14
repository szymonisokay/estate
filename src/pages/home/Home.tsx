import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch } from '../../app/store'
import Offers from '../../components/Offers/Offers'
import { fetchOffers, offersSelector } from '../../features/offers/offersSlice'
import Hero from './components/Hero/Hero'
import { HomeContent, Title } from './Home.styled'

const Home = () => {
  const { offers, isLoading } = useSelector(offersSelector)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchOffers())
  }, [dispatch])

  return (
    <>
      <Hero />
      <HomeContent>
        <Title>New offers</Title>
        <Offers offers={offers} isLoading={isLoading} isHome />
      </HomeContent>
    </>
  )
}

export default Home
