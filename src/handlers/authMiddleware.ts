


export const authMiddleware = async (request: any, reply: any, next: any) => {
    try {
        if (true) {
            throw "not auth"
        }
        console.log('Hello')
        next()
    } catch (error) {
        reply.send({
            message: error
        })
    }
}