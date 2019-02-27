module.exports = {
  siteTitle: 'Kavin Varnan | Lead Full Stack Developer',
  siteDescription:
    'Kavin Varnan is a Lead Full Stack Developer based in Bangalore, My specialization is to architect high quality mobile and web apps, along with an extremely scalable backend server.',
  siteKeywords:
    'Kavin Varnan, Kavin, Varnan, skvarnan, software engineer, technical lead, backend engineer, android developer, nodejs, bangalore',
  siteUrl: 'https://skvarnan.com',
  siteLanguage: 'en_IN',

  name: 'Kavin Varnan',
  location: 'Bangalore, IN',
  email: 'skavinvarnan@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/skavinvarnan',
    },
    {
      name: 'Stackoverflow',
      url: 'https://stackoverflow.com/users/1452884/kavin-varnan',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/kavin-varnan-08083229/',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@skvarnan',
  hjid: 1215748,
  hjsv: 6,

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
