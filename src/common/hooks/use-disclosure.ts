import { useState, useCallback } from 'react';

/**
 * Returns a stateful value, and a set of memoized functions to toggle it,
 * set it to true and set it to false
 */
function useDisclosure(initialState: boolean) {
  const [value, setState] = useState(initialState);

  return {
    value,
    setTrue: useCallback(() => setState(true), []),
    setFalse: useCallback(() => setState(false), []),
    onToggle: useCallback(() => setState(state => !state), [])
  };
}

export default useDisclosure;
