import { RefObject, useEffect, useState } from 'react';

type THook = {
  ref: RefObject<Element>;
  rootMargin?: string;
}

const useElementOnScreen = (
  {ref, rootMargin = "-100px",}: THook
  
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
      );
  if (ref.current) {
    observer.observe(ref.current);
  }
  return () => {
    if (ref.current) {
      observer.unobserve(ref.current);
    }
  };
}, [rootMargin, ref]);
  return isIntersecting;
};

export default useElementOnScreen;
