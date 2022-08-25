import React from 'react'
import { OffersType } from '../../features/offers/offers.model'
import SingleOffer from './SingleOffer/SingleOffer'
import { Layout, Spin } from 'antd'

type ComponentType = {
  offers: OffersType
  isLoading?: boolean
  layout?: string
  isHome?: boolean
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
      {Array.isArray(offers.results) &&
        offers.results.map((offer) => (
          <SingleOffer key={offer._id} offer={offer} />
        ))}
    </div>
  )
}

export default Offers
