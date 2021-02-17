import { useEffect, useRef } from "react";

export const useHover = (onMouseenter) => {
  if (typeof onMouseenter !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onMouseenter);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onMouseenter);
      }
    };
  }, []);
  return element;
};
