// @ts-nocheck
import fastify from 'fastify'
import helmet from '@fastify/helmet'
import { authController } from './controller/AuthController'
import { AppDataSource }  from './lib/mysql/typeorm'

import { authMiddleware } from './handlers/authMiddleware'

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        const server = fastify()

        
        server.register(
          helmet
        )
        
        // server.get('/api/authed', { preHandler: [authMiddleware]}, authController.grant)       
        server.post('/api/v1/auth/grant', authController.grant)
        server.post('/api/v1/auth/signup', authController.signup)
        server.post('/api/v1/auth/refreshToken', authController.refreshToken)


        server.listen(8080, (err, address) => {
          if (err) {
            console.error(err)
            process.exit(1)
          }
          console.log(`Server listening at ${address}`)
})
    })
    .catch((error) => console.log(error))


