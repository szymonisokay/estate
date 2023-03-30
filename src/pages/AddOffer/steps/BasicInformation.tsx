import { Checkbox, Col, Divider, Input, InputNumber, Row, Space, Typography } from 'antd'
import React from 'react'
import { formatter, parser, StepsComponentInterface } from '../../../config/steps.config'

const BasicInformation: React.FC<StepsComponentInterface> = ({ offer, updateOffer }) => {
	return (
		<>
			<Space direction='vertical' style={{ width: '100%', rowGap: '2px' }}>
				<Typography.Text type='secondary'>Title*</Typography.Text>
				<Input
					type='text'
					value={offer.title}
					placeholder='Title'
					size='large'
					onChange={(e) =>
						updateOffer((offer) => {
							return {
								...offer,
								title: e.target.value,
							}
						})
					}
					required
				/>
			</Space>

			<Space direction='vertical' style={{ width: '100%', rowGap: '2px' }}>
				<Typography.Text type='secondary'>Property description*</Typography.Text>
				<Input.TextArea
					value={offer.description}
					placeholder='Description'
					rows={6}
					size='large'
					onChange={(e) =>
						updateOffer((offer) => {
							return {
								...offer,
								description: e.target.value,
							}
						})
					}
					required
				/>
			</Space>

			<Divider />

			<Input.Group>
				<Row gutter={[20, 20]}>
					<Col xs={{ span: 24 }} md={{ span: 12 }}>
						<Space direction='vertical' style={{ width: '100%', rowGap: '2px' }}>
							<Typography.Text type='secondary'>Area*</Typography.Text>
							<InputNumber
								style={{ width: '100%' }}
								value={offer.area}
								placeholder='Area'
								size='large'
								formatter={formatter}
								parser={parser}
								onChange={(value) =>
									updateOffer((offer) => {
										return {
											...offer,
											area: value,
										}
									})
								}
								addonAfter='m²'
								required
							/>
						</Space>
					</Col>
					<Col xs={{ span: 24 }} md={{ span: 12 }}>
						<Space direction='vertical' style={{ width: '100%', rowGap: '2px' }}>
							<Typography.Text type='secondary'>Land area*</Typography.Text>
							<InputNumber
								style={{ width: '100%' }}
								value={offer.land_area}
								placeholder='Land area'
								size='large'
								formatter={formatter}
								parser={parser}
								onChange={(value) =>
									updateOffer((offer) => {
										return {
											...offer,
											land_area: value,
										}
									})
								}
								addonAfter='m²'
								required
							/>
						</Space>
					</Col>
				</Row>
			</Input.Group>

			<Input.Group>
				<Row gutter={20}>
					<Col xs={{ span: 24 }} md={{ span: 12 }}>
						<Space direction='vertical' style={{ width: '100%', rowGap: '2px' }}>
							<Typography.Text type='secondary'>Price*</Typography.Text>
							<InputNumber
								style={{ width: '100%' }}
								value={offer.price}
								placeholder='Price'
								size='large'
								formatter={formatter}
								parser={parser}
								onChange={(value) =>
									updateOffer((offer) => {
										return {
											...offer,
											price: value,
										}
									})
								}
								addonAfter='C'
								required
							/>
						</Space>
					</Col>
				</Row>
			</Input.Group>

			<Divider />
			<Input.Group>
				<Row gutter={[20, 20]}>
					<Col xs={{ span: 24 }} md={{ span: 12 }}>
						<Checkbox
							checked={offer.is_for_rent}
							onChange={(e) =>
								updateOffer((offer) => {
									if (e.target.checked === false) {
										return {
											...offer,
											is_for_rent: e.target.checked,
											price_month: 0,
										}
									}

									return {
										...offer,
										is_for_rent: e.target.checked,
									}
								})
							}
						>
							Is property available for renting?
						</Checkbox>
					</Col>
					<Col xs={{ span: 24 }} md={{ span: 12 }}>
						{offer.is_for_rent && (
							<Space direction='vertical' style={{ width: '100%', rowGap: '2px' }}>
								<Typography.Text type='secondary'>Price per month*</Typography.Text>
								<InputNumber
									style={{ width: '100%' }}
									value={offer.price_month}
									placeholder='Price per month'
									size='large'
									formatter={formatter}
									parser={parser}
									onChange={(value) =>
										updateOffer((offer) => {
											return {
												...offer,
												price_month: value,
											}
										})
									}
									addonAfter='C'
									required
								/>
							</Space>
						)}
					</Col>
				</Row>
			</Input.Group>
		</>
	)
}

export default BasicInformation
