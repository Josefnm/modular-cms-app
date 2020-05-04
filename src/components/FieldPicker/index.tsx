import React, { Dispatch, FunctionComponent, SetStateAction, useCallback, useState } from 'react'
import { Container, FieldContainer } from './styled'
import FieldType from './FieldType'
import { DataType, fieldTypes } from '../../models/dataType'
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
    return Object.entries(fieldTypes).map(([type, fieldValue]) => {
      return (
        <FieldType
          key={type}
          onClick={onChooseType(DataType[type])}
          iconType={fieldValue.iconType}
          bodyText={fieldValue.bodyText}
          headerText={fieldValue.headerText}
        />
      )
    })
  }, [])

  const [dataType, setDatatype] = useState<DataType>(undefined)

  const onChooseType = (type: DataType) => () => setDatatype(type)

  const onSubmit = (values: FieldTypeForm) => {
    setModalOpen(false)
    pushField({ name: values.fieldName, dataType })
  }

  const typeChosen = dataType !== undefined

  const headerText = typeChosen
    ? `New ${fieldTypes[DataType[dataType]].headerText.toLowerCase()} field`
    : 'Add new field'

  return (
    <Container>
      <ModalHeader>{headerText}</ModalHeader>
      <FieldContainer>
        {!typeChosen ? (
          fields()
        ) : (
          <FieldForm usedNames={usedNames} onSubmit={onSubmit} setDataType={setDatatype} />
        )}
      </FieldContainer>
    </Container>
  )
}

export default FieldPicker
