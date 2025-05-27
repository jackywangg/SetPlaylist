export default {
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))', // 👈 defines border-border
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // Add more if needed: card, accent, etc.
      },
    },
  },
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  plugins: [],
};
