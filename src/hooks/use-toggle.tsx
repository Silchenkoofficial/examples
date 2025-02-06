import { useCallback, useState } from 'react';

export const useToggle = (initialValue: boolean) => {
  const [on, setOn] = useState(initialValue);

  const toggle = useCallback((value: boolean | undefined) => {
    if (value === undefined) {
      return setOn((v) => !v);
    }

    return setOn(value);
  }, []);

  return [on, toggle];
};
