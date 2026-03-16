/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        /* Primary Colors */
        primary: {
          background: "var(--primary-background)",
          light: "var(--primary-light)",
          foreground: "var(--primary-foreground)",
        },
        
        /* Text Colors */
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          white: "var(--text-white)",
        },
        
        /* Background Colors */
        background: {
          main: "var(--bg-main)",
          secondary: "var(--bg-secondary)",
          overlay: "var(--bg-overlay)",
          overlayLight: "var(--bg-overlay-light)",
          overlayMedium: "var(--bg-overlay-medium)",
          overlayHeavy: "var(--bg-overlay-heavy)",
          overlayStrong: "var(--bg-overlay-strong)",
          muted: "var(--bg-muted)",
        },
        
        /* Border Colors */
        border: {
          primary: "var(--border-primary)",
          white: "var(--border-white)",
        },
        
        /* Component-specific Colors */
        header: {
          text: "var(--header-text)",
        },
        button: {
          background: "var(--button-bg)",
          text: "var(--button-text)",
          border: "var(--button-border)",
        },
        star: {
          background: "var(--star-bg)",
        },
        line: {
          primary: "var(--line-bg-primary)",
          secondary: "var(--line-bg-secondary)",
          white: "var(--line-bg-white)",
        },
        input: {
          background: "var(--input-bg)",
        },
      },
      
      /* Typography */
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        'hero': 'var(--font-size-hero)',
      },
      
      fontWeight: {
        'thin': 'var(--font-weight-thin)',
        'extralight': 'var(--font-weight-extralight)',
        'light': 'var(--font-weight-light)',
        'normal': 'var(--font-weight-normal)',
        'bold': 'var(--font-weight-bold)',
      },
      
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)',
        '6xl': 'var(--line-height-6xl)',
        '7xl': 'var(--line-height-7xl)',
        '8xl': 'var(--line-height-8xl)',
        '9xl': 'var(--line-height-9xl)',
        '10xl': 'var(--line-height-10xl)',
        'hero': 'var(--line-height-hero)',
      },
      
      /* Spacing */
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)',
        '7xl': 'var(--spacing-7xl)',
        '8xl': 'var(--spacing-8xl)',
        '9xl': 'var(--spacing-9xl)',
        '10xl': 'var(--spacing-10xl)',
        '11xl': 'var(--spacing-11xl)',
        '12xl': 'var(--spacing-12xl)',
        '13xl': 'var(--spacing-13xl)',
        '14xl': 'var(--spacing-14xl)',
        '15xl': 'var(--spacing-15xl)',
        '16xl': 'var(--spacing-16xl)',
        '17xl': 'var(--spacing-17xl)',
        '18xl': 'var(--spacing-18xl)',
        '19xl': 'var(--spacing-19xl)',
        '20xl': 'var(--spacing-20xl)',
        '21xl': 'var(--spacing-21xl)',
        '22xl': 'var(--spacing-22xl)',
        '23xl': 'var(--spacing-23xl)',
        '24xl': 'var(--spacing-24xl)',
        '25xl': 'var(--spacing-25xl)',
        '26xl': 'var(--spacing-26xl)',
        '27xl': 'var(--spacing-27xl)',
        '28xl': 'var(--spacing-28xl)',
        '29xl': 'var(--spacing-29xl)',
        '30xl': 'var(--spacing-30xl)',
        '31xl': 'var(--spacing-31xl)',
        '32xl': 'var(--spacing-32xl)',
        '33xl': 'var(--spacing-33xl)',
        '34xl': 'var(--spacing-34xl)',
        '35xl': 'var(--spacing-35xl)',
        '36xl': 'var(--spacing-36xl)',
        '37xl': 'var(--spacing-37xl)',
      },
      
      /* Border Width */
      borderWidth: {
        'thin': 'var(--border-width-thin)',
      },
      
      /* Font Families */
      fontFamily: {
        'work': ['Work Sans', 'sans-serif'],
        'abril': ['Abril Fatface', 'serif'],
        'alegreya': ['Alegreya', 'serif'],
        'allison': ['Allison', 'cursive'],
        'grape': ['Grape Nuts', 'cursive'],
      },
      
      /* Gap Values */
      gap: {
        'header-menu': 'var(--header-menu-gap)',
      },
    },
  },
  plugins: [],
};