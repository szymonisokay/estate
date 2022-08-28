import {
  Checkbox,
  Col,
  Divider,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Typography,
} from 'antd'
import React from 'react'
import {
  parkingType,
  propertyType,
  StepsComponentInterface,
} from './steps.config'

const AdditionalInformation: React.FC<StepsComponentInterface> = ({
  offer,
  updateOffer,
}) => {
  return (
    <>
      <Input.Group>
        <Row gutter={20}>
          <Col span={12}>
            <Space
              direction='vertical'
              style={{ width: '100%', rowGap: '2px' }}
            >
              <Typography.Text type='secondary'>Property type*</Typography.Text>
              <Select
                style={{ width: '100%' }}
                defaultValue={offer.property_type}
                size='large'
                placeholder='Property type'
                onSelect={(value: string) =>
                  updateOffer((offer) => {
                    return {
                      ...offer,
                      property_type: value,
                    }
                  })
                }
              >
                {propertyType.map((property) => (
                  <Select.Option key={property.value} value={property.value}>
                    {property.label}
                  </Select.Option>
                ))}
              </Select>
            </Space>
          </Col>

          <Col span={12}>
            <Space
              direction='vertical'
              style={{ width: '100%', rowGap: '2px' }}
            >
              <Typography.Text type='secondary'>
                Construction year*
              </Typography.Text>
              <Input
                style={{ width: '100%' }}
                defaultValue={offer.construction_year}
                size='large'
                placeholder='Construction year'
                onChange={(e) =>
                  updateOffer((offer) => {
                    return {
                      ...offer,
                      construction_year: e.target.value,
                    }
                  })
                }
              />
            </Space>
          </Col>
        </Row>
      </Input.Group>

      <Input.Group>
        <Row gutter={20}>
          <Col span={12}>
            <Space
              direction='vertical'
              style={{ width: '100%', rowGap: '2px' }}
            >
              <Typography.Text type='secondary'>Available*</Typography.Text>
              <Input
                style={{ width: '100%' }}
                defaultValue={offer.available}
                size='large'
                placeholder='Property type'
                onChange={(e) =>
                  updateOffer((offer) => {
                    return {
                      ...offer,
                      available: e.target.value,
                    }
                  })
                }
              />
            </Space>
          </Col>
        </Row>
      </Input.Group>

      <Divider />

      <Checkbox
        checked={offer.is_parking}
        onChange={(e) =>
          updateOffer((offer) => {
            if (e.target.checked === false) {
              return {
                ...offer,
                is_parking: e.target.checked,
                parking: {
                  parking_num: 0,
                  parking_type: '',
                },
              }
            }
            return {
              ...offer,
              is_parking: e.target.checked,
            }
          })
        }
      >
        Is parking?
      </Checkbox>

      {offer.is_parking && (
        <Input.Group>
          <Row gutter={20}>
            <Col span={12}>
              <Space
                direction='vertical'
                style={{ width: '100%', rowGap: '2px' }}
              >
                <Typography.Text type='secondary'>Parking type</Typography.Text>
                <Select
                  style={{ width: '100%' }}
                  defaultValue={offer.parking.parking_type}
                  size='large'
                  placeholder='Property type'
                  onSelect={(value: string) =>
                    updateOffer((offer) => {
                      return {
                        ...offer,
                        parking: {
                          ...offer.parking,
                          parking_type: value,
                        },
                      }
                    })
                  }
                >
                  {parkingType.map((parking) => (
                    <Select.Option key={parking.value} value={parking.value}>
                      {parking.label}
                    </Select.Option>
                  ))}
                </Select>
              </Space>
            </Col>

            <Col span={12}>
              <Space
                direction='vertical'
                style={{ width: '100%', rowGap: '2px' }}
              >
                <Typography.Text type='secondary'>No. of slots</Typography.Text>
                <InputNumber
                  style={{ width: '100%' }}
                  defaultValue={offer.parking.parking_num}
                  size='large'
                  min={0}
                  placeholder='No. of slots'
                  onChange={(value) =>
                    updateOffer((offer) => {
                      return {
                        ...offer,
                        parking: {
                          ...offer.parking,
                          parking_num: value,
                        },
                      }
                    })
                  }
                />
              </Space>
            </Col>
          </Row>
        </Input.Group>
      )}

      <Divider />

      <Space direction='vertical' style={{ width: '100%', rowGap: '2px' }}>
        <Typography.Text type='secondary'>Surroundings*</Typography.Text>
        <Input.TextArea
          value={offer.surroundings}
          placeholder='Surroundings'
          rows={2}
          size='large'
          onChange={(e) =>
            updateOffer((offer) => {
              return {
                ...offer,
                surroundings: e.target.value,
              }
            })
          }
          required
        />
      </Space>

      <Space direction='vertical' style={{ width: '100%', rowGap: '2px' }}>
        <Typography.Text type='secondary'>Nearby*</Typography.Text>
        <Input.TextArea
          value={offer.nearby}
          placeholder='Nearby'
          rows={2}
          size='large'
          onChange={(e) =>
            updateOffer((offer) => {
              return {
                ...offer,
                nearby: e.target.value,
              }
            })
          }
          required
        />
      </Space>
    </>
  )
}

export default AdditionalInformation
