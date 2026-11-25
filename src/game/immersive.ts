import { useGameStore } from './store';

type LockableOrientation = ScreenOrientation & {
  lock?: (orientation: OrientationLockType) => Promise<void>;
};

const FULLSCREEN_TIP_KEY = 'hossnas-secret-world:fullscreen-tip';

const isTouchDevice = () => window.matchMedia('(pointer: coarse)').matches;

const isIos = () =>
  /iPhone|iPad|iPod/.test(navigator.userAgent) ||
  (navigator.maxTouchPoints > 1 && /Macintosh/.test(navigator.userAgent));

const isStandalone = () =>
  window.matchMedia('(display-mode: standalone)').matches ||
  (navigator as Navigator & { standalone?: boolean }).standalone === true;

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

export const leaveImmersiveMode = () => {
  if (!document.fullscreenElement) return;
  document.exitFullscreen?.().catch(() => {});
};

export const toggleImmersiveMode = () => {
  if (document.fullscreenElement) leaveImmersiveMode();
  else enterImmersiveMode();
};

/**
 * When a phone browser refuses full screen (iPhone Safari, in-app webviews),
 * explain once how to get the no-bars experience.
 */
export const offerFullscreenHelpIfNeeded = () => {
  if (!isTouchDevice() || isStandalone()) return;
  if (localStorage.getItem(FULLSCREEN_TIP_KEY)) return;
  setTimeout(() => {
    const state = useGameStore.getState();
    if (state.phase !== 'playing' || document.fullscreenElement) return;
    localStorage.setItem(FULLSCREEN_TIP_KEY, '1');
    state.notify(
      isIos()
        ? 'Tip: tap Share → Add to Home Screen, then open the island there for a true full screen.'
        : 'Tip: full screen is blocked here — open the island in Chrome, or add it to your Home Screen.',
      'info',
    );
  }, 2600);
};
