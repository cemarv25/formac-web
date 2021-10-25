import React, { useEffect, useRef, useState } from 'react';

export function useIsMobile() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera|Mini|IEMobile|WPDesktop/i
      )
    );

    setMobile(mobile);
  }, []);

  return { isMobile };
}

export function useMediaQuery(mediaQuery) {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState(null);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener('change', (e) => setIsMatch(e.matches), mediaQueryList);

  return isMatch;
}

export const useEventListener = (eventType, callback, element = window) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e) => callbackRef.current(e);
    if (element) {
      element.addEventListener(eventType, handler);
    }

    return element
      ? () => element.removeEventListener(eventType, handler)
      : null;
  }, [eventType, element]);
};
