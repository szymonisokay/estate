import moment from 'moment'
import { useEffect, useState } from 'react'
import { BiMap, BiTimeFive } from 'react-icons/bi'
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { AppDispatch } from '../../app/store'
import {
  fetchSingleOffer,
  offersSelector,
} from '../../features/offers/offersSlice'
import { transformNumber } from '../../helpers/TransformNumber'
import { Offer } from '../../models/Offer.model'
import {
  LoadingWrapper,
  ImageWrapper,
  FeaturedImage,
  OfferContent,
  OfferActions,
  MainButton,
  BookmarkButton,
  DateWrapper,
  Title,
  OfferDetails,
  PriceWrapper,
  DetailsWrapper,
  Address,
} from './SingleOffer.styled'

const SingleOffer = () => {
  const { id: paramId } = useParams()
  const dispatch = useDispatch<AppDispatch>()

  const {
    offers: { results },
    isSuccess,
    isLoading,
  } = useSelector(offersSelector)

  const [offer, setOffer] = useState<Offer>()

  useEffect(() => {
    if (!paramId) return

    dispatch(fetchSingleOffer(paramId))
  }, [dispatch, paramId])

  useEffect(() => {
    if (!!isSuccess && !Array.isArray(results)) {
      setOffer(results)
    }
  }, [isSuccess, offer, results])

  if (isLoading) {
    return (
      <LoadingWrapper>
        <ClipLoader color='#ff7a00' />
      </LoadingWrapper>
    )
  }

  return (
    <>
      <ImageWrapper>
        <FeaturedImage src={offer?.images.featured} alt={offer?.title} />
        <OfferActions>
          <MainButton to='#'>Purchase</MainButton>
          <BookmarkButton>
            <IoBookmarkOutline color='#ff7a00' size={22} />
          </BookmarkButton>
        </OfferActions>
      </ImageWrapper>
      <OfferContent>
        <DateWrapper>
          <BiTimeFive />
          Posted {moment(offer?.createdAt).fromNow()}
        </DateWrapper>
        <OfferDetails>
          <DetailsWrapper>
            <Title>{offer?.title}</Title>
            <Address>
              <BiMap />
              <span>
                {offer?.location.street} {offer?.location.city},{' '}
                {offer?.location.country}, {offer?.location.zip_code}
              </span>
            </Address>
          </DetailsWrapper>
          <PriceWrapper>
            <h3>${!!offer?.price && transformNumber(offer.price)}</h3>
            <span>
              ${!!offer?.price && transformNumber(offer.price_m2)}/m<sup>2</sup>
            </span>
          </PriceWrapper>
        </OfferDetails>
      </OfferContent>
    </>
  )
}

export default SingleOffer
