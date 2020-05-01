import { BsPuzzle } from 'react-icons/bs'
import { IconType } from 'react-icons'

export enum DataType {
  FORMATTED_TEXT,
  STRING,
  NUMBER,
  DATE,
  LOCATION,
  MEDIA,
  BOOL,
  MODULE,
}

export type FieldTypes = {
  [dataType in DataType]: FieldType
}
export type FieldType = {
  iconType: IconType
  headerText: string
  bodyText: string
}

export const fieldTypes: FieldTypes = {
  [DataType.FORMATTED_TEXT]: {
    iconType: BsPuzzle,
    headerText: 'Rich text',
    bodyText: 'Text formatting with references and media',
  },
  [DataType.STRING]: {
    iconType: BsPuzzle,
    headerText: 'Text',
    bodyText: 'Titles, names, paragraphs, list of names',
  },
  [DataType.NUMBER]: {
    iconType: BsPuzzle,
    headerText: 'Number',
    bodyText: 'ID, order number, rating, quantity',
  },
  [DataType.DATE]: {
    iconType: BsPuzzle,
    headerText: 'Date and time',
    bodyText: 'Event dates',
  },
  [DataType.LOCATION]: {
    iconType: BsPuzzle,
    headerText: 'Location',
    bodyText: 'Coordinates: latitude and longitude',
  },
  [DataType.MEDIA]: {
    iconType: BsPuzzle,
    headerText: 'Media',
    bodyText: 'Images, videos, PDFs and other files',
  },
  [DataType.BOOL]: {
    iconType: BsPuzzle,
    headerText: 'Boolean',
    bodyText: 'Yes or no, 1 or 0, true or false',
  },
  [DataType.MODULE]: {
    iconType: BsPuzzle,
    headerText: 'Reference',
    bodyText: 'For example, a blog post can reference its author(s)',
  },
}

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
