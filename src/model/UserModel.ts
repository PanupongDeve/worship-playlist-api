import BaseModel from './BaseModel'

import { User } from '../entities/User'
import { AppDataSource } from '../dataSource'

class UserModel extends BaseModel {

    async getAll() {
        const users = await AppDataSource.manager.find(User)
        console.log('users', users)
        return users;
    }

    async create() {

    }

    async update() {


    }

    async delete() {

    }

    
}

export default UserModel