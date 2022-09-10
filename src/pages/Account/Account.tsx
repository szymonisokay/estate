import { Layout, Menu, MenuProps } from 'antd'
import React, { useEffect, useState } from 'react'
import {
  BiBookmarks,
  BiBriefcaseAlt,
  BiCategoryAlt,
  BiCreditCard,
  BiUser,
} from 'react-icons/bi'
import { Link, Outlet, useNavigate } from 'react-router-dom'
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

const Account = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(['dashboard'])
  const navigate = useNavigate()
  const { user, getToken } = useAuth()

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
    }

    navigate(route)
  }

  return (
    <Layout style={{ overflowX: 'hidden' }}>
      <Layout.Sider style={{ background: '#fff' }}>
        <Menu
          mode='inline'
          items={items}
          onClick={onMenuItemClick}
          defaultSelectedKeys={activeMenuItem}
        />
      </Layout.Sider>
      <Layout.Content style={{ padding: '0 30px 30px' }}>
        <Outlet />
      </Layout.Content>
    </Layout>
  )
}

export default Account
