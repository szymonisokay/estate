import React from 'react'
import moment from 'moment'
import { BiTimeFive, BiBookmark } from 'react-icons/bi'
import { Offer } from '../../../models/Offer.model'
import {
  Wrapper,
  ImageWrapper,
  Image,
  Bookmark,
  OfferContent,
  OfferMeta,
  OfferHeading,
} from './SingleOffer.styled'

type ComponentType = {
  offer: Offer
}

const SingleOffer: React.FC<ComponentType> = ({ offer }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={offer.images.featured} />
        <Bookmark>
          <BiBookmark size={20} />
        </Bookmark>
      </ImageWrapper>
      <OfferContent>
        <OfferMeta>
          <BiTimeFive size={14} />
          Posted {moment(offer?.createdAt).fromNow()}
        </OfferMeta>
        <OfferHeading>{offer.title}</OfferHeading>
      </OfferContent>
    </Wrapper>
  )
}

export default SingleOffer
