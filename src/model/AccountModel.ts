

class AccountModel {
    private static instance: AccountModel
    

    public static getInstance(): AccountModel {
        if (!this.instance) {
            this.instance = new AccountModel();
        }

        return this.instance;
    }


    grant = async () => {
        
    }


    signup = async () => {
        
    }
    
    refreshToken = async () => {
       
    }

    verify  = async () => {
        
    }
}


export const accountModel = AccountModel.getInstance()