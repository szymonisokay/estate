import { BiBookmark, BiBuildingHouse, BiLogOut, BiUser } from 'react-icons/bi'

export type UserMenuModel = {
  key: string
  icon: any
  label: string
  action: string
}

export const userMenu: UserMenuModel[] = [
  { key: '1', icon: <BiUser />, label: 'Account', action: 'navigateAccount' },
  {
    key: '2',
    icon: <BiBuildingHouse />,
    label: 'Offers',
    action: 'navigateOffers',
  },
  {
    key: '3',
    icon: <BiBookmark />,
    label: 'Bookmarks',
    action: 'navigateBookmarks',
  },
  { key: '4', icon: <BiLogOut />, label: 'Log out', action: 'logOut' },
]
