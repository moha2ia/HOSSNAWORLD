interface IconProps {
  size?: number;
  className?: string;
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true as const,
  focusable: false as const,
});

export const StarIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path
      d="M12 2.6l2.75 5.66 6.25.88-4.55 4.4 1.1 6.2L12 16.8l-5.55 2.94 1.1-6.2L3 9.14l6.25-.88L12 2.6z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
  </svg>
);

export const BookIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path
      d="M4 5.5C4 4.67 4.67 4 5.5 4H11v15H5.5A1.5 1.5 0 0 1 4 17.5v-12zM20 5.5c0-.83-.67-1.5-1.5-1.5H13v15h5.5c.83 0 1.5-.67 1.5-1.5v-12z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
);

export const CrystalIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path
      d="M12 2.8l5.1 5.4-5.1 13-5.1-13L12 2.8z"
      fill="currentColor"
      opacity="0.9"
    />
    <path d="M12 2.8l2.1 18.4M6.9 8.2h10.2" stroke="#fff" strokeOpacity="0.45" />
  </svg>
);

export const SoundIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path
      d="M4 9.2h3.2L12 5.3v13.4L7.2 14.8H4V9.2z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M15.3 9.1a4.1 4.1 0 010 5.8M17.8 6.6a7.6 7.6 0 010 10.8"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

export const MuteIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path
      d="M4 9.2h3.2L12 5.3v13.4L7.2 14.8H4V9.2z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path d="M15.5 9.5l5 5m0-5l-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const GearIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="3.1" stroke="currentColor" strokeWidth="1.7" />
    <path
      d="M12 3.1v2.1M12 18.8v2.1M20.9 12h-2.1M5.2 12H3.1M18.3 5.7l-1.5 1.5M7.2 16.8l-1.5 1.5M18.3 18.3l-1.5-1.5M7.2 7.2L5.7 5.7"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
  </svg>
);

export const PauseIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="7" y="5" width="3.4" height="14" rx="1.3" fill="currentColor" />
    <rect x="13.6" y="5" width="3.4" height="14" rx="1.3" fill="currentColor" />
  </svg>
);

export const PlayIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M8 4.6l11 7.4-11 7.4V4.6z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />
  </svg>
);

export const CompassIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="8.3" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M14.9 9.1l-1.7 4.1-4.1 1.7 1.7-4.1 4.1-1.7z"
      fill="currentColor"
    />
  </svg>
);

export const ExpandIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path
      d="M9.2 4H5.5A1.5 1.5 0 004 5.5v3.7M14.8 4h3.7A1.5 1.5 0 0120 5.5v3.7M9.2 20H5.5A1.5 1.5 0 014 18.5v-3.7M14.8 20h3.7a1.5 1.5 0 001.5-1.5v-3.7"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

export const CollapseIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path
      d="M4 9.2h3.7A1.5 1.5 0 009.2 7.7V4M20 9.2h-3.7A1.5 1.5 0 0114.8 7.7V4M4 14.8h3.7a1.5 1.5 0 011.5 1.5V20M20 14.8h-3.7a1.5 1.5 0 00-1.5 1.5V20"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

export const SparkleIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path
      d="M12 2.4l1.9 6.1 6.1 1.9-6.1 1.9L12 18.4l-1.9-6.1L4 10.4l6.1-1.9L12 2.4z"
      fill="currentColor"
    />
    <path d="M19.1 15.6l.8 2.5 2.5.8-2.5.8-.8 2.5-.8-2.5-2.5-.8 2.5-.8.8-2.5z" fill="currentColor" opacity="0.7" />
  </svg>
);

export const HeartIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path
      d="M12 20s-7.4-4.5-7.4-9.6A4.2 4.2 0 0112 7.7a4.2 4.2 0 017.4 2.7C19.4 15.5 12 20 12 20z"
      fill="currentColor"
    />
  </svg>
);

export const CloseIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ArrowIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M4 12h15m-5.5-5.5L19 12l-5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const JumpIcon = ({ size = 22, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M12 19V6m0 0l-5 5m5-5l5 5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 20h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
  </svg>
);

export const RunIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="14.5" cy="5.4" r="2" fill="currentColor" />
    <path d="M9.5 21l2.4-4.7-2.2-2.1 1.1-4.1 3.4-1.8 3.2 2.8 2.7.7M11.6 10.4L8 12.6 6 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FlowerIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    {Array.from({ length: 5 }).map((_, index) => (
      <ellipse
        key={index}
        cx="12"
        cy="7.4"
        rx="2.7"
        ry="4"
        fill="currentColor"
        opacity="0.9"
        transform={`rotate(${index * 72} 12 12)`}
      />
    ))}
    <circle cx="12" cy="12" r="2.6" fill="#ffe08a" />
  </svg>
);
