import React from 'react'
import SingleOffer from './SingleOffer'
import { Layout, Spin } from 'antd'
import { OfferType } from '../../models/Offer.model'

type ComponentType = {
  offers: OfferType
  isLoading: boolean
}

const Offers: React.FC<ComponentType> = ({ offers, isLoading }) => {
  if (isLoading) {
    return (
      <Layout>
        <Spin />
      </Layout>
    )
  }

  if (Array.isArray(offers.results) && offers.results.length === 0) {
    return <p>No offers</p>
  }

  return (
    <div className='grid'>
      {!isLoading &&
        Array.isArray(offers.results) &&
        offers.results.map((offer) => (
          <SingleOffer key={offer._id} offer={offer} />
        ))}
    </div>
  )
}

export default Offers
