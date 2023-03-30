import { Col, Input, Row, Space, Typography } from 'antd'
import React from 'react'
import { StepsComponentInterface } from '../../../config/steps.config'

const Localization: React.FC<StepsComponentInterface> = ({ offer, updateOffer }) => {
	return (
		<>
			<Input.Group>
				<Row gutter={[20, 20]}>
					<Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 18 }}>
						<Space direction='vertical' style={{ width: '100%', rowGap: '2px' }}>
							<Typography.Text type='secondary'>Street*</Typography.Text>
							<Input
								style={{ width: '100%' }}
								value={offer.location.street}
								placeholder='Street'
								size='large'
								onChange={(e) =>
									updateOffer((offer) => {
										return {
											...offer,
											location: {
												...offer.location,
												street: e.target.value,
											},
										}
									})
								}
								required
							/>
						</Space>
					</Col>
					<Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
						<Space direction='vertical' style={{ width: '100%', rowGap: '2px' }}>
							<Typography.Text type='secondary'>Zip code*</Typography.Text>
							<Input
								style={{ width: '100%' }}
								value={offer.location.zip_code}
								placeholder='Zip code'
								size='large'
								onChange={(e) =>
									updateOffer((offer) => {
										return {
											...offer,
											location: {
												...offer.location,
												zip_code: e.target.value,
											},
										}
									})
								}
								required
							/>
						</Space>
					</Col>
				</Row>
			</Input.Group>

			<Input.Group>
				<Row gutter={[20, 20]}>
					<Col xs={{ span: 24 }} sm={{ span: 12 }}>
						<Space direction='vertical' style={{ width: '100%', rowGap: '2px' }}>
							<Typography.Text type='secondary'>City*</Typography.Text>
							<Input
								style={{ width: '100%' }}
								value={offer.location.city}
								placeholder='City'
								size='large'
								onChange={(e) =>
									updateOffer((offer) => {
										return {
											...offer,
											location: {
												...offer.location,
												city: e.target.value,
											},
										}
									})
								}
								required
							/>
						</Space>
					</Col>
					<Col xs={{ span: 24 }} sm={{ span: 12 }}>
						<Space direction='vertical' style={{ width: '100%', rowGap: '2px' }}>
							<Typography.Text type='secondary'>Country*</Typography.Text>
							<Input
								style={{ width: '100%' }}
								value={offer.location.country}
								placeholder='Country'
								size='large'
								onChange={(e) =>
									updateOffer((offer) => {
										return {
											...offer,
											location: {
												...offer.location,
												country: e.target.value,
											},
										}
									})
								}
								required
							/>
						</Space>
					</Col>
				</Row>
			</Input.Group>
		</>
	)
}

export default Localization
