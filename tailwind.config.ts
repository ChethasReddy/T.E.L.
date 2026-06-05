import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0F172A',
        muted: '#64748B',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
        'card': '0 10px 30px -10px rgba(79,70,229,0.18), 0 4px 12px -4px rgba(124,58,237,0.10)',
        'card-hover': '0 24px 48px -16px rgba(79,70,229,0.28), 0 10px 24px -8px rgba(124,58,237,0.18)',
        'lift': '0 30px 60px -20px rgba(79,70,229,0.35), 0 16px 36px -12px rgba(124,58,237,0.22)',
        'pulse-amber': '0 0 0 0 rgba(245,158,11,0.45)',
      },
      animation: {
        'soft-pulse': 'softPulse 2.2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.5s ease-out both',
        'fade-in': 'fadeIn 0.4s ease-out both',
        'iso-float': 'isoFloat 6s ease-in-out infinite',
        'live-dot': 'liveDot 1.4s ease-in-out infinite',
      },
      keyframes: {
        softPulse: {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        isoFloat: {
          '0%, 100%': { transform: 'translateY(0) rotateX(8deg) rotateY(-10deg) rotateZ(2deg)' },
          '50%': { transform: 'translateY(-6px) rotateX(8deg) rotateY(-10deg) rotateZ(2deg)' },
        },
        liveDot: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
