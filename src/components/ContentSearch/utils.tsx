import React from 'react'
import { TemplateModel } from '../../store/reducers/template.reducers'
import { UserModel } from '../../store/reducers/user.reducers'
import { MenuButton } from './ListPicker/styled'
import { SearchAction, SearchActionKey } from '../../hooks/useContentSearch'

export enum SearchType {
  EXACT = 'ExactSearch',
  TEMPLATE = 'TemplateSearch',
  AUTHOR = 'AuthorSearch',
  PUBLIC = 'PublicSearch',
  NAME = 'NameSearch',
  REGEX = 'RegexSearch',
}

export const giantUselessSwitch = (
  searchType: SearchType,
  valuesList: Array<any>,
  onSelect: (searchAction: SearchAction, pickerName: string) => void
) => {
  switch (searchType) {
    case SearchType.TEMPLATE:
      return (valuesList as TemplateModel[]).map(({ id, name }) => {
        const action = createSearchAction('templateId', id, SearchType.EXACT)
        return (
          <MenuButton key={id} onClick={() => onSelect(action, name)}>
            {name}
          </MenuButton>
        )
      })
    case SearchType.AUTHOR:
      return (valuesList as UserModel[]).map(({ id, name }) => {
        const action = createSearchAction('ownerId', id, SearchType.EXACT)
        return (
          <MenuButton key={id} onClick={() => onSelect(action, name)}>
            {name}
          </MenuButton>
        )
      })
    case SearchType.PUBLIC:
      return (valuesList as boolean[]).map(bool => {
        const stringBool = bool.toString()
        const action = createSearchAction('isPublic', bool, SearchType.EXACT)
        return (
          <MenuButton key={stringBool} onClick={() => onSelect(action, stringBool)}>
            {stringBool}
          </MenuButton>
        )
      })
    default:
      return null
  }
}

export const createSearchAction = (
  name: string,
  parameters: string | boolean,
  type: SearchType
): SearchAction => {
  const data = { name, type, parameters }
  return { name, type: SearchActionKey.SET, data }
}
