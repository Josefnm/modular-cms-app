import React, { Dispatch, FC, SetStateAction } from 'react'
import { ArrowIcon, FolderIcon, ProjectButton, ProjectName } from './styled'
import { ProjectModel } from '../../../store/reducers/project.reducers'
import * as actions from '../../../store/actions'
import { useThunkDispatch } from '../../../hooks/redux'

type Props = {
  project: ProjectModel
  setModalOpen: Dispatch<SetStateAction<boolean>>
  isSelected: boolean
}

const SelectProject: FC<Props> = ({ project, setModalOpen, isSelected }) => {
  const dispatch = useThunkDispatch()
  const onSelect = () => {
    dispatch(actions.selectProject(project.id))
    setModalOpen(false)
  }

  return (
    <ProjectButton onClick={onSelect} isSelected={isSelected}>
      <FolderIcon />
      <ProjectName>{project.name}</ProjectName>
      <ArrowIcon />
    </ProjectButton>
  )
}

export default SelectProject
