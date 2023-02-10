import { useEffect, useState } from 'react';

export const useDebouns = (value: string, delay = 500) => {
  const [debouns, setDebouns] = useState<string>('');

  useEffect(() => {
    const handler = setTimeout(() => setDebouns(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouns;
};
