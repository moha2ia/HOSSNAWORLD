import { useEffect, useState } from 'react';

const supported = () =>
  typeof document !== 'undefined' && document.fullscreenEnabled === true;

export const useFullscreen = () => {
  const [active, setActive] = useState(
    () => typeof document !== 'undefined' && !!document.fullscreenElement,
  );

  useEffect(() => {
    const onChange = () => setActive(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  return { active, supported: supported() };
};
