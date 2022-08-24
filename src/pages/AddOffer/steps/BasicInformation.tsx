import React from 'react'
import { DoubleCol, Layout, Separator, Title } from './Steps.styled'
import { Offer } from '../../../models/Offer.model'
import Input from '../../../components/Inputs/Input/Input'
import Checkbox from '../../../components/Inputs/Checkbox/Checkbox'
import SelectBox from '../shared/SelectBox'
import {
  LandAreaData,
  PropertyTypeData,
} from '../config/AddOfferFormData.config'

interface ComponentInterface {
  offer: Offer
  setOffer: (data: any) => void
}

const BasicInformation: React.FC<ComponentInterface> = ({
  offer,
  setOffer,
}) => {
  return (
    <>
      <Title>1. Basic information</Title>
      <Layout>
        <Input
          id='title'
          name='title'
          type='text'
          labelText='Title'
          value={offer.title}
          onChange={(e) => setOffer({ title: e.target.value })}
          required
        />
        <Separator />
        <DoubleCol>
          <Input
            id='area'
            name='area'
            type='text'
            labelText='Area'
            value={offer.area}
            onChange={(e) => setOffer({ area: e.target.value })}
            required
            isSuffix
            suffixSymbol='m²'
          />

          <Input
            id='usable_area'
            name='usable_area'
            type='number'
            labelText='Usable area'
            value={offer.usable_area}
            onChange={(e) => setOffer({ usable_area: e.target.value })}
            required
            isSuffix
            suffixSymbol='m²'
          />
        </DoubleCol>

        <DoubleCol>
          <Input
            id='price'
            name='price'
            type='number'
            labelText='Price'
            value={offer.price}
            onChange={(e) => setOffer({ price: e.target.value })}
            required
            isSuffix
            suffixSymbol='¢'
          />

          <Input
            id='price_m2'
            name='price_m2'
            type='number'
            labelText='Price for m²'
            value={offer.price_m2}
            onChange={(e) => setOffer({ price_m2: e.target.value })}
            required
            isSuffix
            suffixSymbol='¢'
          />
        </DoubleCol>

        <DoubleCol>
          <div>
            <Checkbox
              labelText='Is property available for renting?'
              value={offer.is_for_rent}
              onChange={(e) => setOffer({ is_for_rent: e.target.checked })}
            />
          </div>
          {!!offer.is_for_rent && (
            <Input
              id='price_month'
              name='price_month'
              type='number'
              labelText='Price for month'
              value={offer.price_month}
              onChange={(e) => setOffer({ price_month: e.target.value })}
            />
          )}
        </DoubleCol>
        <Separator />
        <DoubleCol>
          <SelectBox
            selectItems={PropertyTypeData}
            placeholder='Select...'
            label='Property type'
            onValueChange={(item) => setOffer({ property_type: item.value })}
          />
          <SelectBox
            selectItems={LandAreaData}
            placeholder='Select...'
            label='Land area'
            onValueChange={(item) => setOffer({ property_type: item.value })}
          />
        </DoubleCol>
      </Layout>
    </>
  )
}

export default BasicInformation
