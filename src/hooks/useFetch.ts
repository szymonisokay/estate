import { useCallback, useEffect, useState } from 'react'
import { HttpService } from '../services/HttpService'
import { getEndpoint } from '../utils/api-endpoints.config'
import { ApiEndpoints } from '../utils/api-endpoints.model'

const useFetch = (apiEndpoint: keyof ApiEndpoints, param?: any) => {
  const [data, setData] = useState<any>({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      let endpoint = getEndpoint(apiEndpoint).path

      if (param) {
        endpoint = endpoint.replace('{param}', param)
      }

      const response = await HttpService.get(endpoint)

      setData(response)
    } catch (error: any) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }, [apiEndpoint, param])

  useEffect(() => {
    fetchData()
  }, [fetchData, apiEndpoint, param])

  return { data, isLoading, error }
}

export default useFetch
