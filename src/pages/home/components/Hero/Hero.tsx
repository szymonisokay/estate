import { useNavigate } from 'react-router-dom'
import HomePic from '../../../../assets/images/HomePic.png'
import Search from '../../../../components/Search/Search'
import {
  PageWrapper,
  Column,
  ImageColumn,
  Heading,
  SearchWrapper,
  HeroImage,
} from './Hero.styled'

const Hero = () => {
  const navigate = useNavigate()

  const navigateTo = () => {
    navigate('/offers')
  }

  return (
    <PageWrapper>
      <Column>
        <Heading>
          Every journey starts <br /> with one simple <br /> decision.
        </Heading>
        {/* To do search component */}
        <SearchWrapper>
          <Search isHome onAction={navigateTo} />
        </SearchWrapper>
      </Column>
      <ImageColumn>
        <HeroImage src={HomePic} />
      </ImageColumn>
    </PageWrapper>
  )
}

export default Hero
