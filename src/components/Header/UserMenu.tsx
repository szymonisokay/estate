import { BiBookmark, BiBuildingHouse, BiLogOut, BiUser } from 'react-icons/bi'

export type UserMenuModel = {
  key: string
  icon: any
  label: string
  action: string
}

export const userMenu: UserMenuModel[] = [
  {
    key: '1',
    icon: <BiUser size={18} />,
    label: 'Account',
    action: 'navigateAccount',
  },
  {
    key: '2',
    icon: <BiBuildingHouse size={18} />,
    label: 'Offers',
    action: 'navigateOffers',
  },
  {
    key: '3',
    icon: <BiBookmark size={18} />,
    label: 'Bookmarks',
    action: 'navigateBookmarks',
  },
  {
    key: '4',
    icon: <BiLogOut size={18} />,
    label: 'Log out',
    action: 'logOut',
  },
]
