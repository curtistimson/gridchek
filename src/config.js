const prod = {
  auth0: {
    domain: '',
    clientID: '',
    redirectUri: '',
    audience: '',
  },
  debug: false,
  googleAnalytics: {
    trackingId: 'UA-52569437-1',
  },
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
};

const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : dev;

export default config;