import { BsPuzzle } from 'react-icons/bs'
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
    iconType: BsPuzzle,
    headerText: 'Rich text',
    bodyText: 'Text formatting with references and media',
    type: DataType.TEXT,
  },
  {
    iconType: BsPuzzle,
    headerText: 'Text',
    bodyText: 'Titles, names, paragraphs, list of names',
    type: DataType.STRING,
  },
  {
    iconType: BsPuzzle,
    headerText: 'Number',
    bodyText: 'ID, order number, rating, quantity',
    type: DataType.NUMBER,
  },
  {
    iconType: BsPuzzle,
    headerText: 'Date and time',
    bodyText: 'Event dates',
    type: DataType.DATE,
  },
  {
    iconType: BsPuzzle,
    headerText: 'Image',
    bodyText: 'Jpg, gif, png',
    type: DataType.IMAGE,
  },
  {
    iconType: BsPuzzle,
    headerText: 'Boolean',
    bodyText: 'Yes or no, 1 or 0, true or false',
    type: DataType.BOOL,
  },
  {
    iconType: BsPuzzle,
    headerText: 'Reference',
    bodyText: 'For example, a blog post can reference its author(s)',
    type: DataType.MODULE,
  },
]

/* {
    iconType: BsPuzzle,
    headerText: 'Text',
    bodyText: 'Titles, names, paragraphs, list of names',
    dataType: DataType.STRING,
  },
  {
    iconType: BsPuzzle,
    headerText: 'Number',
    bodyText: 'ID, order number, rating, quantity',
    dataType: DataType.NUMBER,
  },
  {
    iconType: BsPuzzle,
    headerText: 'Date and time',
    bodyText: 'Event dates',
    dataType: DataType.DATE,
  },
  {
    iconType: BsPuzzle,
    headerText: 'Location',
    bodyText: 'Coordinates: latitude and longitude',
    dataType: DataType.LOCATION,
  },
  {
    iconType: BsPuzzle,
    headerText: 'Media',
    bodyText: 'Images, videos, PDFs and other files',
    dataType: DataType.MEDIA,
  },
  {
    iconType: BsPuzzle,
    headerText: 'Boolean',
    bodyText: 'Yes or no, 1 or 0, true or false',
    dataType: DataType.BOOL,
  },
  {
    iconType: BsPuzzle,
    headerText: 'Reference',
    bodyText: 'For example, a blog post can reference its author(s)',
    dataType: DataType.MODULE,
  },
]
*/
