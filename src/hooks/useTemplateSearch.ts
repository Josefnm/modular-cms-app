import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { client } from '../config/axios-client'
import { useSelector } from './redux'
import { TemplateModel } from '../store/reducers/template.reducers'

export const useTemplateSearch = (): [
  TemplateModel[],
  (event?: ChangeEvent<HTMLInputElement>) => Promise<void>
] => {
  const { projectTemplates } = useSelector(state => state.template)
  const { selectedProject } = useSelector(state => state.project)
  const [templates, setTemplates] = useState<TemplateModel[]>([])
  const [searchString, setSearchString] = useState('')

  const searchTemplates = useCallback(
    async (event?: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setSearchString(value)
    },
    [setSearchString]
  )

  useEffect(() => {
    const func = async () => {
      if (!searchString) {
        setTemplates(projectTemplates)
      } else {
        try {
          const { data } = await client.get<TemplateModel[]>(
            `/template/search/${selectedProject}?searchString=${searchString}`
          )
          setTemplates(data)
        } catch (e) {
          console.log(e.response.message)
        }
      }
    }
    func()
  }, [projectTemplates, searchString, selectedProject])
  return [templates, searchTemplates]
}
