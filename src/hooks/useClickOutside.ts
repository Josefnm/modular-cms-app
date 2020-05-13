import { MutableRefObject, useEffect, useRef, useState } from 'react'

/**
 * sets state to false when clicking on anything other than referenced element
 * @param ref referance to element
 */
export const useClickedOutside = (): [
  boolean,
  (value: ((prevState: boolean) => boolean) | boolean) => void,
  MutableRefObject<null>
] => {
  const [open, setOpen] = useState(false)

  const wrapperRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  return [open, setOpen, wrapperRef]
}
