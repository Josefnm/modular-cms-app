import { ChangeEvent, useState } from 'react'
import { uploadImage } from '../config/firebase'
import { useSelector } from './redux'

export const useSaveImage = (): [
  string,
  string,
  (event: ChangeEvent<HTMLInputElement>) => Promise<void>
] => {
  const [imageRef, setImageRef] = useState<string>('')
  const [imageName, setImageName] = useState<string>('Upload Image')
  const { selectedProject } = useSelector(state => state.project)

  const saveImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0]
    if (!file) return
    const ref = await uploadImage(selectedProject, file)
    setImageName(file.name)
    setImageRef(ref)
  }

  return [imageRef, imageName, saveImage]
}
