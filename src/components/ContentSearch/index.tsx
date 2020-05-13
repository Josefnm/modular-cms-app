import React, { ChangeEvent, Dispatch, FC, useEffect, useMemo, useState } from 'react'
import { Container, SearchInput } from './styled'
import { useSelector } from '../../hooks/redux'
import ListPicker from './ListPicker'
import { createSearchAction, SearchType } from './utils'
import { SearchActionKey } from '../../hooks/useContentSearch'

type Props = {
  searchForm: SearchForm
  dispatchForm: Dispatch<any>
}

export type SearchField = {
  name: string
  parameters: any
  type: string
}

export type SearchForm = {
  [key: string]: SearchField
}

const ContentSearch: FC<Props> = ({ dispatchForm }) => {
  const { projectTemplates } = useSelector(state => state.template)
  const { members } = useSelector(state => state.project)

  const pickers = useMemo(() => {
    return (
      <>
        <ListPicker
          title="Template"
          dispatchForm={dispatchForm}
          valuesList={projectTemplates}
          valueName="templateId"
          searchType={SearchType.TEMPLATE}
        />
        <ListPicker
          title="Author"
          dispatchForm={dispatchForm}
          valuesList={Object.values(members)}
          valueName="ownerId"
          searchType={SearchType.AUTHOR}
        />
        <ListPicker
          title="Access"
          dispatchForm={dispatchForm}
          valuesList={[true, false]}
          valueName="isPublic"
          searchType={SearchType.PUBLIC}
        />
      </>
    )
  }, [projectTemplates, dispatchForm, members])

  const [searchString, setSearchString] = useState<string>(undefined)

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      const name = 'name'
      if (searchString) {
        dispatchForm(createSearchAction(name, searchString, SearchType.REGEX))
      } else {
        dispatchForm({ name, type: SearchActionKey.REMOVE })
      }
    }, 1000)
    return () => clearTimeout(timeOutId)
  }, [searchString, dispatchForm])

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value)
  }

  return (
    <Container>
      <SearchInput value={searchString} onChange={onChange} type="text" placeholder="Name..." />
      {pickers}
    </Container>
  )
}

export default ContentSearch
