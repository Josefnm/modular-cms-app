import React, { FunctionComponent, useMemo } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { useHistory, useParams } from 'react-router-dom'
import { RiFileEditLine } from 'react-icons/ri'
import * as actions from '../../../store/actions'
import { ContentModel } from '../../../store/reducers/content.reducers'
import { FieldContainer, StyledForm } from './styled'
import { GreenSquareButton, SquareButton } from '../../../components/buttons'
import colors from '../../../styles/colors'
import { Heading2, Heading5 } from '../../../styles/text'
import validation, { generateValidators } from '../../../utils/validation'
import { useSelector, useThunkDispatch } from '../../../hooks/redux'
import { HeaderPadding, ScreenContainer, SubHeader } from '../../../components/common'
import { getById } from '../../../store/reducers/template.reducers'
import StringField from './fieldEditors/StringField'
import { generateContentFields, templateFieldNames } from './utils'
import ContentFields from './ContentFields'
import BoolField from './fieldEditors/BoolField'

export type ContentForm = {
  contentName: string
  isPublic: boolean
}

type Props = {}

const CreateContentScreen: FunctionComponent<Props> = () => {
  const history = useHistory()
  const dispatch = useThunkDispatch()

  const projectContent = useSelector(state => state.content.projectContent)

  const { templateId } = useParams()
  const template = useSelector(state => getById(state, templateId))

  const onSubmit = async (form: ContentForm) => {
    const { isPublic, contentName } = form
    const content: ContentModel = {
      projectId: template.projectId,
      templateId,
      contentFields: generateContentFields(form, template.templateFields),
      isPublic,
      name: contentName,
    }
    console.log(content)
    await dispatch(actions.createContent(content))
    navigateToContent()
  }

  const navigateToContent = () => history.push('/content')

  const usedContentNames = useMemo(() => {
    return projectContent.filter(cont => cont.templateId === templateId).map(cont => cont.name)
  }, [projectContent, templateId])

  return (
    <Formik<ContentForm>
      initialValues={{
        contentName: '',
        isPublic: null,
        ...templateFieldNames(template.templateFields),
      }}
      onSubmit={onSubmit}
      validationSchema={yup.object().shape({
        contentName: validation.uniqueName(usedContentNames),
        isPublic: validation.booleanField,
        ...generateValidators(template.templateFields),
      })}
    >
      {({ values }) => (
        <ScreenContainer>
          <StyledForm>
            <SubHeader>
              <HeaderPadding>
                <RiFileEditLine size={40} style={{ color: colors.greenLight }} />
                <Heading2 marginHorizontal={10}>{template.name}</Heading2>
                <Heading5 marginHorizontal={10}>{values.contentName}</Heading5>
              </HeaderPadding>
              <HeaderPadding>
                <GreenSquareButton type="submit" margin="0 16px">
                  Save
                </GreenSquareButton>
                <SquareButton onClick={navigateToContent} type="button">
                  Cancel
                </SquareButton>
              </HeaderPadding>
            </SubHeader>
            <FieldContainer>
              <StringField name="contentName" label="Content name" />
              <BoolField name="isPublic" label="Make public" />
              <ContentFields templateFields={template.templateFields} />
            </FieldContainer>
          </StyledForm>
        </ScreenContainer>
      )}
    </Formik>
  )
}

export default CreateContentScreen
