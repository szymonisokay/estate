import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/svgs/Estate_v2.svg'
import { useAuth } from '../contexts/auth/AuthContext'
import { BiDotsHorizontal } from 'react-icons/bi'
import { userMenu } from '../config/UserMenu.config'
import { Avatar, Button, Dropdown, Menu, MenuProps, Space } from 'antd'
import useMediaQuery from '../hooks/useMediaQuery'
import { MediaQueries } from '../config/mediaQueries'

const Header = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const { user, signOut, checkTokenExpiration } = useAuth()

	const matches = useMediaQuery(MediaQueries.XS)

	const isShown = pathname.includes('login') || pathname.includes('register')

	const onItemClick: MenuProps['onClick'] = ({ key }) => {
		const action = userMenu.find((item) => item.key === key)?.action

		switch (action) {
			case 'addOffer':
				navigate('/offer/add')
				break
			case 'navigateAccount':
				navigate('/account')
				break
			case 'navigateOffers':
				navigate('/account/offers')
				break
			case 'navigateBookmarks':
				navigate('/account/bookmarks')
				break
			case 'logOut':
				signOut()
				navigate('/login')
				break
		}
	}

	const onMainItemClick = () => {
		navigate('/account')
	}

	useEffect(() => {
		const isExpired = checkTokenExpiration()

		if (!!isExpired) return signOut()
	}, [user, checkTokenExpiration, signOut])

	const menu = <Menu onClick={onItemClick} items={userMenu} />

	return (
		<>
			{!isShown && (
				<Space
					style={{
						width: '100%',
						justifyContent: 'space-between',
						padding: '20px 30px',
						background: '#f0f2f5',
					}}
				>
					<Link to='/'>
						<Logo className='logo' />
					</Link>
					<Space>
						<Dropdown.Button
							overlay={menu}
							placement='bottomRight'
							icon={<BiDotsHorizontal size={22} style={{ marginTop: '3px' }} />}
							trigger={['click']}
							size='large'
							onClick={onMainItemClick}
						>
							{user?.username}
						</Dropdown.Button>

						{!matches && (
							<Button onClick={() => navigate('/offer/add')} type='primary' size='large'>
								Add offer
							</Button>
						)}
					</Space>
				</Space>
			)}
		</>
	)
}

export default Header
