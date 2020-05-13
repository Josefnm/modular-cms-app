import React, { FC, useEffect, useMemo } from 'react'
import { BsPuzzle } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import * as actions from '../../../store/actions'
import { SearchInput, TableContainer } from './styled'
import { useThunkDispatch } from '../../../hooks/redux'
import { formatTimestamp } from '../../../utils/timeUtils'
import colors from '../../../styles/colors'
import { Heading2 } from '../../../styles/text'
import { BlueSquareButton } from '../../../components/buttons'
import { HeaderPadding, ScreenContainer, SubHeader } from '../../../components/common'
import Table from '../../../components/tables/Table'
import { useTemplateSearch } from '../../../hooks/useTemplateSearch'

type Props = {}

const TemplateScreen: FC<Props> = () => {
  const dispatch = useThunkDispatch()
  useEffect(() => {
    dispatch(actions.getTemplates())
  }, [dispatch])
  const history = useHistory()
  const [templates, searchTemplates] = useTemplateSearch()
  const navigateToCreateTemplate = () => history.push('/templates/create')

  const rowValues = useMemo(() => {
    return templates.map((template, index) => {
      return {
        values: [
          template.name,
          template.description,
          template.templateFields.length.toString(),
          formatTimestamp(template.created),
          template.ownerName,
        ],
      }
    })
  }, [templates])

  const headerValues = ['Name', 'Description', 'Fields', 'Created', 'By']

  return (
    <ScreenContainer>
      <SubHeader>
        <HeaderPadding>
          <BsPuzzle size={40} style={{ color: colors.greenLight }} />
          <Heading2 marginHorizontal={10}>Templates</Heading2>
        </HeaderPadding>
        <SearchInput type="text" onChange={searchTemplates} placeholder="Search..." />
        <HeaderPadding>
          <BlueSquareButton type="button" onClick={navigateToCreateTemplate}>
            Add Template
          </BlueSquareButton>
        </HeaderPadding>
      </SubHeader>
      <TableContainer>
        <Table headerValues={headerValues} bodyValues={rowValues} />
      </TableContainer>
    </ScreenContainer>
  )
}

export default TemplateScreen
