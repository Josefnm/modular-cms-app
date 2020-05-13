import React, { FC, useState } from 'react'
import { CenterContainer } from './styled'
import { Heading1, Heading2 } from '../../styles/text'
import { useSelector } from '../../hooks/redux'
import { BlueSquareButton } from '../../components/buttons'
import CreateProject from '../../components/CreateProject'

type Props = {}

const HomeScreen: FC<Props> = () => {
  const { name } = useSelector(state => state.user.profile)
  const { projects } = useSelector(state => state.project)

  const [createProjectOpen, setCreateProjectOpen] = useState(false)

  return (
    <CenterContainer>
      <Heading1 marginTop={30}>Welcome, {name}</Heading1>
      {projects.length === 0 && (
        <>
          <Heading2 marginVertical={30}>Start by creating a project</Heading2>
          <BlueSquareButton onClick={() => setCreateProjectOpen(true)}>
            Create project
          </BlueSquareButton>
          <Heading2 marginVertical={20}>
            Then create a template to use as a model for your content
          </Heading2>
        </>
      )}
      <CreateProject modalOpen={createProjectOpen} setModalOpen={setCreateProjectOpen} />
    </CenterContainer>
  )
}

export default HomeScreen
