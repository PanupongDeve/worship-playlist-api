import fastify from 'fastify'
import ExampleController from './controller/ExampleController'
import UserController from './controller/UserController'
import { AppDataSource }  from './dataSource'

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        const server = fastify()

        const exampleController = ExampleController.getInstance()
        const userController = UserController.getInstance()

        server.get('/ping', exampleController.get)
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


