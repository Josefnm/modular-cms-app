import { ChangeEvent, useCallback, useState } from 'react'
import { client } from '../config/axios-client'

export const useSimpleSearch = <R>(
  url: string,
  initState: R
): [R, (event?: ChangeEvent<HTMLInputElement>) => Promise<void>] => {
  const [data, setData] = useState<R>(initState)

  const searchData = useCallback(
    async (event?: ChangeEvent<HTMLInputElement>) => {
      const value = event ? event.target.value : ''
      try {
        const response = await client.get<R>(url + value)
        setData(response.data)
      } catch (e) {
        console.log(e.response)
      }
    },
    [url]
  )
  return [data, searchData]
}
