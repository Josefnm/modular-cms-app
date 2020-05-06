import React, { FunctionComponent, useState } from 'react'
import { CenterContainer } from './styled'
import {  Heading2 } from '../../styles/text'
import { useSelector } from '../../hooks/redux'
import { BlueSquareButton } from '../../components/buttons'
import CreateProject from '../../components/CreateProject'
import { SubHeader } from '../../components/common'

type Props = {}

const SettingsScreen: FunctionComponent<Props> = () => {
  const { userName } = useSelector(state => state.user.profile)
  const { projects } = useSelector(state => state.project)

  const [createProjectOpen, setCreateProjectOpen] = useState(false)

  return (
    <CenterContainer>
      <SubHeader>Welcome, {userName}</SubHeader>
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

export default SettingsScreen
