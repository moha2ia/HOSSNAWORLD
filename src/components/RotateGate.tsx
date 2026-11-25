export const RotateGate = () => (
  <div
    className="rotate-gate"
    role="dialog"
    aria-modal="true"
    aria-label="Turn your phone sideways to play"
  >
    <div className="rotate-gate__inner">
      <div className="rotate-gate__phone" aria-hidden="true">
        <span className="rotate-gate__screen" />
      </div>
      <p className="rotate-gate__title">Turn your phone sideways</p>
      <p className="rotate-gate__copy">
        Hossna&apos;s Secret World opens up in landscape — rotate your phone to step onto
        the island.
      </p>
      <p className="rotate-gate__hint">
        Added to your home screen? It starts this way automatically.
      </p>
    </div>
  </div>
);
