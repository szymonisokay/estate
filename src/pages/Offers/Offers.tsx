import TopSection from './components/TopSection/TopSection'
import { PageWrapper, Container, TopSectionWrapper } from './Offers.styled'

const Offers = () => {
  return (
    <PageWrapper>
      <Container>
        <TopSectionWrapper>
          <TopSection />
        </TopSectionWrapper>
      </Container>
    </PageWrapper>
  )
}

export default Offers
