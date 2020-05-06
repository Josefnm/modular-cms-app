import React, { FunctionComponent, useEffect, useMemo, useState } from 'react'
import { MdMenu } from 'react-icons/all'
import { Container, NavBarButton, Overlay, RowContainer, SideArea } from './styled'
import { Heading2, Heading4 } from '../../styles/text'
import { LinkButton } from '../buttons'
import { getSelectedProject } from '../../store/reducers/project.reducers'
import CreateProject from '../CreateProject'
import SelectProject from './SelectProject'
import { useSelector, useThunkDispatch } from '../../hooks/redux'
import * as actions from '../../store/actions'

type Props = {}

const SideBar: FunctionComponent<Props> = () => {
  const selectedProject = useSelector(state => getSelectedProject(state))
  const { projects } = useSelector(state => state.project)
  const [sidebarOpen, setSideBarOpen] = useState(false)
  const [createProjectOpen, setCreateProjectOpen] = useState(false)
  const dispatch = useThunkDispatch()

  useEffect(() => {
    if (sidebarOpen) {
      dispatch(actions.getProjects())
    }
  }, [sidebarOpen, dispatch])

  const onCreateClick = () => {
    setCreateProjectOpen(true)
    setSideBarOpen(false)
  }

  const mapProjects = useMemo(() => {
    return projects.map(project => {
      const isSelected = project.id === selectedProject.id
      return (
        <SelectProject
          key={project.id}
          project={project}
          setModalOpen={setSideBarOpen}
          isSelected={isSelected}
        />
      )
    })
  }, [selectedProject, projects])

  return (
    <>
      <NavBarButton type="button" onClick={() => setSideBarOpen(true)}>
        <Heading2 white>{selectedProject.name || ''}</Heading2>
        <MdMenu size={30} />
      </NavBarButton>
      {sidebarOpen && (
        <>
          <Container>
            <SideArea>
              <RowContainer>
                <Heading4>Projects</Heading4>
                <LinkButton onClick={onCreateClick}>+ Create project</LinkButton>
              </RowContainer>
              {mapProjects}
            </SideArea>
            <Overlay onClick={() => setSideBarOpen(false)} />
          </Container>
        </>
      )}
      <CreateProject modalOpen={createProjectOpen} setModalOpen={setCreateProjectOpen} />
    </>
  )
}

export default SideBar
