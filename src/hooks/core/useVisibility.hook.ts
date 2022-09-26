import { useCallback, useState } from "react";

export function useVisibility(initialState: boolean = false) {
  const [isVisible, setIsVisible] = useState(initialState);

  const show = useCallback(() => setIsVisible(true), []);
  const hide = useCallback(() => setIsVisible(false), []);

  return {
    isVisible,
    show,
    hide,
  };
}
