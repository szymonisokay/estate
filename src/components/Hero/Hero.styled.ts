import styled from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 50px;
`

export const Column = styled.div`
  flex-basis: 60%;
`

export const ImageColumn = styled(Column)`
  flex-basis: 40%;
`

export const Heading = styled.h1`
  color: var(--black);
  font-size: 52px;
  font-weight: 900;
  margin-bottom: 20px;
`

export const HeroImage = styled.img`
  display: block;
  width: 90%;
  margin: 0 auto;
`
