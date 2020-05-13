import { SearchAction, SearchActionKey } from '../hooks/useContentSearch'

export type SearchFieldType = {
  createSearchAction: (name: string, id: string, valueName: string) => SearchAction
  headerText: string
  bodyText: string
  type: string
}


/*
  TEXT = 'BooleanSearch',
  CREATED = 'CreatedSearch',
  DATE = 'DateSearch',
  MODULE = 'ModuleSearch',
  NAME = 'NameSearch',
  NUMBER = 'NumberSearch',
  PUBLIC = 'PublicSearch',
  STRING = 'StringSearch',
  TEMPLATE = 'TemplateSearch',
 */
