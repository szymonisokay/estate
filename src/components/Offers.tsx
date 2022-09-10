import React from 'react'
import OfferCard from './OfferCard'
import { Layout, Spin } from 'antd'
import { OfferType } from '../models/Offer.model'

type ComponentType = {
  offers: OfferType
  isLoading: boolean
  type: string
}

const Offers: React.FC<ComponentType> = ({ offers, isLoading, type }) => {
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
          <OfferCard key={offer._id} offer={offer} type={type} />
        ))}
    </div>
  )
}

export default Offers
