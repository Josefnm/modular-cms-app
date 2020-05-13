import React, { FunctionComponent, useCallback, useEffect, useMemo } from 'react'
import { BsPuzzle } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import * as actions from '../../../store/actions'
import { TableContainer } from './styled'
import { useSelector, useThunkDispatch } from '../../../hooks/redux'
import { formatTimestamp } from '../../../utils/timeUtils'
import colors from '../../../styles/colors'
import { Heading2 } from '../../../styles/text'
import { BlueSquareButton } from '../../../components/buttons'
import { HeaderPadding, ScreenContainer, SubHeader } from '../../../components/common'
import Table from '../../../components/Table'

type Props = {}

const TemplateScreen: FunctionComponent<Props> = () => {
  const { projectTemplates } = useSelector(state => state.template)
  const userId = useSelector(state => state.user.profile.id)
  const dispatch = useThunkDispatch()
  const history = useHistory()

  const navigateToCreateTemplate = () => history.push('/templates/create')

  useEffect(() => {
    dispatch(actions.getTemplates())
  }, [dispatch])

  const ownerName = useCallback(
    (ownerId: string) => {
      return userId === ownerId ? 'Me' : ownerId
    },
    [userId]
  )

  const rowValues = useMemo(() => {
    return projectTemplates.map((template, index) => {
      return {
        values: [
          template.name,
          template.description,
          template.templateFields.length.toString(),
          formatTimestamp(template.created),
          ownerName(template.ownerId),
        ],
      }
    })
  }, [ownerName, projectTemplates])

  const headerValues = ['Name', 'Description', 'Fields', 'Created', 'By']

  return (
    <ScreenContainer>
      <SubHeader>
        <HeaderPadding>
          <BsPuzzle size={40} style={{ color: colors.greenLight }} />
          <Heading2 marginHorizontal={10}>Templates</Heading2>
        </HeaderPadding>
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
