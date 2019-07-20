/* Express App */
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import compression from 'compression'
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

/* My express App */
export default function expressApp(functionName) {
  const app = express()
  const router = express.Router()

  // gzip responses
  router.use(compression())

  // Set router base path for local dev
  const routerBasePath = process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}/`

  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://gridchek-dev.eu.auth0.com/.well-known/jwks.json`
    }),
    audience: `https://gridchek-dev.com`,
    issuer: `https://gridchek-dev.eu.auth0.com/`,
    algorithm: 'RS256'
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

  // Setup routes
  app.use(routerBasePath, router)

  // Apply express middlewares
  router.use(cors())
  router.use(bodyParser.json())
  router.use(bodyParser.urlencoded({ extended: true }))

  return app
}