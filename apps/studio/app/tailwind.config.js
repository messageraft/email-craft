const colors = require('@radix-ui/colors');
const plugin = require('tailwindcss/plugin');

const iOsHeight = plugin(({ addUtilities }) => {
  const supportsTouchRule = '@supports (-webkit-touch-callout: none)';
  const webkitFillAvailable = '-webkit-fill-available';

  const utilities = {
    '.h-screen-ios': {
      [supportsTouchRule]: {
        height: webkitFillAvailable
      }
    },
    '.min-h-screen-ios': {
      [supportsTouchRule]: {
        minHeight: webkitFillAvailable
      }
    }
  };

  addUtilities(utilities, ['responsive']);
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    '../../../packages/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [iOsHeight],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          'linear-gradient(145.37deg, rgba(255, 255, 255, 0.09) -8.75%, rgba(255, 255, 255, 0.027) 83.95%)',
        gradientHover:
          'linear-gradient(145.37deg, rgba(255, 255, 255, 0.1) -8.75%, rgba(255, 255, 255, 0.057) 83.95%)',
        shine:
          'linear-gradient(45deg, rgba(255,255,255,0) 45%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 55%,rgba(255,255,255,0) 100%)'
      },
      colors: {
        'button-bg': '#3d3a3a',
        'code-bg': '#353436',
        'cta-bg': '#2563eb',
        'cta-bg-hover': '#1e40af',
        'cta-text': '#FFFFFF',
        'dark-bg': '#1c1917',
        'dark-bg-border': '#1a191a',
        'dark-bg-text': '#FFFFFF',
        'darker-bg': '#2c2a2b',
        'error-text': '#f87171',
        slate: {
          1: colors.slateDarkA.slateA1,
          2: colors.slateDarkA.slateA2,
          3: colors.slateDarkA.slateA3,
          4: colors.slateDarkA.slateA4,
          5: colors.slateDarkA.slateA5,
          6: colors.slateDarkA.slateA6,
          7: colors.slateDarkA.slateA7,
          8: colors.slateDarkA.slateA8,
          9: colors.slateDarkA.slateA9,
          10: colors.slateDarkA.slateA10,
          11: colors.slateDarkA.slateA11,
          12: colors.slateDarkA.slateA12
        }
      },
      keyframes: {
        dash: {
          '0%': { strokeDashoffset: 1000 },
          '100%': { strokeDashoffset: 0 }
        },
        shine: {
          '0%': { backgroundPosition: '-100%' },
          '100%': { backgroundPosition: '100%' }
        }
      }
    }
  }
};
