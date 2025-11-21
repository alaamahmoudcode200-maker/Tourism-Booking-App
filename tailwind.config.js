module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      },
      animation: {
        slideInRight: 'slideInRight 0.6s ease-out forwards',
      }
    }
  }
};