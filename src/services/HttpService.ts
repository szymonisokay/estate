import axios from 'axios'

const get = async (endpoint: string) => {
  const response = await axios.get(endpoint)

  return response.data
}

export const HttpService = {
  get,
}
