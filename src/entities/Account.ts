import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Account {

    @PrimaryGeneratedColumn()
    id: number

    @PrimaryColumn()
    profile_id: string

    @Column()
    username: string

    @Column()
    password: string

    
}
