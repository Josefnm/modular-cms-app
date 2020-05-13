import React, { FC, useEffect } from 'react'
import { Label, StyledErrorMessage } from '../styled'
import { FileButton, FileInput } from './styled'
import { Heading5 } from '../../../../../styles/text'
import { useSaveImage } from '../../../../../hooks/useSaveImage'
import { StyledImage } from '../../../../../components/common'
import { useFormikContext } from 'formik'

type Props = {
  name: string
}

const ImageField: FC<Props> = ({ name }) => {
  const [imageRef, imageName, saveImage] = useSaveImage()
  const { setFieldTouched, setFieldValue } = useFormikContext()

  useEffect(() => {
    setFieldValue(name, imageRef)
    setFieldTouched(name)
  }, [name, imageRef, setFieldValue, setFieldTouched])

  return (
    <Label>
      <Heading5 marginBottom={5} grey>
        {name}
      </Heading5>
      <FileInput type="file" onChange={saveImage} />
      <FileButton as="div">{imageName}</FileButton>
      <div>{imageRef && <StyledImage src={imageRef} alt={name} />}</div>
      <StyledErrorMessage name={name} component="div" />
    </Label>
  )
}

export default ImageField
