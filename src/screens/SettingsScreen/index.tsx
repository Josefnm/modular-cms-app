import React, { FC, useCallback, useMemo, useState } from 'react'
import { FieldArray, Formik } from 'formik'
import { MdSettings } from 'react-icons/all'
import * as yup from 'yup'
import { FormContainer, Container } from './styled'
import { Heading2, Heading5 } from '../../styles/text'
import { useSelector, useThunkDispatch } from '../../hooks/redux'
import { BlueSquareButton, GreenSquareButton, RedSquareButton } from '../../components/buttons'
import { ProjectForm } from '../../components/CreateProject'
import { HeaderPadding, ScreenContainer, SubHeader } from '../../components/common'
import colors from '../../styles/colors'
import { getSelectedProject } from '../../store/reducers/project.reducers'
import validation from '../../utils/validation'
import FormikField from '../../components/FormikField'
import AddMember from '../../components/AddMember'
import Modal from '../../components/Modal'
import Table from '../../components/tables/Table'
import { UserModel } from '../../store/reducers/user.reducers'
import * as actions from '../../store/actions'

type Props = {}

export type UpdateProjectForm = {
  name: string
  description: string
  members: UserModel[]
}

const SettingsScreen: FC<Props> = () => {
  const project = useSelector(state => getSelectedProject(state))
  const { projects } = useSelector(state => state.project)
  const { members } = useSelector(state => state.project)
  const dispatch = useThunkDispatch()
  const flatMembers = useMemo(() => Object.values(members), [members])

  const usedProjectNames = useMemo(() => {
    return projects.map(proj => proj.name).filter(projName => projName !== project.name)
  }, [projects, project])

  const onSubmit = (form: UpdateProjectForm) => {
    dispatch(actions.updateProject(form))
  }

  const deleteProject = () => {
    dispatch(actions.deleteProject(project.id))
  }

  const [modalOpen, setModalOpen] = useState(false)

  const tableBody = useCallback((users: UserModel[]) => {
    return users.map(user => {
      return { values: [user.name, user.email] }
    })
  }, [])

  return (
    <Formik<UpdateProjectForm>
      enableReinitialize
      initialValues={{
        name: project.name,
        description: project.description,
        members: flatMembers,
      }}
      onSubmit={onSubmit}
      validationSchema={yup.object().shape<ProjectForm>({
        name: validation.uniqueName(usedProjectNames),
        description: validation.description,
      })}
    >
      {({ values }) => (
        <ScreenContainer>
          <FormContainer>
            <SubHeader>
              <HeaderPadding>
                <MdSettings size={40} style={{ color: colors.greenLight }} />
                <Heading2 marginHorizontal={10}>Project settings</Heading2>
              </HeaderPadding>
              <HeaderPadding>
                <BlueSquareButton margin="0 16px" onClick={() => setModalOpen(true)} type="button">
                  Add member
                </BlueSquareButton>
                <RedSquareButton onClick={deleteProject} type="button">
                  Delete project and all its content
                </RedSquareButton>
                <GreenSquareButton type="submit" margin="0 16px">
                  Save
                </GreenSquareButton>
              </HeaderPadding>
            </SubHeader>
            <FieldArray
              name="members"
              render={arrayHelpers => (
                <>
                  <Container>
                    <FormikField name="name" type="text" label="Name" />
                    <FormikField
                      name="description"
                      type="text"
                      label="Description"
                      component="textarea"
                    />
                    <Heading5 marginVertical={15}>Members</Heading5>
                    <Table
                      bodyValues={tableBody(values.members)}
                      headerValues={['Name', 'Email']}
                    />
                  </Container>
                  <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
                    <AddMember
                      setModalOpen={setModalOpen}
                      projectId={project.id}
                      arrayHelpers={arrayHelpers}
                    />
                  </Modal>
                </>
              )}
            />
          </FormContainer>
        </ScreenContainer>
      )}
    </Formik>
  )
}

export default SettingsScreen
