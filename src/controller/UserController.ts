// @ts-nocheck
import UserModel from '../model/UserModel'

class UserController {
    private static instance: ExampleController
    private userModel:UserModel
    private constructor() { 
        this.userModel = new UserModel()
    }
    public static getInstance(): UserController {
        if (!UserController.instance) {
            UserController.instance = new UserController();
        }

        return UserController.instance;
    }

    get = async (request , reply) => {
        reply.send(await this.userModel.getAll())
    }
}


export default UserController