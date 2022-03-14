import { useEffect, useRef } from 'react'

/**
 * Stores the previous state or props.
 */
function usePrevious<T>(state: T): T | undefined {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = state
  })

  return ref.current
}

export default usePrevious
