import moment from 'moment'
import { ContentForm } from './index'
import { ContentFieldModel } from '../../../store/reducers/content.reducers'
import { TemplateFieldModel } from '../../../store/reducers/template.reducers'
import { DataType } from '../../../models/dataType'

export const generateContentFields = (
  form: ContentForm,
  templateFields: TemplateFieldModel[]
): ContentFieldModel[] => {
  return templateFields.map(tf => {
    return { data: form[tf.name], name: tf.name, type: tf.dataType }
  })
}

export const templateFieldNames = (templateFields: TemplateFieldModel[]) => {
  return templateFields.reduce((obj, tf) => {
    const initVal = tf.dataType === DataType.DATE ? new Date() : ''
    return { ...obj, [tf.name]: initVal }
  }, {} as { [name: string]: string })
}
