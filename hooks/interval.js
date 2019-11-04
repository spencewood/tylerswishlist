import { useRef, useEffect } from "react";

export function useInterval(callback, delay) {
  const savedCallback = useRef(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      return savedCallback.current();
    }
    let cb;
    const id = setInterval(() => {
      cb = tick();
    }, delay);
    return () => {
      clearInterval(id);
    };
  }, [delay]);
}
