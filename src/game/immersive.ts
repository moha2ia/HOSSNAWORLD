type LockableOrientation = ScreenOrientation & {
  lock?: (orientation: OrientationLockType) => Promise<void>;
};

const isTouchDevice = () =>
  navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;

const lockLandscape = () => {
  const orientation = screen.orientation as LockableOrientation | undefined;
  try {
    orientation?.lock?.('landscape')?.catch(() => {
      // iOS and some browsers refuse; the rotate hint covers them.
    });
  } catch {
    // Older engines throw synchronously outside fullscreen.
  }
};

/**
 * Ask for a full-screen, landscape view. Must run inside a user gesture.
 * Silently no-ops on desktop and where the APIs are unavailable.
 */
export const enterImmersiveMode = () => {
  if (!isTouchDevice()) return;
  if (document.fullscreenElement) {
    lockLandscape();
    return;
  }
  try {
    const request = document.documentElement.requestFullscreen?.({ navigationUI: 'hide' });
    if (request) request.then(lockLandscape).catch(lockLandscape);
    else lockLandscape();
  } catch {
    lockLandscape();
  }
};
