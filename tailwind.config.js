module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      
      primary: 'Playfair Display',
      body: "Karla",
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        // about: 'url("/src/assets/img/outline-text/about.svg")',
        // portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        // services: 'url("/src/assets/img/outline-text/services.svg")',
        // testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
        // contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      colors: {
          'dark-900': '#093636',
        'purple-900': '#917FB3',
        primary: '#050402',
        secondary: '#1C1D24',
        tertiary: '#131419',
        Sea: '#03CDFF',
        Green: '#022422',
        accent: {
          DEFAULT: '#07F985',
          hover: '#925a2b',
        },
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
};

