import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import validation from '../../utils/validation'
import FormField from '../FormField'
import { GreenSquareButton, SquareButton } from '../buttons'
import { ButtonContainer, StyledForm } from './styled'
import { FieldType } from '../../models/dataType'

type Props = {
  usedNames: string[]
  onSubmit: (values: FieldTypeForm) => void
  setDataType: Dispatch<SetStateAction<FieldType>>
}

type FieldTypeForm = {
  fieldName: string
}

const FieldForm: FunctionComponent<Props> = ({ usedNames, onSubmit, setDataType }) => {
  return (
    <Formik<FieldTypeForm>
      initialValues={{
        fieldName: '',
      }}
      onSubmit={onSubmit}
      validationSchema={yup.object().shape({
        fieldName: validation.uniqueName(usedNames),
      })}
    >
      {({ isValid }) => (
        <StyledForm>
          <FormField name="fieldName" type="text" label="Name" width={257} />
          <ButtonContainer>
            <GreenSquareButton disabled={!isValid} type="submit" margin="0 16px 0 0">
              Create
            </GreenSquareButton>
            <SquareButton onClick={() => setDataType(undefined)}>Change field type</SquareButton>
          </ButtonContainer>
        </StyledForm>
      )}
    </Formik>
  )
}

export default FieldForm
