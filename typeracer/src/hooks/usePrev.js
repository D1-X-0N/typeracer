import { useEffect, useRef } from "react";

/**
 * получает предыдущие значение state
 * @param {value}
 */

export const usePrev = (value) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
