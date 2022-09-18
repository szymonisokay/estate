import { Col, Image, Row, Typography } from 'antd'
import Upload from 'antd/lib/upload'
import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { useAuth } from '../../../contexts/auth/AuthContext'
import { OffersService } from '../../../services/OffersService'
import { StepsComponentInterface } from '../../../config/steps.config'

const Images: React.FC<StepsComponentInterface> = ({ offer, updateOffer }) => {
  const { getToken } = useAuth()

  const uploadButtonMain = (
    <div>
      <BiPlus />
      <div style={{ marginTop: 8 }}>Upload main image</div>
    </div>
  )

  const uploadButton = (
    <div>
      <BiPlus />
      <div style={{ marginTop: 8 }}>Upload other image</div>
    </div>
  )

  const uploadImage = async (e: any, featured: boolean) => {
    const data = {
      is_featured: featured,
    }

    const formData = new FormData()

    formData.append('image', e.file)
    formData.append('imageData', JSON.stringify(data))

    const { file, is_featured } = await OffersService.uploadImage(
      formData,
      getToken()
    )

    updateOffer((offer) => {
      if (is_featured) {
        return {
          ...offer,
          images: {
            ...offer.images,
            featured: file.path,
          },
        }
      } else {
        let otherImages = offer.images.other ?? []
        otherImages = [...otherImages, file.path]

        return {
          ...offer,
          images: {
            ...offer.images,
            other: otherImages,
          },
        }
      }
    })
  }

  return (
    <>
      {offer.images.featured && (
        <>
          <Typography.Title level={4}>Your main image</Typography.Title>
          <Image src={offer.images.featured} />
        </>
      )}
      {!offer.images.featured && (
        <Upload
          multiple
          customRequest={(e) => uploadImage(e, true)}
          listType='picture-card'
          showUploadList={false}
        >
          {uploadButtonMain}
        </Upload>
      )}

      {offer.images.featured && <Typography.Text>Other images</Typography.Text>}
      <Row gutter={[16, 16]}>
        {offer.images.other &&
          offer.images.other.map((image) => (
            <Col key={image} span={6} style={{ minHeight: '100px' }}>
              <Image
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src={image}
              />
            </Col>
          ))}
        {offer.images.featured && offer.images.other!.length <= 3 && (
          <Col span={6}>
            <Upload
              multiple
              customRequest={(e) => uploadImage(e, false)}
              listType='picture-card'
              showUploadList={false}
              style={{ margin: 0 }}
            >
              {uploadButton}
            </Upload>
          </Col>
        )}
      </Row>
    </>
  )
}

export default Images
