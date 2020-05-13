import {
  BsHash,
  BsImage,
  BsLink,
  GoCalendar,
  MdCheckBox,
  MdTextFields,
  TiDocumentText,
} from 'react-icons/all'
import { IconType } from 'react-icons'

export type FieldType = {
  iconType: IconType
  headerText: string
  bodyText: string
  type: string
}

export enum DataType {
  TEXT = 'TextField',
  STRING = 'StringField',
  NUMBER = 'NumberField',
  DATE = 'DateField',
  IMAGE = 'ImageField',
  BOOL = 'BooleanField',
  MODULE = 'ModuleField',
}

export const fieldTypes: FieldType[] = [
  {
    iconType: TiDocumentText,
    headerText: 'Rich text',
    bodyText: 'Text formatting with references and media',
    type: DataType.TEXT,
  },
  {
    iconType: MdTextFields,
    headerText: 'Text',
    bodyText: 'Titles, names, paragraphs, list of names',
    type: DataType.STRING,
  },
  {
    iconType: BsHash,
    headerText: 'Number',
    bodyText: 'ID, order number, rating, quantity',
    type: DataType.NUMBER,
  },
  {
    iconType: GoCalendar,
    headerText: 'Date and time',
    bodyText: 'Event dates',
    type: DataType.DATE,
  },
  {
    iconType: BsImage,
    headerText: 'Image',
    bodyText: 'Jpg, gif, png',
    type: DataType.IMAGE,
  },
  {
    iconType: MdCheckBox,
    headerText: 'Boolean',
    bodyText: 'Yes or no, true or false',
    type: DataType.BOOL,
  },
  {
    iconType: BsLink,
    headerText: 'Reference',
    bodyText: 'Reference to another content document',
    type: DataType.MODULE,
  },
]
