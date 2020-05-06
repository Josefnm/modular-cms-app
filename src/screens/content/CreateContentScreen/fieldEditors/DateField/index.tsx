import React, { FunctionComponent } from 'react'
import DateTimePicker from 'react-datetime-picker'
import { useFormikContext } from 'formik'
import { Heading5 } from '../../../../../styles/text'
import { Label, StyledErrorMessage } from '../styled'

type Props = {
  name: string
}

const DateField: FunctionComponent<Props> = ({ name }) => {
  const { setFieldTouched, setFieldValue, values } = useFormikContext()
  const handleChange = (dateTime: string) => {
    setFieldValue(name, dateTime)
  }

  const handleBlur = () => setFieldTouched(name)

  return (
    <Label>
      <Heading5 marginBottom={5} grey>
        {name}
      </Heading5>
      <div style={{ width: '200px' }}>
        <DateTimePicker
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name]}
        />
      </div>
      <StyledErrorMessage name={name} component="div" />
    </Label>
  )
}

export default DateField
