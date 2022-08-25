import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/svgs/Estate_v2.svg'
import { useAuth } from '../../contexts/auth/AuthContext'
import { BiUser } from 'react-icons/bi'
import { userMenu } from './UserMenu'
import { Button, Dropdown, Menu, MenuProps, Space } from 'antd'

const Header = () => {
  const { pathname } = useLocation()
  const { user, signOut, checkTokenExpiration } = useAuth()

  const isShown = pathname.includes('login') || pathname.includes('register')

  const onitemClick: MenuProps['onClick'] = ({ key }) => {
    const action = userMenu.find((item) => item.key === key)?.action

    console.log(action)
  }

  useEffect(() => {
    const isExpired = checkTokenExpiration()

    if (!!isExpired) return signOut()
  }, [user, checkTokenExpiration, signOut])

  const menu = <Menu onClick={onitemClick} items={userMenu} />

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
              placement='bottom'
              icon={<BiUser size={22} style={{ marginTop: '3px' }} />}
              trigger={['click']}
              size='large'
            ></Dropdown.Button>

            <Button type='primary' size='large'>
              Add offer
            </Button>
          </Space>
        </Space>
      )}
    </>
  )
}

export default Header
