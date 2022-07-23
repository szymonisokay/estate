import React from 'react'
import { OffersType } from '../../features/offers/offers.model'

type ComponentType = {
  offers: OffersType
  isLoading: boolean
}

const Offers: React.FC<ComponentType> = ({ offers, isLoading }) => {
  return (
    <div>
      {isLoading && <p>loading</p>}
      {Array.isArray(offers.results) &&
        offers.results.map((offer) => <p key={offer._id}>{offer.title}</p>)}
    </div>
  )
}

export default Offers
