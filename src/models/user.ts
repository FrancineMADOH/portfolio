import client from "../database";
import bcrypt from "bcrypt"
import dotenv from "dotenv"

dotenv.config()

export type  User = {
    id?:Number;
    email: string;
    password:string;
    createAt:Date;
}

const  {
    BCRYPT_PASSWORD,
    SALT_ROUND
} =  process.env

export class UserStore {

    async create(data:User): Promise<User>{
        const {email, password} = data; 
        try {
            const hashedpw = bcrypt.hashSync(password + BCRYPT_PASSWORD, Number(SALT_ROUND as string))

            const conn = await client.connect()
            const sql = "INSERT INTO users(email,password) VALUES($1,$2) RETURNING *;"
            const result = await conn.query(sql, [email,hashedpw]);
            conn.release();
            const data = result.rows[0]
            return data;   
            
        } catch (error) {
            throw new Error(`Failed to create user ${error}`)
            
        }
    }

    async authenticate(email:string,password:string):Promise<User | null >{
        try {
            const conn = await client.connect();
            const sql = "SELECT  * FROM users WHERE email=$1;"
            const result = await conn.query(sql,[email]);

            //check if the user exist 
            if(result.rows.length){
                const user = result.rows[0]
                if(bcrypt.compareSync(password + BCRYPT_PASSWORD,  user.password)){
                    return user;
                }
            }
            conn.release();
            return null
            
        } catch (error) {
            throw new Error(`Failed to signin ${error}`);
            
        }
    }

}