import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Token } from './JWTInterface'


const TOKEN_FIVE_MINUTE: number = Math.floor(Date.now() / 1000) + (60 * 60 * 1)

class TokenImp implements Token {
    private static instance: Token
    private salt: string = 'p@sSw0rd'

    public static getInstance(): Token {
        if (!this.instance) {
            this.instance = new TokenImp();
        }

        return this.instance;
    }

    encryptPassword(password: string) {
        return bcryptjs.hashSync(password);
    }


    comparePassword(password: string, comparePassword: string) {
        return bcryptjs.compareSync(password, comparePassword)
    }

    generate(payload: string | object | Buffer) {
        return jwt.sign({
            exp: TOKEN_FIVE_MINUTE,
            payload
        }, this.salt)
    }

    refresh(token: string) {
        const oldPayload = jwt.verify(token, this.salt)
        return this.generate(oldPayload)
    }

    verify(token: string) {
        return jwt.verify(token, this.salt);
    }

    decodeToken(token: string) {
        return jwt.decode(token)
    }
}


export const token: Token = TokenImp.getInstance()