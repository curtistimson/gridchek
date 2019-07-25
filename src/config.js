const prod = {
  auth0: {
    domain: 'gridchek.eu.auth0.com',
    clientID: 'an5QndvNJmvFzzT1pqsD7yLX108JG5kO',
    redirectUri: 'https://gridchek.netlify.com/auth-callback',
    audience: 'https://gridchek.com',
  },
  debug: false,
  googleAnalytics: {
    trackingId: 'UA-52569437-1',
  },
  serviceUri: '',
};

const dev = {
  auth0: {
    domain: 'gridchek-dev.eu.auth0.com',
    clientID: 'xZ0h5zkIR1u4LBD3t2LW592Ah2EzeKEe',
    redirectUri: 'http://localhost:3000/auth-callback',
    audience: 'https://gridchek-dev.com',
  },
  debug: true,
  googleAnalytics: {
    trackingId: 'UA-52569437-2',
  },
  serviceUri: 'http://localhost:9000',
};

const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : dev;

export default config;