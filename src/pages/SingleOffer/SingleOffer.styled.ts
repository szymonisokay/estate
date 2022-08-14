import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-content: center;
`

export const ImageWrapper = styled.div`
  height: 450px;
  width: 100%;
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 10px 20px 0px #13090033;
  position: relative;
`

export const FeaturedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 0 20px 20px;
`

export const OfferActions = styled.div`
  position: absolute;
  bottom: -25px;
  right: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
`

export const MainButton = styled(Link)`
  display: inline-block;
  height: 50px;
  color: #fff;
  text-decoration: none;
  background: var(--black);
  padding: 15px 40px;
  border-radius: 25px;
  box-shadow: 0px 10px 15px 0px #0b0b0b33;
  font-size: 18px;
`

export const BookmarkButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background: #fff;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 15px 0px #0b0b0b1a;
  cursor: pointer;
`

export const OfferContent = styled.section`
  padding: 30px 50px;
`

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--gray);
`

export const OfferDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export const DetailsWrapper = styled.div``

export const Title = styled.h1`
  font-family: 'Roboto Black', sans-serif;
  font-size: 32px;
  font-weight: 900;

  color: var(--black);
`

export const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  color: var(--gray);
`

export const PriceWrapper = styled.div`
  min-width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${'h3'} {
    font-size: 32px;
    font-family: 'Roboto Black', sans-serif;
    font-weight: 900;
    color: var(--black);
  }

  ${'span'} {
    color: var(--accent);
  }
`
