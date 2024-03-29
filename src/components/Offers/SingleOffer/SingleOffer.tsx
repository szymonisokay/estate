import React from 'react'
import moment from 'moment'
import { BiTimeFive, BiMap } from 'react-icons/bi'
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5'
import { Offer } from '../../../models/Offer.model'
import {
  Wrapper,
  ImageWrapper,
  Image,
  Bookmark,
  OfferContent,
  OfferMeta,
  OfferHeading,
  Location,
  Price,
  Button,
} from './SingleOffer.styled'
import { transformNumber } from '../../../helpers/TransformNumber'

type ComponentType = {
  offer: Offer
}

const SingleOffer: React.FC<ComponentType> = ({ offer }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={offer.images.featured} />
        <Price>${transformNumber(offer.price)}</Price>
        <Bookmark>
          <IoBookmarkOutline size={22} />
        </Bookmark>
      </ImageWrapper>
      <OfferContent>
        <OfferMeta>
          <BiTimeFive size={14} />
          Posted {moment(offer?.createdAt).fromNow()}
        </OfferMeta>
        <OfferHeading>{offer.title}</OfferHeading>
      </OfferContent>
      <Location>
        <BiMap />
        {`${offer.location?.street}, ${offer.location?.city}, ${offer.location?.country}`}
      </Location>
      <Button to={`/offers/${offer._id}`}>More details</Button>
    </Wrapper>
  )
}

export default SingleOffer
