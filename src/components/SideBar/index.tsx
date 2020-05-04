import React, { FunctionComponent, useCallback, useState } from 'react'
import { Container, NavBarButton, Overlay, RowContainer, SideArea } from './styled'
import { Heading3, Heading4 } from '../../styles/text'
import { LinkButton } from '../buttons'
import { getSelectedProject } from '../../store/reducers/project.reducers'
import CreateProject from '../CreateProject'
import SelectProject from './SelectProject'
import { useSelector } from '../../hooks/redux'

type Props = {}

const SideBar: FunctionComponent<Props> = () => {
  const selectedProject = useSelector(state => getSelectedProject(state))
  const projects = useSelector(state => state.project.projects)
  const [sidebarOpen, setSideBarOpen] = useState(false)
  const [createProjectOpen, setCreateProjectOpen] = useState(false)

  const onCreateClick = () => {
    setCreateProjectOpen(true)
    setSideBarOpen(false)
  }

  const mapProjects = useCallback(() => {
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
        <Heading3 white>{selectedProject.name || ''}</Heading3>
      </NavBarButton>
      {sidebarOpen && (
        <>
          <Container>
            <SideArea>
              <RowContainer>
                <Heading4>Projects</Heading4>
                <LinkButton onClick={onCreateClick}>+ Create project</LinkButton>
              </RowContainer>
              {mapProjects()}
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
