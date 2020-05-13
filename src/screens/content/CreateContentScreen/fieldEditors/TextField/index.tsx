import React, { FC } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import InlineEditor from '@ckeditor/ckeditor5-build-inline'
import { useFormikContext } from 'formik'
import { ckToolbar } from '../../../../../config/ckEditorToolbar'
import { Label, StyledErrorMessage } from '../styled'
import { Heading5 } from '../../../../../styles/text'

type Props = {
  field: string
}

const TextField: FC<Props> = ({ field }) => {
  const { setFieldTouched, setFieldValue } = useFormikContext()
  const handleChange = editor => {
    setFieldValue(field, editor.getData())
  }

  const handleBlur = () => setFieldTouched(field)

  return (
    <Label>
      <Heading5 marginBottom={5} grey>
        {field}
      </Heading5>
      <CKEditor
        editor={InlineEditor}
        config={{
          toolbar: ckToolbar,
        }}
        onChange={(event, editor) => handleChange(editor)}
        onBlur={handleBlur}
      />
      <StyledErrorMessage name={field} component="div" />
    </Label>
  )
}

export default TextField
