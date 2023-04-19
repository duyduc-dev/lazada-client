import { useState, useEffect, useCallback, useMemo } from 'react';

// Custom hook to handle countdown logic
export default function useCountdown(initialValue: number) {
  const [countdown, setCountdown] = useState(initialValue);

  const resetCountdown = useCallback((value: number) => {
    setCountdown(value);
  }, []);

  const startCountdown = useCallback(() => {
    setCountdown(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [countdown]);

  const action = useMemo(
    () => ({
      resetCountdown,
      startCountdown,
    }),
    [resetCountdown, startCountdown]
  );

  return [countdown, action] as const;
}
