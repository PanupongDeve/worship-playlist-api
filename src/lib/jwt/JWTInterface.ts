

export interface Token {
    encryptPassword: Function
    comparePassword: Function
    generate: Function
    refresh: Function
    verify: Function
    decodeToken: Function
}