import React from 'react'
import { OffersType } from '../../features/offers/offers.model'
import { Grid } from './Offers.styled'
import SingleOffer from './SingleOffer/SingleOffer'

type ComponentType = {
  offers: OffersType
  isLoading: boolean
}

const Offers: React.FC<ComponentType> = ({ offers, isLoading }) => {
  return (
    <Grid>
      {isLoading && <p>loading</p>}
      {Array.isArray(offers.results) &&
        offers.results.map((offer) => (
          <SingleOffer key={offer._id} offer={offer} />
        ))}
    </Grid>
  )
}

export default Offers
