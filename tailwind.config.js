// tailwind.config.js
module.exports = {
  theme: {
    width: {
      'width45': '65px', // Define a custom width value
      'width158': '73%',
      'width100': '100px',
      'width60': '60%',
      'width50': '50%',
      'width40': '40%',
      'width80': '80%',
      'width90': '90%',
      'width100p': '100%'
    },
    height: {
      'height65': '65px',
      'height20': '26px',
      'height45': '45px'
    },
    lineHeight: {
      '44': '64px', // Add a custom line height class
    },

    margin: {
      'mauto':'auto',
      'm10': '10px',
      'ml2': '2px',
      'm20':'20px'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontSize: {
      '7': '7px',
      '9': '9px',
      '10': '10px',

      '12': '12px',
      '14': '14px',
      '16': '16px',
      '30': '50px',
    },
  },

  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    // Add any other files that contain your HTML/JSX templates.
  ],

};
