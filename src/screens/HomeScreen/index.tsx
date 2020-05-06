import React, { FunctionComponent, useState } from 'react'
import { CenterContainer } from './styled'
import { Heading1, Heading2 } from '../../styles/text'
import { useSelector } from '../../hooks/redux'
import { BlueSquareButton } from '../../components/buttons'
import CreateProject from '../../components/CreateProject'

type Props = {}

const HomeScreen: FunctionComponent<Props> = () => {
  const { userName } = useSelector(state => state.user.profile)
  const { projects } = useSelector(state => state.project)

  const [createProjectOpen, setCreateProjectOpen] = useState(false)

  return (
    <CenterContainer>
      <Heading1>Welcome, {userName}</Heading1>
      {projects.length === 0 && (
        <>
          <Heading2 marginVertical={20}>Start by creating a project</Heading2>
          <BlueSquareButton onClick={() => setCreateProjectOpen(true)}>
            Create project
          </BlueSquareButton>
        </>
      )}
      <CreateProject modalOpen={createProjectOpen} setModalOpen={setCreateProjectOpen} />
    </CenterContainer>
  )
}

export default HomeScreen
