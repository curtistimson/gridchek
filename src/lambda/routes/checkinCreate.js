const expressJwt = require('express-jwt');
const jwks = require('jwks-rsa');

module.exports = (router) => {

  const jwtCheck = expressJwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.auth0JwksUri
    }),
    audience: process.env.auth0Audience,
    issuer: process.env.auth0Issuer,
    algorithms: ['RS256'],
    getToken: function fromHeaderOrQuerystring (req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
          return req.query.token;
        }
        return null;
    }
  });

  router.get('/users', jwtCheck, (req, res) => {
    res.json({
      users: [
        {
          name: 'steve',
        },
        {
          name: 'jose',
        },
      ],
    })
  })

}