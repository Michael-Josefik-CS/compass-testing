module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          textDefaultPrimary: 'var(--text-default-primary)',
          secondary: '#FBBF24',
          accent: '#F472B6',
          neutral: '#374151',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    },
    plugins: [],
  };