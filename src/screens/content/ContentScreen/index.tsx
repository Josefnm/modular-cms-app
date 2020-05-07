import React, { FunctionComponent, useCallback, useEffect, useMemo, useRef } from 'react'
import { BsPuzzle } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import {
  ButtonContainer,
  Container,
  Menu,
  MenuButton,
  MenuContainer,
  TableContainer,
} from './styled'
import { HeaderPadding, SubHeader } from '../../../components/common'
import colors from '../../../styles/colors'
import { Heading2, Heading4 } from '../../../styles/text'
import { BlueSquareButton } from '../../../components/buttons'
import { formatTimestamp } from '../../../utils/timeUtils'
import * as actions from '../../../store/actions'
import { useSelector, useThunkDispatch } from '../../../hooks/redux'
import Table from '../../../components/Table'
import { useClickedOutside } from '../../../hooks/useClickOutside'

type Props = {}

const ContentScreen: FunctionComponent<Props> = () => {
  const { projectContent } = useSelector(state => state.content)
  const { projectTemplates } = useSelector(state => state.template)
  const userId = useSelector(state => state.user.profile.id)
  const dispatch = useThunkDispatch()
  const history = useHistory()
  const wrapperRef = useRef(null)

  const [menuOpen, setMenuOpen] = useClickedOutside(wrapperRef)

  useEffect(() => {
    dispatch(actions.getContent())
    dispatch(actions.getTemplates())
  }, [dispatch])

  const ownerName = useCallback(
    (ownerId: string) => {
      return userId === ownerId ? 'Me' : ownerId
    },
    [userId]
  )

  const templateName = useCallback(
    (templateId: string) => {
      const temp = projectTemplates.find(template => template.id === templateId)
      return temp ? temp.name : ''
    },
    [projectTemplates]
  )

  const access = (isPublic: boolean) => (isPublic ? 'Public' : 'Private')

  const rowValues = useMemo(() => {
    return projectContent.map(content => {
      return {
        values: [
          content.name,
          templateName(content.templateId),
          ownerName(content.ownerId),
          formatTimestamp(content.created),
          access(content.isPublic),
        ],
      }
    })
  }, [ownerName, projectContent, templateName])

  const listValues = useMemo(() => {
    return projectTemplates.map(template => (
      <MenuButton
        key={template.name}
        onClick={() => history.push(`/content/create/${template.id}`)}
        width={200}
      >
        {template.name}
      </MenuButton>
    ))
  }, [projectTemplates, history])

  const headerValues = ['Name', 'Template', 'Author', 'Created', 'Access']

  return (
    <Container>
      <SubHeader>
        <HeaderPadding>
          <BsPuzzle size={40} style={{ color: colors.greenLight }} />
          <Heading2 marginHorizontal={10}>Content</Heading2>
        </HeaderPadding>
        <ButtonContainer>
          <BlueSquareButton width={150} type="button" onClick={() => setMenuOpen(true)}>
            Add Content
          </BlueSquareButton>
          <MenuContainer>
            <Menu ref={wrapperRef} isOpen={menuOpen}>
              {menuOpen && (
                <>
                  <Heading4 marginVertical={10} marginLeft={25}>
                    Templates
                  </Heading4>
                  {listValues}
                </>
              )}
            </Menu>
          </MenuContainer>
        </ButtonContainer>
      </SubHeader>
      <TableContainer>
        <Table headerValues={headerValues} bodyValues={rowValues} />
      </TableContainer>
    </Container>
  )
}

export default ContentScreen
