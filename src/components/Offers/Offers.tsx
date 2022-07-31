import React from 'react'
import { OffersType } from '../../features/offers/offers.model'
import { Grid, List, LoadingWrapper } from './Offers.styled'
import SingleOffer from './SingleOffer/SingleOffer'
import ClipLoader from 'react-spinners/ClipLoader'

type ComponentType = {
  offers: OffersType
  isLoading: boolean
  layout: string
}

const Offers: React.FC<ComponentType> = ({ offers, isLoading, layout }) => {
  if (isLoading) {
    return (
      <LoadingWrapper>
        <ClipLoader color='#ff7a00' />
      </LoadingWrapper>
    )
  }

  if (Array.isArray(offers.results) && offers.results.length === 0) {
    return <p>No offers</p>
  }

  return (
    <>
      {layout === 'grid' ? (
        <Grid>
          {Array.isArray(offers.results) &&
            offers.results.map((offer) => (
              <SingleOffer key={offer._id} offer={offer} />
            ))}
        </Grid>
      ) : (
        <List>
          {Array.isArray(offers.results) &&
            offers.results.map((offer) => (
              <SingleOffer key={offer._id} offer={offer} />
            ))}
        </List>
      )}
    </>
  )
}

export default Offers
