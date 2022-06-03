import "reflect-metadata"
import { DataSource } from "typeorm"
import { Account } from '../entities/Account'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "worship_playlist",
    synchronize: true,
    logging: false,
    entities: [Account],
    migrations: [],
    subscribers: [],
})


