import BaseModel from './BaseModel'


class ExampleModel extends BaseModel {

    getHello() {
        return 'hello fastify';
    }

    
}

export default ExampleModel