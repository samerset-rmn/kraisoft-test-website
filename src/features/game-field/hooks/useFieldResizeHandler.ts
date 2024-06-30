import { useEffect, useRef, useState } from 'react';

/**
 * How to listen game field resize and return its size
 */
export const useFieldResizeHandler = () => {
  const [gameFieldSize, setGameFieldSize] = useState({ width: 0, height: 0 });
  const gameFieldRef = useRef(null);

  useEffect(() => {
    /** NOTE If support for IE is not required then it's better to use ResizeObserver. Otherwise we could listen to the window resize. */
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setGameFieldSize({ width: entry.contentRect.width, height: entry.contentRect.height });
      }
    });

    if (gameFieldRef.current) {
      resizeObserver.observe(gameFieldRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return { gameFieldRef, gameFieldSize };
};
