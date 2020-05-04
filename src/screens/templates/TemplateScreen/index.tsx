import React, { FunctionComponent, useCallback, useEffect } from 'react'
import * as actions from '../../../store/actions'
import { Container, HeaderTableCell, StyledTable, TableCell, TemplateTableHeader } from './styled'
import { useSelector, useThunkDispatch } from '../../../hooks/redux'

type Props = {}

const TemplateScreen: FunctionComponent<Props> = () => {
  const userTemplates = useSelector(state => state.template.userTemplates)
  const userId = useSelector(state => state.user.profile.id)
  const dispatch = useThunkDispatch()
  useEffect(() => {
    dispatch(actions.getTemplates())
  }, [dispatch])

  const ownerName = useCallback(
    (ownerId: string) => {
      return userId === ownerId ? 'Me' : ownerId
    },
    [userId]
  )

  const templates = useCallback(() => {
    return userTemplates.map((template, index) => (
      <tr key={template.id}>
        <TableCell>{template.name}</TableCell>
        <TableCell>{template.description}</TableCell>
        <TableCell>{template.templateFields.length}</TableCell>
        <TableCell>{template.created}</TableCell>
        <TableCell>{ownerName(template.ownerId)}</TableCell>
      </tr>
    ))
  }, [ownerName, userTemplates])

  return (
    <Container>
      <StyledTable>
        <TemplateTableHeader>
          <tr>
            <HeaderTableCell>Name</HeaderTableCell>
            <HeaderTableCell>Description</HeaderTableCell>
            <HeaderTableCell>Fields</HeaderTableCell>
            <HeaderTableCell>Created</HeaderTableCell>
            <HeaderTableCell>By</HeaderTableCell>
          </tr>
        </TemplateTableHeader>
        <tbody>{templates()}</tbody>
      </StyledTable>
    </Container>
  )
}

export default TemplateScreen
