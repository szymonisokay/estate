import React from 'react'
import { OffersType } from '../../features/offers/offers.model'
import { Grid, List, LoadingWrapper } from './Offers.styled'
import SingleOffer from './SingleOffer/SingleOffer'
import ClipLoader from 'react-spinners/ClipLoader'

type ComponentType = {
  offers: OffersType
  isLoading?: boolean
  layout?: string
  isHome?: boolean
}

const Offers: React.FC<ComponentType> = ({
  offers,
  isLoading,
  layout,
  isHome,
}) => {
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

  if (isHome && Array.isArray(offers.results)) {
    return (
      <Grid>
        {offers.results.slice(0, 3).map((offer) => (
          <SingleOffer key={offer._id} offer={offer} />
        ))}
      </Grid>
    )
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
