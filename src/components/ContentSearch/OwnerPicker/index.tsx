import React, { Dispatch, FC, useCallback, useMemo, useState } from 'react'
import { MenuButton } from './styled'

import { SearchAction, SearchActionKey } from '../../../hooks/useContentSearch'
import SearchMenu from '../SearchMenu'
import { useSelector } from '../../../hooks/redux'
import { SearchType } from '../utils'

type Props = {
  dispatchForm: Dispatch<SearchAction>
}

const name = 'templateId'

const TemplatePicker: FC<Props> = ({ dispatchForm }) => {
  const { projectTemplates } = useSelector(state => state.template)
  const [chosenValueName, setChosenValueName] = useState('any')

  const selectTemplate = useCallback(
    (searchAction: SearchAction, pickerName: string) => {
      dispatchForm(searchAction)
      setChosenValueName(pickerName)
    },
    [dispatchForm]
  )

  const menuButtons = useMemo(() => {
    const values = projectTemplates.map(template => {
      const data = { name, type: SearchType.EXACT, parameters: template.id }
      const action = { name, type: SearchActionKey.SET, data }
      return (
        <MenuButton key={template.id} onClick={() => selectTemplate(action, template.name)}>
          {template.name}
        </MenuButton>
      )
    })
    values.unshift(
      <MenuButton
        key="any"
        onClick={() => selectTemplate({ name, type: SearchActionKey.REMOVE }, 'Any')}
      >
        Any
      </MenuButton>
    )
    return values
  }, [projectTemplates, selectTemplate])

  return (
    <SearchMenu title="template" chosenValueName={chosenValueName}>
      {menuButtons}
    </SearchMenu>
  )
}

export default TemplatePicker
