import { useCallback, useEffect, useRef, useState } from 'react';

export const useFirstElementHeight = <T,>(list: Array<T>) => {
  const firstElementRef = useRef<HTMLDivElement>(null);
  const [elementHeight, setElementHeight] = useState<number>(0);

  const firstElement = list[0];

  const updateHeight = useCallback(() => {
    if (firstElementRef.current) {
      setElementHeight(firstElementRef.current.getBoundingClientRect().height);
    }
  }, [firstElement]);

  useEffect(() => {
    updateHeight();

    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [updateHeight]);

  return { elementHeight, firstElementRef };
};
