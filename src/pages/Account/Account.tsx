import { Layout, Menu, MenuProps, Space, Typography } from 'antd'
import { useState, useEffect } from 'react'
import { BiBookmarks, BiBriefcaseAlt, BiCategoryAlt, BiCreditCard, BiUser } from 'react-icons/bi'
import { TbUsers } from 'react-icons/tb'
import { MdOutlineCases } from 'react-icons/md'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/auth/AuthContext'

const items: MenuProps['items'] = [
	{
		label: 'Dashboard',
		key: 'dashboard',
		icon: <BiCategoryAlt size={18} />,
	},
	{
		type: 'divider',
	},
	{
		label: 'Edit account',
		key: 'edit-account',
		icon: <BiUser size={18} />,
	},
	{
		type: 'divider',
	},
	{
		label: 'Your offers',
		key: 'offers',
		icon: <BiBriefcaseAlt size={18} />,
	},
	{
		label: 'Your bookmarks',
		key: 'bookmarks',
		icon: <BiBookmarks size={18} />,
	},
	{
		type: 'divider',
	},
	{
		label: 'Your transactions',
		key: 'transactions',
		icon: <BiCreditCard size={18} />,
	},
]

const adminItems: MenuProps['items'] = [
	{
		label: 'Users',
		key: 'all-users',
		icon: <TbUsers size={18} />,
	},
	{
		label: 'Offers',
		key: 'all-offers',
		icon: <MdOutlineCases size={18} />,
	},
]

const Account = () => {
	const [activeMenuItem, setActiveMenuItem] = useState(['dashboard'])
	const navigate = useNavigate()
	const location = useLocation()
	const { user } = useAuth()

	const onMenuItemClick: MenuProps['onClick'] = ({ key }) => {
		let route = ''

		switch (key) {
			case 'dashboard':
				route = ''
				break
			case 'edit-account':
				route = 'edit-account'
				break
			case 'offers':
				route = 'offers'
				break
			case 'bookmarks':
				route = 'bookmarks'
				break
			case 'transactions':
				route = 'transactions'
				break
			case 'all-users':
				route = user?.role === 'Admin' ? 'all-users' : ''
				break
			case 'all-offers':
				route = user?.role === 'Admin' ? 'all-offers' : ''
		}

		navigate(route)
		setActiveMenuItem([key])
	}

	useEffect(() => {
		const currentLocation = location.pathname.split('/')[2]

		setActiveMenuItem([currentLocation === undefined ? 'dashboard' : currentLocation])
	}, [location])

	return (
		<Layout style={{ overflowX: 'hidden' }}>
			<Layout.Sider breakpoint='lg' collapsedWidth='0' style={{ background: '#fff' }}>
				<Menu mode='inline' items={items} onClick={onMenuItemClick} selectable selectedKeys={activeMenuItem} />

				{user?.role === 'Admin' && (
					<>
						<Typography.Title level={4} style={{ padding: '50px 20px 0px' }}>
							Admin
						</Typography.Title>
						<Menu
							mode='inline'
							items={adminItems}
							onClick={onMenuItemClick}
							selectedKeys={activeMenuItem}
						/>
					</>
				)}
			</Layout.Sider>
			<Layout.Content style={{ padding: '0 30px 30px' }}>
				<Outlet />
			</Layout.Content>
		</Layout>
	)
}

export default Account
