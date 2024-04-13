import * as React from 'react';

type LogoElement = React.ElementRef<'svg'>;
type RootProps = React.ComponentPropsWithoutRef<'svg'>;

export const Logo = React.forwardRef<LogoElement, Readonly<RootProps>>((_, __) => (
  <div className="flex place-items-center gap-2 bg-gradient-to-r from-blue-600 via-purple-300 to-indigo-400 bg-clip-text text-purple-300">
    <span className="text-[30px] inline-block text-transparent ">Email Craft</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
      <path d="m14 7 3 3" />
      <path d="M5 6v4" />
      <path d="M19 14v4" />
      <path d="M10 2v2" />
      <path d="M7 8H3" />
      <path d="M21 16h-4" />
      <path d="M11 3H9" />
    </svg>
  </div>
));

Logo.displayName = 'Logo';
