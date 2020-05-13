import { Dispatch, useEffect, useReducer, useState } from 'react'
import { client } from '../config/axios-client'
import { useSelector } from './redux'
import { ContentModel } from '../store/reducers/content.reducers'
import { SearchField, SearchForm } from '../components/ContentSearch'

export enum SearchActionKey {
  SET = 'SET',
  REMOVE = 'REMOVE',
}

export type SearchAction = {
  type: SearchActionKey
  name: string
  data?: SearchField
}

const reducer = (state: SearchForm, action: SearchAction): SearchForm => {
  switch (action.type) {
    case SearchActionKey.SET:
      return { ...state, [action.name]: action.data }
    case SearchActionKey.REMOVE:
      const { [action.name]: removed, ...newState } = state
      return newState
    default:
      return state
  }
}

export const useContentSearch = (): [ContentModel[], SearchForm, Dispatch<SearchAction>] => {
  const { projectContent } = useSelector(state => state.content)
  const { selectedProject } = useSelector(state => state.project)
  const [content, setContent] = useState<ContentModel[]>([])
  const [searchForm, dispatch] = useReducer(reducer, {})
  useEffect(() => {
    const func = async () => {
      const body = Object.values(searchForm)
      console.log('body', body)
      if (!body.length) {
        setContent(projectContent)
      } else {
        try {
          const { data } = await client.post<ContentModel[]>(
            `/content/search/${selectedProject}`,
            body
          )
          await setContent(data)
        } catch (e) {
          console.log(e.response.message)
        }
      }
    }
    func()
  }, [projectContent, searchForm, selectedProject])
  return [content, searchForm, dispatch]
}
