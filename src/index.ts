// @ts-nocheck
import fastify from 'fastify'
import helmet from '@fastify/helmet'
import ExampleController from './controller/ExampleController'
import UserController from './controller/UserController'
import { AppDataSource }  from './dataSource'

import { authMiddleware } from './handlers/authMiddleware'

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        const server = fastify()

        const exampleController = ExampleController.getInstance()
        const userController = UserController.getInstance()

        server.register(
          helmet
        )
        
        server.get('/api/authed', { preHandler: [authMiddleware]}, exampleController.get)       
        server.get('/api/v1/user', userController.get)


        server.listen(8080, (err, address) => {
          if (err) {
            console.error(err)
            process.exit(1)
          }
          console.log(`Server listening at ${address}`)
})
    })
    .catch((error) => console.log(error))


