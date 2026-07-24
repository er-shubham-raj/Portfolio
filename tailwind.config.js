/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#050816",
          dark: "#03050F",
          light: "#0B1021",
        },
        surface: {
          DEFAULT: "#111827",
          dark: "#0D131F",
          light: "#1F2937",
        },
        coral: {
          DEFAULT: "#FF6B57",
          glow: "rgba(255, 107, 87, 0.4)",
          soft: "#FF8A7A",
        },
        amber: {
          DEFAULT: "#F6C453",
          glow: "rgba(246, 196, 83, 0.4)",
          soft: "#FAD885",
        },
        emerald: {
          success: "#39D98A",
          glow: "rgba(57, 217, 138, 0.4)",
        },
        peach: {
          DEFAULT: "#FFE5D9",
          highlight: "#FFF0E8",
        },
        glass: {
          card: "rgba(255, 255, 255, 0.06)",
          border: "rgba(255, 255, 255, 0.1)",
          hover: "rgba(255, 255, 255, 0.12)",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-coral': '0 0 35px -5px rgba(255, 107, 87, 0.35)',
        'glow-amber': '0 0 35px -5px rgba(246, 196, 83, 0.35)',
        'glow-emerald': '0 0 35px -5px rgba(57, 217, 138, 0.35)',
        'glass-luxury': '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-coral-amber': 'linear-gradient(135deg, #FF6B57 0%, #F6C453 50%, #FFE5D9 100%)',
        'gradient-dark-radial': 'radial-gradient(circle at 50% 0%, rgba(255, 107, 87, 0.12) 0%, rgba(246, 196, 83, 0.05) 35%, rgba(5, 8, 22, 0) 70%)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}

