import { ChangeEvent, useCallback, useState } from 'react'
import { client } from '../network/axios-client'

export const useSearch = <R>(
  url: string,
  initState: R
): [R, (event?: ChangeEvent<HTMLInputElement>) => Promise<void>] => {
  const [data, setData] = useState<R>(initState)

  const searchUsers = useCallback(
    async (event?: ChangeEvent<HTMLInputElement>) => {
      const value = event ? event.target.value : ''
      try {
        const response = await client.get<R>(url + value)
        setData(response.data)
      } catch (e) {
        console.log('search error', e.message)
      }
    },
    [url]
  )
  return [data, searchUsers]
}
