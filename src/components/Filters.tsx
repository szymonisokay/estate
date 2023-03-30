import { Col, Input, InputNumber, Row, Select, Typography } from 'antd'
import React, { useRef } from 'react'
import { Filters as FiltersInterface } from '../config/filters.config'
import { formatter, parser } from '../config/steps.config'

interface ComponentInterface {
	filters: FiltersInterface
	setFilters: React.Dispatch<React.SetStateAction<FiltersInterface>>
}

const Filters: React.FC<ComponentInterface> = ({ filters, setFilters }) => {
	const timerRef = useRef<ReturnType<typeof setTimeout>>()

	const onSearch = (searchValue: string) => {
		setFilters((filters) => {
			return {
				...filters,
				location: searchValue,
			}
		})
	}

	const onSelect = (selectValue: 'purchase' | 'rent') => {
		setFilters((filters) => {
			return {
				...filters,
				type: selectValue,
			}
		})
	}

	const onInputChange = (value: number, filterInstance: keyof FiltersInterface) => {
		if (timerRef.current) {
			clearTimeout(timerRef.current)
		}

		timerRef.current = setTimeout(() => {
			setFilters((filters) => {
				return {
					...filters,
					[filterInstance]: value,
				}
			})
		}, 1000)
	}

	const selectBefore = (
		<Select defaultValue='purchase' onChange={onSelect}>
			<Select.Option value='purchase'>Purchase</Select.Option>
			<Select.Option value='rent'>Rent</Select.Option>
		</Select>
	)

	return (
		<Input.Group>
			<Row gutter={[12, 12]}>
				<Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
					<Input.Search
						addonBefore={selectBefore}
						placeholder='Search location'
						allowClear
						onSearch={onSearch}
						size='large'
					/>
				</Col>
				<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
					<Input.Group style={{ display: 'flex', alignItems: 'center' }}>
						<InputNumber
							style={{ minWidth: 140 }}
							placeholder='Min price'
							size='large'
							min={0}
							controls={false}
							addonAfter='C'
							parser={parser}
							formatter={formatter}
							onChange={(e) => onInputChange(e, 'minPrice')}
						/>
						<Typography.Text type='secondary' style={{ padding: '0 10px' }}>
							-
						</Typography.Text>
						<InputNumber
							style={{ minWidth: 140 }}
							placeholder='Max price'
							size='large'
							min={0}
							controls={false}
							addonAfter='C'
							parser={parser}
							formatter={formatter}
							onChange={(e) => onInputChange(e, 'maxPrice')}
						/>
					</Input.Group>
				</Col>
				<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
					<Input.Group style={{ display: 'flex', alignItems: 'center' }}>
						<InputNumber
							placeholder='Min area'
							size='large'
							style={{ minWidth: 140 }}
							min={0}
							controls={false}
							addonAfter='m²'
							parser={parser}
							formatter={formatter}
							onChange={(e) => onInputChange(e, 'minArea')}
						/>
						<Typography.Text type='secondary' style={{ padding: '0 10px' }}>
							-
						</Typography.Text>
						<InputNumber
							style={{ minWidth: 140 }}
							placeholder='Max area'
							size='large'
							min={0}
							controls={false}
							addonAfter='m²'
							parser={parser}
							formatter={formatter}
							onChange={(e) => onInputChange(e, 'maxArea')}
						/>
					</Input.Group>
				</Col>
			</Row>
		</Input.Group>
	)
}

export default Filters
