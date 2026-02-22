export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/beingmomen-01_xczmdz',
      light: 'https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/beingmomen-01_xczmdz',
      alt: 'عبدالمؤمن الشطوري'
    },
    meetingLink: 'https://beingmomen.com/contact',
    email: 'beingmomen@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `© ${new Date().getFullYear()} عبدالمؤمن الشطوري`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/beingmomen/',
      'target': '_blank',
      'aria-label': 'LinkedIn'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/beingmomen',
      'target': '_blank',
      'aria-label': 'GitHub'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://twitter.com/beingmomen',
      'target': '_blank',
      'aria-label': 'Twitter'
    }, {
      'icon': 'i-simple-icons-facebook',
      'to': 'https://www.facebook.com/beingmomen/',
      'target': '_blank',
      'aria-label': 'Facebook'
    }, {
      'icon': 'i-simple-icons-instagram',
      'to': 'https://www.instagram.com/beingmomen/',
      'target': '_blank',
      'aria-label': 'Instagram'
    }]
  }
})
