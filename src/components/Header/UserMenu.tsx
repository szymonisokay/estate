import { IconType } from 'react-icons'
import { BiBookmark, BiBuildingHouse, BiUser } from 'react-icons/bi'

export type UserMenuModel = {
  id: string
  icon: IconType
  value: string
  action: string
}

export const userMenu: UserMenuModel[] = [
  { id: 'account', icon: BiUser, value: 'Account', action: '/' },
  { id: 'offers', icon: BiBuildingHouse, value: 'Offers', action: '/' },
  { id: 'bookmarks', icon: BiBookmark, value: 'Bookmarks', action: '/' },
]
