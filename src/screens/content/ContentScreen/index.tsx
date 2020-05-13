import React, { FC, useEffect, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { RiFileEditLine } from 'react-icons/ri'
import { ButtonContainer, Menu, MenuButton, TableContainer } from './styled'
import { HeaderPadding, ScreenContainer, SubHeader } from '../../../components/common'
import colors from '../../../styles/colors'
import { Heading2, Heading4 } from '../../../styles/text'
import { BlueSquareButton } from '../../../components/buttons'
import { formatTimestamp } from '../../../utils/timeUtils'
import * as actions from '../../../store/actions'
import { useSelector, useThunkDispatch } from '../../../hooks/redux'
import Table from '../../../components/Table'
import { useClickedOutside } from '../../../hooks/useClickOutside'
import ContentSearch from '../../../components/ContentSearch'
import { useContentSearch } from '../../../hooks/useContentSearch'

type Props = {}

const ContentScreen: FC<Props> = () => {
  const [contents, searchForm, dispatchForm] = useContentSearch()
  const { projectTemplates } = useSelector(state => state.template)
  const dispatch = useThunkDispatch()
  const history = useHistory()

  const [menuOpen, setOpen, wrapperRef] = useClickedOutside()

  useEffect(() => {
    dispatch(actions.getContent())
    dispatch(actions.getTemplates())
  }, [dispatch])

  const access = (isPublic: boolean) => (isPublic ? 'Public' : 'Private')

  const bodyValues = useMemo(() => {
    return contents.map(content => {
      return {
        values: [
          content.name,
          content.templateName,
          content.ownerName,
          formatTimestamp(content.created),
          access(content.isPublic),
        ],
      }
    })
  }, [contents])

  const listValues = useMemo(() => {
    return projectTemplates.map(template => (
      <MenuButton
        key={template.name}
        onClick={() => history.push(`/content/create/${template.id}`)}
        width={150}
      >
        {template.name}
      </MenuButton>
    ))
  }, [projectTemplates, history])

  const headerValues = ['Name', 'Template', 'Author', 'Created', 'Access']

  return (
    <ScreenContainer>
      <SubHeader>
        <HeaderPadding>
          <RiFileEditLine size={40} style={{ color: colors.greenLight }} />
          <Heading2 marginHorizontal={10}>Content</Heading2>
        </HeaderPadding>
        <ContentSearch searchForm={searchForm} dispatchForm={dispatchForm} />
        <ButtonContainer ref={wrapperRef}>
          <div>
            <BlueSquareButton width={150} type="button" onClick={() => setOpen(true)}>
              Add Content
            </BlueSquareButton>
            <Menu isOpen={menuOpen}>
              {menuOpen && (
                <>
                  <Heading4 marginVertical={10} marginLeft={25}>
                    Templates
                  </Heading4>
                  {listValues}
                </>
              )}
            </Menu>
          </div>
        </ButtonContainer>
      </SubHeader>
      <TableContainer>
        <Table headerValues={headerValues} bodyValues={bodyValues} />
      </TableContainer>
    </ScreenContainer>
  )
}

export default ContentScreen
