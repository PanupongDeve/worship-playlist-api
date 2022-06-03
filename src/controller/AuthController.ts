

class AuthController {
    private static instance: AuthController
    

    public static getInstance(): AuthController {
        if (!this.instance) {
            this.instance = new AuthController();
        }

        return this.instance;
    }


    grant = async (request:any , reply:any) => {
        reply.send('')
    }


    signup = async (request:any , reply:any) => {
        reply.send('')
    }
    
    refreshToken = async (request:any , reply:any) => {
        reply.send('')
    }
}


export const authController = AuthController.getInstance()