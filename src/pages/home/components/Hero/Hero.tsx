import HomePic from '../../../../assets/images/HomePic.png'
import Search from '../../../../components/Search/Search'
import {
  PageWrapper,
  Column,
  ImageColumn,
  Heading,
  HeroImage,
} from './Hero.styled'

const Hero = () => {
  return (
    <PageWrapper>
      <Column>
        <Heading>
          Every journey starts <br /> with one simple <br /> decision.
        </Heading>
        {/* To do search component */}
        <Search isHome />
      </Column>
      <ImageColumn>
        <HeroImage src={HomePic} />
      </ImageColumn>
    </PageWrapper>
  )
}

export default Hero
