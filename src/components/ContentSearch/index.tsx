import React, { ChangeEvent, Dispatch, FC, useEffect, useMemo, useState } from 'react'
import { Container, SearchInput } from './styled'
import { useSelector } from '../../hooks/redux'
import ListPicker from './ListPicker'
import { createSearchAction, SearchType } from './utils'
import { SearchActionKey } from '../../hooks/useContentSearch'

type Props = {
  dispatchForm: Dispatch<any>
  isPublic?: boolean
}

const ContentSearch: FC<Props> = ({ dispatchForm, isPublic }) => {
  const { projectTemplates } = useSelector(state => state.template)
  const { members } = useSelector(state => state.project)

  const pickers = useMemo(() => {
    return (
      !isPublic && (
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
    )
  }, [projectTemplates, dispatchForm, members, isPublic])

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const name = 'name'
    if (value) {
      dispatchForm(createSearchAction(name, value, SearchType.REGEX))
    } else {
      dispatchForm({ name, type: SearchActionKey.REMOVE })
    }
  }

  return (
    <Container>
      <SearchInput onChange={onChange} type="text" placeholder="Name..." />
      {pickers}
    </Container>
  )
}

export default ContentSearch
