import moment from 'moment'
import { useEffect, useState } from 'react'
import {
  BiCalendar,
  BiExpand,
  BiExpandAlt,
  BiMap,
  BiTimeFive,
} from 'react-icons/bi'
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
  Link,
  BookmarkButton,
  DateWrapper,
  Title,
  OfferDetails,
  PriceWrapper,
  DetailsWrapper,
  Address,
  MainFeatures,
  Feature,
  SectionTitle,
  FacilitiesList,
  Facility,
  Section,
  List,
  ListElement,
  ErrorWrapper,
  Avatar,
  ContactDetails,
} from './SingleOffer.styled'
import { getFallbackPath } from '../../helpers/FallbackPath'

const SingleOffer = () => {
  const { id: paramId } = useParams()
  const dispatch = useDispatch<AppDispatch>()

  const {
    offers: { results },

    isLoading,
  } = useSelector(offersSelector)

  const [offer, setOffer] = useState<Offer>()

  useEffect(() => {
    if (!paramId) return

    dispatch(fetchSingleOffer(paramId))
  }, [dispatch, paramId])

  useEffect(() => {
    if (!Array.isArray(results)) {
      setOffer(results as Offer)
    }
  }, [offer, results])

  if (isLoading) {
    return (
      <LoadingWrapper>
        <ClipLoader color='#ff7a00' />
      </LoadingWrapper>
    )
  }

  if (!offer) {
    return (
      <ErrorWrapper>
        <span>This offer no longer exists.</span>
        <Link to={'/offers'}>Go back</Link>
      </ErrorWrapper>
    )
  }

  return (
    <>
      <ImageWrapper>
        <FeaturedImage src={offer?.images.featured} alt={offer?.title} />
        <OfferActions>
          <Link to='#'>Purchase</Link>
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
            <h3>{transformNumber(offer?.price!)}</h3>
            <span>{transformNumber(offer?.price_m2!)}/m²</span>
          </PriceWrapper>
        </OfferDetails>
        <MainFeatures>
          <Feature title='Area'>
            <BiExpandAlt />
            <span>{transformNumber(offer?.area!)} m²</span>
          </Feature>
          <Feature title='Usable area'>
            <BiExpand />
            <span>{transformNumber(offer?.usable_area!)} m²</span>
          </Feature>
          <Feature title='Construction year'>
            <BiCalendar />
            <span>{offer?.construction_year}</span>
          </Feature>
        </MainFeatures>
      </OfferContent>
      <Section>
        <SectionTitle>Facilities</SectionTitle>
        <FacilitiesList>
          {offer?.facilities.map((facility, index) => (
            <Facility key={index}>
              <span>{facility.name}</span>
              <small>({facility.amount})</small>
            </Facility>
          ))}
        </FacilitiesList>
      </Section>
      <Section>
        <SectionTitle>Additional property information</SectionTitle>
        <List>
          <ListElement>
            <strong>Property type:</strong>
            <span>{offer.property_type}</span>
          </ListElement>
          <ListElement>
            <strong>Price:</strong>
            <span>{transformNumber(offer.price)} points</span>
          </ListElement>
          {offer.is_for_rent && (
            <ListElement>
              <strong>Price per month:</strong>
              <span>{transformNumber(offer.price_month)} points</span>
            </ListElement>
          )}
          <ListElement>
            <strong>Availability:</strong>
            <span>{offer.available}</span>
          </ListElement>
          <ListElement>
            <strong>Building:</strong>
            <span>
              {offer.property_type}; build in {offer.construction_year}
            </span>
          </ListElement>
          <ListElement>
            <strong>No. of rooms:</strong>
            <span>{offer.rooms_num}</span>
          </ListElement>
          <ListElement>
            <strong>Land area:</strong>
            <span>{offer.land_area}</span>
          </ListElement>
          {offer.parking.is_parking && (
            <ListElement>
              <strong>Parking:</strong>
              <span>
                {offer.parking.parking_type}; {offer.parking.parking_num}{' '}
                parking {offer.parking.parking_num === 1 ? 'spot' : 'spots'}
              </span>
            </ListElement>
          )}
        </List>
      </Section>
      <Section>
        <SectionTitle>Localization</SectionTitle>
        <List>
          <ListElement>
            <strong>Address:</strong>
            <span>
              {offer?.location.street} {offer?.location.city},{' '}
              {offer?.location.country}, {offer?.location.zip_code}
            </span>
          </ListElement>
          <ListElement>
            <strong>Surroundings:</strong>
            <span>{offer.surroundings}</span>
          </ListElement>
          <ListElement>
            <strong>Nearby:</strong>
            <span>{offer.nearby}</span>
          </ListElement>
        </List>
      </Section>
      <Section>
        <SectionTitle>Property description</SectionTitle>
        {/* To Do - change innerHTML to third party package */}
        <div dangerouslySetInnerHTML={{ __html: offer.body_html }} />
      </Section>
      <Section>
        <SectionTitle>Contact details</SectionTitle>
        <ContactDetails>
          <Avatar src={offer.user.image || getFallbackPath()} />
          <p>{offer.user.username}</p>
        </ContactDetails>
        <Link to={`/users/${offer.user._id}`}>View Profile</Link>
      </Section>
    </>
  )
}

export default SingleOffer
