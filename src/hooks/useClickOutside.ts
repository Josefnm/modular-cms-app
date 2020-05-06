import { Dispatch, MutableRefObject, SetStateAction, useEffect, useState } from 'react'

/**
 * sets state to false when clicking on anything other than referenced element
 * @param ref referance to element
 */
export const useClickedOutside = (
  ref: MutableRefObject<any>
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return [open, setOpen]
}
