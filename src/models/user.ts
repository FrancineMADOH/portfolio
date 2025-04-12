import client from "../database";

export type  User = {
    id:Number;
    email: string;
    password:string;
}

export class UserStore {

    async create(u:User){//:Promise<User >
        try {
             
            
        } catch (error) {
            
        }
    }

    async authenticate(email:string,password:string){//:Promise<User|null>
        try {
            return null
            
        } catch (error) {
            
        }
    }

}