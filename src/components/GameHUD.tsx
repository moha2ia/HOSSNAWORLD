import { useEffect, useState } from 'react';
import { audio } from '../game/audio';
import { requestCameraRecenter } from '../game/cameraState';
import { toggleImmersiveMode } from '../game/immersive';
import { countCollected, starCount } from '../game/quests';
import { useGameStore } from '../game/store';
import { useFullscreen } from '../ui/useFullscreen';
import { useMobileLayout } from '../ui/useMobileLayout';
import {
  BookIcon,
  CollapseIcon,
  CompassIcon,
  CrystalIcon,
  ExpandIcon,
  MuteIcon,
  PauseIcon,
  SoundIcon,
  StarIcon,
} from './Icons';
import { InteractionPrompt } from './InteractionPrompt';
import { QuestTracker } from './QuestTracker';

export const GameHUD = () => {
  const phase = useGameStore((state) => state.phase);
  const collected = useGameStore((state) => state.collected);
  const sound = useGameStore((state) => state.settings.sound);
  const toggleSound = useGameStore((state) => state.toggleSound);
  const pauseGame = useGameStore((state) => state.pauseGame);
  const openModal = useGameStore((state) => state.openModal);
  const modal = useGameStore((state) => state.modal);
  const mobile = useMobileLayout();
  const { active: fullscreen, supported: fullscreenSupported } = useFullscreen();
  const [showHint, setShowHint] = useState(true);

  const stars = starCount(collected);
  const crystals = countCollected(collected, 'crystal');
  const flowers = countCollected(collected, 'flower');

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 14000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hud">
      <header className="hud-top">
        <div className="brand-pill" aria-label="Hossna's Secret World">
          <span className="brand-heart" aria-hidden="true">♥</span>
          <span className="brand-full">HOSSNA'S SECRET WORLD</span>
          <span className="brand-short">HOSSNA'S WORLD</span>
        </div>

        <div className="hud-actions">
          <div
            className="counter-pill counter-pill--stars"
            aria-label={`${stars} golden stars collected`}
            title={`${stars} golden stars`}
          >
            <StarIcon size={18} />
            <span key={stars} className="counter-number">
              {stars}
            </span>
          </div>
          <div
            className="counter-pill counter-pill--crystal"
            aria-label={`${crystals} pink crystals, ${flowers} magical flowers collected`}
            title={`${crystals} crystals · ${flowers} magical flowers`}
          >
            <CrystalIcon size={17} />
            <span>{crystals}</span>
          </div>
          <button
            className="icon-button"
            onClick={() => openModal('journal')}
            aria-label="Open journal"
            title="Journal (J)"
          >
            <BookIcon size={19} />
          </button>
          <button
            className="icon-button"
            onClick={toggleSound}
            aria-label={sound ? 'Mute sound' : 'Turn sound on'}
            title={sound ? 'Mute sound (M)' : 'Turn sound on (M)'}
          >
            {sound ? <SoundIcon size={19} /> : <MuteIcon size={19} />}
          </button>
          <button
            className="icon-button icon-button--desktop"
            onClick={() => {
              requestCameraRecenter();
              audio.play('ui');
            }}
            aria-label="Recenter camera"
            title="Recenter camera (R)"
          >
            <CompassIcon size={19} />
          </button>
          {fullscreenSupported && (
            <button
              className="icon-button"
              onClick={() => {
                toggleImmersiveMode();
                audio.play('ui');
              }}
              aria-label={fullscreen ? 'Leave full screen' : 'Enter full screen'}
              title={fullscreen ? 'Leave full screen' : 'Full screen'}
            >
              {fullscreen ? <CollapseIcon size={19} /> : <ExpandIcon size={19} />}
            </button>
          )}
          <button
            className="icon-button"
            onClick={() => {
              pauseGame();
              audio.play('ui');
            }}
            aria-label="Pause game"
            title="Pause (Esc)"
          >
            <PauseIcon size={19} />
          </button>
        </div>
      </header>

      <QuestTracker />
      <InteractionPrompt />

      {phase === 'playing' && !modal && showHint && (
        <div className={`controls-hint ${mobile ? 'controls-hint--mobile' : ''}`}>
          {mobile ? (
            <>Left thumb to wander · drag the island to look · tap ✦ to interact</>
          ) : (
            <>
              <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> move
              <span>·</span>
              <kbd>Shift</kbd> run
              <span>·</span>
              <kbd>Space</kbd> jump
              <span>·</span>
              <kbd>E</kbd> interact
              <span>·</span>
              <kbd>J</kbd> journal
              <span>·</span>
              drag to look
            </>
          )}
        </div>
      )}
    </div>
  );
};
