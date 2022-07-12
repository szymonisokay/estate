import { Wrapper, SearchWrapper } from './TopSection.styled'
import Search from '../../../../components/Search/Search'

const TopSection = () => {
  return (
    <Wrapper>
      <SearchWrapper>
        <Search width={60} />
      </SearchWrapper>
    </Wrapper>
  )
}

export default TopSection
