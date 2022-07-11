import { useEffect, useState } from 'react'

const useOutsideClick = (ref1: any, ref2?: any) => {
  const [isClose, setIsClose] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (
        ref1.current &&
        !ref1.current.contains(e.target) &&
        ref2?.current &&
        !ref2?.current.contains(e.target)
      ) {
        setIsClose(true)
      } else {
        setIsClose(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref1, ref2, isClose])

  return isClose
}

export default useOutsideClick
