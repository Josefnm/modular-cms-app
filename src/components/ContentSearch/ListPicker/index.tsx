import React, { Dispatch, FC, useCallback, useMemo, useState } from 'react'
import { MenuButton } from './styled'

import { SearchAction, SearchActionKey } from '../../../hooks/useContentSearch'
import SearchMenu from '../SearchMenu'
import { TemplateModel } from '../../../store/reducers/template.reducers'
import { UserModel } from '../../../store/reducers/user.reducers'
import { giantUselessSwitch, SearchType } from '../utils'

type Props = {
  dispatchForm: Dispatch<SearchAction>
  valuesList: TemplateModel[] | UserModel[] | boolean[]
  searchType: SearchType
  valueName: string
  title: string
}

const ListPicker: FC<Props> = ({ searchType, dispatchForm, valuesList, valueName, title }) => {
  const [chosenValueName, setChosenValueName] = useState('any')

  const onSelect = useCallback(
    (searchAction: SearchAction, pickerName: string) => {
      dispatchForm(searchAction)
      setChosenValueName(pickerName)
    },
    [dispatchForm]
  )

  const menuButtons = useMemo(() => {
    const buttons = giantUselessSwitch(searchType, valuesList, onSelect)
    buttons.unshift(
      <MenuButton
        key="any"
        onClick={() => onSelect({ name: valueName, type: SearchActionKey.REMOVE }, 'Any')}
      >
        Any
      </MenuButton>
    )
    return buttons
  }, [onSelect, valueName, valuesList, searchType])

  return (
    <SearchMenu title={title} chosenValueName={chosenValueName}>
      {menuButtons}
    </SearchMenu>
  )
}

export default ListPicker
