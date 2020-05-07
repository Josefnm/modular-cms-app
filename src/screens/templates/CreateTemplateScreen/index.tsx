import React, { FunctionComponent, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { BsPuzzle } from 'react-icons/bs'
import * as yup from 'yup'
import { FieldArray, FieldArrayRenderProps, Formik } from 'formik'
import { useHistory } from 'react-router-dom'
import { MainState } from '../../../store/reducers'
import * as actions from '../../../store/actions'
import { TemplateFieldModel, TemplateModel } from '../../../store/reducers/template.reducers'
import { StyledErrorMessage, StyledForm } from './styled'
import {
  BlueSquareButton,
  GreenSquareButton,
  LinkButton,
  RedSquareButton,
  SquareButton,
} from '../../../components/buttons'
import colors from '../../../styles/colors'
import { Heading2, Heading5 } from '../../../styles/text'
import Modal from '../../../components/Modal'
import FieldPicker from '../../../components/FieldPicker'
import validation from '../../../utils/validation'
import TemplateField from '../../../components/TemplateField'
import NamePicker, { TitleForm } from '../../../components/NamePicker'
import { useThunkDispatch } from '../../../hooks/redux'
import { HeaderPadding, SubHeader } from '../../../components/common'

export type TemplateForm = {
  templateFields: TemplateFieldModel[]
}

type Props = {}

const CreateTemplateScreen: FunctionComponent<Props> = () => {
  const history = useHistory()
  const dispatch = useThunkDispatch()

  const projectTemplates = useSelector((state: MainState) => state.template.projectTemplates)

  const [fieldPickerOpen, setFieldPickerOpen] = useState(false)
  const [createTemplateOpen, setCreateTemplateOpen] = useState(true)
  const [templateTitle, setTemplateTitle] = useState<TitleForm>({
    name: '',
    description: '',
  })

  const onSubmit = async (form: TemplateForm) => {
    const template: TemplateModel = {
      projectId: 'placeholder',
      ...templateTitle,
      ...form,
    }
    await dispatch(actions.createTemplate(template))
    navigateToTemplates()
  }
  const navigateToTemplates = () => history.push('/templates')

  const usedTemplateNames = useCallback(() => {
    return projectTemplates.map(ut => ut.name)
  }, [projectTemplates])

  const templateFields = (values: TemplateFieldModel[], arrayHelpers: FieldArrayRenderProps) => {
    return values.map((templateField, index) => (
      <TemplateField
        key={templateField.name}
        index={index}
        arrayHelpers={arrayHelpers}
        templateField={templateField}
      />
    ))
  }
  return (
    <Formik<TemplateForm>
      initialValues={{
        templateFields: [],
      }}
      onSubmit={onSubmit}
      validationSchema={yup.object().shape({
        templateFields: validation.fieldArray,
      })}
    >
      {({ values }) => (
        <FieldArray
          name="templateFields"
          render={arrayHelpers => (
            <>
              <StyledForm>
                <SubHeader>
                  <HeaderPadding>
                    <BsPuzzle size={40} style={{ color: colors.greenLight }} />
                    <Heading2 marginHorizontal={10}>{templateTitle.name || 'Untitled'}</Heading2>
                    <Heading5 marginHorizontal={10}>{templateTitle.description}</Heading5>
                    <LinkButton onClick={() => setCreateTemplateOpen(true)} type="button">
                      Edit
                    </LinkButton>
                  </HeaderPadding>
                  <HeaderPadding>
                    <BlueSquareButton type="button" onClick={() => setFieldPickerOpen(true)}>
                      Add field
                    </BlueSquareButton>
                    <GreenSquareButton type="submit" margin="0 16px">
                      Save
                    </GreenSquareButton>
                    <SquareButton type="button">Cancel</SquareButton>
                    <RedSquareButton margin="0 16px" type="button">
                      Delete
                    </RedSquareButton>
                  </HeaderPadding>
                </SubHeader>

                <div style={{ paddingTop: '30px' }}>
                  {templateFields(values.templateFields, arrayHelpers)}
                  <StyledErrorMessage name="templateFields" component="div" />
                </div>
              </StyledForm>
              <Modal isOpen={fieldPickerOpen} setIsOpen={setFieldPickerOpen}>
                <FieldPicker
                  setModalOpen={setFieldPickerOpen}
                  pushField={arrayHelpers.push}
                  usedNames={values.templateFields.map(field => field.name)}
                />
              </Modal>
              <Modal
                isOpen={createTemplateOpen}
                setIsOpen={setCreateTemplateOpen}
                onClose={navigateToTemplates}
              >
                <NamePicker
                  setModalOpen={setCreateTemplateOpen}
                  usedNames={usedTemplateNames()}
                  setTitle={setTemplateTitle}
                  title={templateTitle}
                />
              </Modal>
            </>
          )}
        />
      )}
    </Formik>
  )
}

export default CreateTemplateScreen
