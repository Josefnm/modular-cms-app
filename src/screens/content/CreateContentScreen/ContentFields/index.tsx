import React, { FC, useMemo } from 'react'

import { FieldContainer } from './styled'
import { TemplateFieldModel } from '../../../../store/reducers/template.reducers'
import TextField from '../fieldEditors/TextField'
import StringField from '../fieldEditors/StringField'
import { DataType } from '../../../../models/dataType'
import ImageField from '../fieldEditors/ImageField'
import BoolField from '../fieldEditors/BoolField'
import DateField from '../fieldEditors/DateField'
import ModuleField from '../fieldEditors/ModuleField'

type Props = {
  templateFields: TemplateFieldModel[]
}

const ContentFields: FC<Props> = ({ templateFields }) => {
  const formFields = useMemo(() => {
    return templateFields.map(templateField => {
      switch (templateField.dataType) {
        case DataType.STRING:
          return <StringField key={templateField.name} name={templateField.name} />
        case DataType.TEXT:
          return <TextField key={templateField.name} field={templateField.name} />
        case DataType.NUMBER:
          return <StringField key={templateField.name} name={templateField.name} />
        case DataType.DATE:
          return <DateField key={templateField.name} name={templateField.name} />
        case DataType.IMAGE:
          return <ImageField key={templateField.name} name={templateField.name} />
        case DataType.BOOL:
          return <BoolField key={templateField.name} name={templateField.name} />
        case DataType.MODULE:
          return <ModuleField key={templateField.name} name={templateField.name} />
        default:
          return null
      }
    })
  }, [templateFields])

  return <FieldContainer>{formFields}</FieldContainer>
}

export default ContentFields
