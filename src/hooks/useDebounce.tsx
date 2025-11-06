import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number): T {
  const [debouncedVal, setDebouncedVal] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);

    return () => clearTimeout(id);
  }, [value, delay]);

  return debouncedVal;
}
