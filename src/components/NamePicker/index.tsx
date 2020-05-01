import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { Container, FieldContainer } from './styled'
import validation from '../../utils/validation'
import { ButtonContainer, StyledForm } from '../FieldPicker/styled'
import FormField from '../FormField'
import { GreenSquareButton, SquareButton } from '../buttons'
import { TemplateForm } from '../../screens/templates/CreateTemplateScreen'
import ModalHeader from '../ModalHeader'

type TitleForm = {
  name: string
  description: string
}

type OwnProps = {
  usedNames: string[]
  setModalOpen: Dispatch<SetStateAction<boolean>>
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  values: TemplateForm
}

type Props = OwnProps

const NamePicker: FunctionComponent<Props> = ({
  usedNames,
  setModalOpen,
  setFieldValue,
  values,
}) => {
  const onSubmit = (title: TitleForm) => {
    setFieldValue('name', title.name, false)
    setFieldValue('description', title.description, false)
    setModalOpen(false)
  }

  const history = useHistory()

  const cancel = () => {
    setModalOpen(false)
    history.push('/templates')
  }

  return (
    <Container>
      <ModalHeader>Create new content type</ModalHeader>
      <FieldContainer>
        <Formik<TitleForm>
          initialValues={{
            name: values.name,
            description: values.description,
          }}
          onSubmit={onSubmit}
          validationSchema={yup.object().shape({
            name: validation.fieldName(usedNames),
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
      </FieldContainer>
    </Container>
  )
}

export default NamePicker
