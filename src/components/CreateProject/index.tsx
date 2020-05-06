import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { Container, StyledForm } from './styled'
import validation from '../../utils/validation'
import FormField from '../FormField'
import { GreenSquareButton, SquareButton } from '../buttons'
import ModalHeader from '../ModalHeader'
import Modal from '../Modal'
import { RowContainer } from '../common'
import * as actions from '../../store/actions'
import { useThunkDispatch } from '../../hooks/redux'

export type ProjectForm = {
  name: string
  description?: string
}

type Props = {
  modalOpen: boolean
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const CreateProject: FunctionComponent<Props> = ({ modalOpen, setModalOpen }) => {
  const dispatch = useThunkDispatch()
  const history = useHistory()

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
            name: validation.fieldName([]),
            description: validation.description,
          })}
        >
          {({ isValid }) => (
            <StyledForm>
              <FormField name="name" type="text" label="Name" />
              <FormField name="description" type="text" label="Description" component="textarea" />
              <RowContainer>
                <GreenSquareButton disabled={!isValid} type="submit" margin="0 16px 0 0">
                  Save
                </GreenSquareButton>
                <SquareButton onClick={() => setModalOpen(false)}>Cancel</SquareButton>
              </RowContainer>
            </StyledForm>
          )}
        </Formik>
      </Container>
    </Modal>
  )
}

export default CreateProject
