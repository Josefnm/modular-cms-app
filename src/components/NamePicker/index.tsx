import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { ButtonContainer, Container, StyledForm } from './styled'
import validation from '../../utils/validation'
import FormField from '../FormField'
import { GreenSquareButton, SquareButton } from '../buttons'
import ModalHeader from '../ModalHeader'

export type TitleForm = {
  name: string
  description: string
}

type Props = {
  usedNames: string[]
  setModalOpen: Dispatch<SetStateAction<boolean>>
  setTitle: Dispatch<SetStateAction<TitleForm>>
  title: TitleForm
}

const NamePicker: FunctionComponent<Props> = ({ usedNames, setModalOpen, setTitle, title }) => {
  const history = useHistory()

  const onSubmit = (form: TitleForm) => {
    setTitle(form)
    setModalOpen(false)
  }

  const cancel = () => {
    setModalOpen(false)
    history.push('/templates')
  }

  return (
    <Container>
      <ModalHeader>Create new content type</ModalHeader>
      <Formik<TitleForm>
        initialValues={{
          name: title.name,
          description: title.description,
        }}
        onSubmit={onSubmit}
        validationSchema={yup.object().shape<TitleForm>({
          name: validation.fieldName(usedNames),
          description: validation.description,
        })}
      >
        {({ isValid }) => (
          <StyledForm>
            <FormField name="name" type="text" label="Name" />
            <FormField name="description" type="text" label="Description" component="textarea" />
            <ButtonContainer>
              <GreenSquareButton disabled={!isValid} type="submit" margin="0 16px 0 0">
                Save
              </GreenSquareButton>
              <SquareButton onClick={cancel}>Cancel</SquareButton>
            </ButtonContainer>
          </StyledForm>
        )}
      </Formik>
    </Container>
  )
}

export default NamePicker
