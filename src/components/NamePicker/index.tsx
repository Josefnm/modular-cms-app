import React, { Dispatch, FC, SetStateAction } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { ButtonContainer, Container, StyledForm } from './styled'
import validation from '../../utils/validation'
import FormikField from '../FormikField'
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

const NamePicker: FC<Props> = ({ usedNames, setModalOpen, setTitle, title }) => {
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
          name: validation.uniqueName(usedNames),
          description: validation.description,
        })}
      >
        {({ isValid }) => (
          <StyledForm>
            <FormikField name="name" type="text" label="Name" />
            <FormikField name="description" type="text" label="Description" component="textarea" />
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
