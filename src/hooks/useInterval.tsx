import { useEffect, useRef } from 'react';

const noop = _ => _;
function useInterval(callback, delay): void {
  const savedCallback: { readonly current: any } = useRef({ current: noop });

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick(): void {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
