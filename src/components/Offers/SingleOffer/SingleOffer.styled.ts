import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px;
  box-shadow: 0px 5px 40px 0px #0b0b0b1a;
  border-radius: 6px;
`
export const ImageWrapper = styled.div`
  position: relative;
  height: 200px;
`

export const Bookmark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -25px;
  right: 25px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  box-shadow: 0px 5px 15px 0px #13090026;
  background: #fff;
  z-index: 10;

  ${'svg'} {
    fill: var(--accent);
  }
`

export const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0px 10px 13px 0px #13090033;
`

export const OfferContent = styled.div`
  padding-top: 10px;
`

export const OfferMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8em;
  color: var(--gray);

  ${'svg'} {
    fill: var(--gray);
  }
`

export const OfferHeading = styled.div``
