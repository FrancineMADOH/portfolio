import jwt from "jsonwebtoken";
import { Request,Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

//Donnees a inclure sans le token 

interface userPayload {
    user:string,
    id:string
}


// generation du token 

export const generateAuthToken = (payload:userPayload)=>{
    let token = jwt.sign(payload,String(process.env.TOKEN),{expiresIn: '5h'});
    return token
}
//middleware de verification du token

export const verifyToken = (req:Request, res:Response, next:NextFunction)=>{

    const headers = req.headers['authorization'];
    const token = headers && headers.split(' ')[1];

    if(token == null){
        console.log('Access Denied')
         res.sendStatus(401);
    } else{
        jwt.verify(token,String(process.env.TOKEN) , (err:any, user:any)=>{

            if(err){
                res.sendStatus(403);
            }
    
            // token valide ? ajouter les infos de l'utilisateur a lobjet body 
            //@ts-ignore
            req.user   = user as userPayload;
            next();
        })
    }

    
    
}
