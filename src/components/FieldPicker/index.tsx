import React, { Dispatch, FunctionComponent, SetStateAction, useCallback, useState } from 'react'
import { Container, FieldContainer } from './styled'
import FieldTypeCard from './FieldType'
import { FieldType, fieldTypes } from '../../models/dataType'
import { TemplateFieldModel } from '../../store/reducers/template.reducers'
import FieldForm from '../FieldForm'
import ModalHeader from '../ModalHeader'

type FieldTypeForm = {
  fieldName: string
}

type Props = {
  pushField: (fieldModel: TemplateFieldModel) => void
  usedNames: string[]
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const FieldPicker: FunctionComponent<Props> = ({ pushField, usedNames, setModalOpen }) => {
  const fields = useCallback(() => {
    return fieldTypes.map((fieldType, index) => {
      return (
        <FieldTypeCard
          key={fieldType.type}
          onClick={onChooseType(fieldType)}
          iconType={fieldType.iconType}
          bodyText={fieldType.bodyText}
          headerText={fieldType.headerText}
        />
      )
    })
  }, [])

  const [typeChosen, setTypeChosen] = useState<FieldType>(undefined)

  const onChooseType = (fieldType: FieldType) => () => setTypeChosen(fieldType)

  const onSubmit = (values: FieldTypeForm) => {
    setModalOpen(false)
    pushField({ name: values.fieldName, dataType: typeChosen.type })
  }

  const headerText = typeChosen
    ? `New ${typeChosen.headerText.toLowerCase()} field`
    : 'Add new field'

  return (
    <Container>
      <ModalHeader>{headerText}</ModalHeader>
      <FieldContainer>
        {!typeChosen ? (
          fields()
        ) : (
          <FieldForm usedNames={usedNames} onSubmit={onSubmit} setDataType={setTypeChosen} />
        )}
      </FieldContainer>
    </Container>
  )
}

export default FieldPicker
