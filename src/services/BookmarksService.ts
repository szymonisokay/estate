import axios from 'axios'
import { BookmarksInterface } from '../config/bookmarks.config'
import { OfferType } from '../models/Offer.model'
import { getEndpoint } from '../utils/api-endpoints.config'

const addBookmark = async (id: string, token: string) => {
  const endpoint = getEndpoint('bookmark').path
  const response = await axios.post(
    endpoint,
    { id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return response.data as { msg: string }
}

const removeBookmark = async (id: string, token: string) => {
  const endpoint = getEndpoint('removeBookmark').path.replace('{id}', id)
  const response = await axios.delete(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data as { msg: string; bookmarks: OfferType }
}

const getBookmarks = async (token: string) => {
  const endpoint = getEndpoint('bookmark').path

  const response = await axios.get<BookmarksInterface>(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}
const getPopulatedBookmarks = async (token: string) => {
  const endpoint = getEndpoint('populatedBookmarks').path

  const response = await axios.get<OfferType>(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

export const BookmarksService = {
  addBookmark,
  removeBookmark,
  getBookmarks,
  getPopulatedBookmarks,
}
