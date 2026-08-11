/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Shadcn/ui essentials
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: { DEFAULT: "hsl(var(--primary) / <alpha-value>)", foreground: "hsl(var(--primary-foreground) / <alpha-value>)" },
        // ...baaki color definitions (secondary, muted, card etc.)
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
      },
      keyframes: {
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
