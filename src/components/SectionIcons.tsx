import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const defaults = (size = 24): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
});

/* ─── Home: minimal house silhouette ─── */
export const IconHome = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <path
      d="M4 11L12 4L20 11V20H15V15H9V20H4V11Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Fast-forward: double chevron ─── */
export const IconFastForward = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <path
      d="M6 5L13 12L6 19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 5L20 12L13 19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Stacks: two rectangles side by side ─── */
export const IconStacks = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <rect
      x="3"
      y="6"
      width="8"
      height="12"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      x="13"
      y="6"
      width="8"
      height="12"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

/* ─── Identity: two circles, big + small, no overlap ─── */
export const IconIdentity = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <circle
      cx="10"
      cy="12"
      r="7"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle
      cx="19"
      cy="8"
      r="3.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

/* ─── Closing: arrow-right-to-line ─── */
export const IconClosing = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <path d="M5 12H17M17 12L12 7M17 12L12 17M20 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Article: open book ─── */
export const IconArticle = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <path d="M4 19V5C4 4 5 3 6 3H18C19 3 20 4 20 5V19C20 20 19 21 18 21H6C5 21 4 20 4 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 7H16M8 11H16M8 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ─── IC Recruitment icons ─── */

/** Rocket / unfair advantage */
export const IconRocket = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <path d="M12 2C12 2 8 6 8 12C8 14.5 9 16.5 10 18L9 22L12 20L15 22L14 18C15 16.5 16 14.5 16 12C16 6 12 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

/** Lightbulb / ideas */
export const IconLightbulb = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <path d="M9 21H15M10 17H14M12 3C8.68 3 6 5.68 6 9C6 11.5 7.5 13.5 9.5 14.5V17H14.5V14.5C16.5 13.5 18 11.5 18 9C18 5.68 15.32 3 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Chart / build bigger */
export const IconChart = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <path d="M4 20V14M10 20V10M16 20V4M20 20H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** People / team */
export const IconTeam = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 20C2 17 4.5 15 8 15C10 15 11.5 15.5 12.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 20C14 17.5 15.5 16 18 16C20.5 16 22 17.5 22 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ─── Update: circular refresh arrow ─── */
export const IconUpdate = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <path d="M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C15.31 3 18.16 4.9 19.5 7.64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 7.5H20V3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Org chart: hierarchical nodes ─── */
export const IconOrgChart = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="3" y="17" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="15" y="17" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7V11M12 11H6M12 11H18M6 11V17M18 11V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ─── Agent: bot/automation cog ─── */
export const IconAgent = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 2V5M12 19V22M2 12H5M19 12H22M4.93 4.93L7.05 7.05M16.95 16.95L19.07 19.07M19.07 4.93L16.95 7.05M7.05 16.95L4.93 19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ─── Target: crosshair for buyer targeting ─── */
export const IconTarget = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

