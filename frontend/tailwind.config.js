// tailwind.config.js
const nativewind = require("nativewind/preset");

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [nativewind],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#F5F5F7',    
          secondary: '#FAFAFA', 
          tertiary: '#FFFFFF',  
          dark: '#E5E5EA',      
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.65)',
          medium: 'rgba(255, 255, 255, 0.80)',
          heavy: 'rgba(255, 255, 255, 0.95)',
          dark: 'rgba(0, 0, 0, 0.08)',
        },
        primary: {
          DEFAULT: '#007AFF',
          50: '#E5F3FF',
          100: '#CCE7FF',
          200: '#99CFFF',
          300: '#66B7FF',
          400: '#339FFF',
          500: '#007AFF',
          600: '#0062CC',
          700: '#004999',
          800: '#003166',
          900: '#001933',
        },
        secondary: {
          DEFAULT: '#5856D6',
          light: '#AF52DE',
          dark: '#5856D6',
        },
        success: {
          DEFAULT: '#34C759',
          light: '#30D158',
          dark: '#28A745',
        },
        warning: {
          DEFAULT: '#FF9500',
          light: '#FFCC00',
          dark: '#FF8C00',
        },
        error: {
          DEFAULT: '#FF3B30',
          light: '#FF453A',
          dark: '#D70015',
        },
        text: {
          primary: '#1C1C1E',
          secondary: '#6E6E73',
          tertiary: '#AEAEB2',
          disabled: '#C7C7CC',
          inverse: '#FFFFFF',
        },
        border: {
          DEFAULT: 'rgba(0, 0, 0, 0.08)',
          light: 'rgba(0, 0, 0, 0.04)',
          medium: 'rgba(0, 0, 0, 0.12)',
          dark: 'rgba(0, 0, 0, 0.20)',
          primary: '#007AFF',
        },
      },
      fontFamily: {
        ios: ['SF Pro Display', 'SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
      },
      borderRadius: {
        sm: '8px',
        DEFAULT: '12px',
        lg: '16px',
        xl: '20px',
        full: '9999px',
      },
    },
  },
  plugins: [],
};