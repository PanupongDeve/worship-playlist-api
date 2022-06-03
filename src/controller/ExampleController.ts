// @ts-nocheck
import ExampleModel from '../model/ExampleModel'

class ExampleController {
    private static instance: ExampleController
    private exampleModel:ExampleModel
    private constructor() { 
        this.exampleModel = new ExampleModel()
    }
    public static getInstance(): ExampleController {
        if (!ExampleController.instance) {
            ExampleController.instance = new ExampleController();
        }

        return ExampleController.instance;
    }

    get = async (request , reply) => {
        await reply.send(this.exampleModel.getHello())
    }
}


export default ExampleController