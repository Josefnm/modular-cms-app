import React, { FC, useEffect, useMemo, useState } from 'react'
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
import Table from '../../../components/tables/Table'
import { useClickedOutside } from '../../../hooks/useClickOutside'
import ContentSearch from '../../../components/ContentSearch'
import { useContentSearch } from '../../../hooks/useContentSearch'
import Modal from '../../../components/Modal'
import ContentView from '../ContentView'
import { ContentModel } from '../../../store/reducers/content.reducers'

type Props = {}

const ContentScreen: FC<Props> = () => {
  const { projectTemplates } = useSelector(state => state.template)
  const { selectedProject } = useSelector(state => state.project)
  const [contents, dispatchForm, setSelectedProject] = useContentSearch(selectedProject)
  useEffect(() => {
    setSelectedProject(selectedProject)
  }, [selectedProject, setSelectedProject])
  const dispatch = useThunkDispatch()
  const history = useHistory()

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedContent, setSelectedContent] = useState<ContentModel>(undefined)

  const [menuOpen, setOpen, wrapperRef] = useClickedOutside()

  useEffect(() => {
    dispatch(actions.getContent())
    dispatch(actions.getTemplates())
  }, [dispatch])

  const access = (isPublic: boolean) => (isPublic ? 'Public' : 'Private')

  const bodyValues = useMemo(() => {
    return contents.map(content => {
      return {
        onClick: () => {
          setSelectedContent(content)
          setModalOpen(true)
        },
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
        <ContentSearch dispatchForm={dispatchForm} />
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
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
        <ContentView content={selectedContent} />
      </Modal>
    </ScreenContainer>
  )
}

export default ContentScreen
