import React, { Dispatch, FC, SetStateAction, useMemo } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { ButtonContainer, Container, StyledForm } from './styled'
import validation from '../../utils/validation'
import FormikField from '../FormikField'
import { GreenSquareButton, SquareButton } from '../buttons'
import ModalHeader from '../ModalHeader'
import Modal from '../Modal'
import * as actions from '../../store/actions'
import { useSelector, useThunkDispatch } from '../../hooks/redux'

export type ProjectForm = {
  name: string
  description?: string
}

type Props = {
  modalOpen: boolean
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const CreateProject: FC<Props> = ({ modalOpen, setModalOpen }) => {
  const dispatch = useThunkDispatch()
  const history = useHistory()
  const { projects } = useSelector(state => state.project)

  const projectNames = useMemo(() => {
    return projects.map(project => project.name)
  }, [projects])

  const onSubmit = async (form: ProjectForm) => {
    await dispatch(actions.createProject(form))
    setModalOpen(false)
    history.push('/templates')
  }

  return (
    <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
      <Container>
        <ModalHeader>Create new project</ModalHeader>
        <Formik<ProjectForm>
          initialValues={{
            name: '',
            description: '',
          }}
          onSubmit={onSubmit}
          validationSchema={yup.object().shape<ProjectForm>({
            name: validation.uniqueName(projectNames),
            description: validation.description,
          })}
        >
          {({ isValid }) => (
            <StyledForm>
              <FormikField name="name" type="text" label="Name" />
              <FormikField
                name="description"
                type="text"
                label="Description"
                component="textarea"
              />
              <ButtonContainer>
                <GreenSquareButton disabled={!isValid} type="submit" margin="0 16px 0 0">
                  Save
                </GreenSquareButton>
                <SquareButton onClick={() => setModalOpen(false)}>Cancel</SquareButton>
              </ButtonContainer>
            </StyledForm>
          )}
        </Formik>
      </Container>
    </Modal>
  )
}

export default CreateProject
