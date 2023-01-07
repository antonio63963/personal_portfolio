import { FC, RefObject, useEffect, useState } from 'react';

type THook = {
  ref: RefObject<Element>;
  rootMargin?: string;
}

const useElementOnScreen = (
  {ref, rootMargin = "0px",}: THook
  
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    console.log('Hook: ', ref)
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
}, [ref, rootMargin]);
  return isIntersecting;
};

export default useElementOnScreen;
