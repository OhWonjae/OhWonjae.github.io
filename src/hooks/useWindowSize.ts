import { useEffect, useState } from 'react';
import { debounce } from '@/utils/common';
export const useGetComputedStyleWhenWindowReSize = (element?: HTMLElement) => {
  const [style, setStyle] = useState<CSSStyleDeclaration | undefined>();

  const handleReSize = debounce(() => {
    if (element) {
      const computedStyle = window.getComputedStyle(element);
      setStyle(computedStyle);
    }
  }, 200);

  useEffect(() => {
    handleReSize();
    window.addEventListener('resize', handleReSize);
    return () => window.removeEventListener('resize', handleReSize);
  }, [element]);
  return { style };
};
