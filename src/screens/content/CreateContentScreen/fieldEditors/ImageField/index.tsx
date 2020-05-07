import React, { FunctionComponent } from 'react'
import { Label, StyledErrorMessage } from '../styled'
import { FileButton, FileInput, Image } from './styled'
import { Heading5 } from '../../../../../styles/text'
import { useSaveImage } from '../../../../../hooks/useSaveImage'

type Props = {
  name: string
}

const ImageField: FunctionComponent<Props> = ({ name }) => {
  const [imageRef, imageName, saveImage] = useSaveImage()

  return (
    <Label>
      <Heading5 marginBottom={5} grey>
        {name}
      </Heading5>
      <FileInput type="file" onChange={saveImage} />
      <FileButton as="div">{imageName}</FileButton>
      <div>{imageRef && <Image src={imageRef} alt={name} />}</div>
      <StyledErrorMessage name={name} component="div" />
    </Label>
  )
}

export default ImageField
