import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import { Label, StyledErrorMessage } from '../styled'
import { FileButton, FileInput, Image } from './styled'
import { Heading5 } from '../../../../../styles/text'
import { uploadImage } from '../../../../../config/firebase'
import { useSelector } from '../../../../../hooks/redux'

type Props = {
  name: string
}

const ImageField: FunctionComponent<Props> = ({ name }) => {
  const [image, setImage] = useState<string>('')
  const [imageName, setImageName] = useState<string>('Upload Image')
  const projectId = useSelector(state => state.project.selectedProject)
  const saveImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0]
    if (!file) return
    const ref = await uploadImage(projectId, file)
    setImageName(file.name)
    setImage(ref)
  }

  return (
    <Label>
      <Heading5 marginBottom={5} grey>
        {name}
      </Heading5>
      <FileInput type="file" onChange={saveImage} />
      <FileButton as="div">{imageName}</FileButton>
      <div>{image && <Image src={image} alt={name} />}</div>
      <StyledErrorMessage name={name} component="div" />
    </Label>
  )
}

export default ImageField
