import express , {Request,Response} from "express";
import { Project, ProjectStore } from "../models/project";
import { User, UserStore } from "../models/user";
import { sendEmail } from "../utils/email";


const user = new UserStore();
const project = new ProjectStore();


export class ProjectHandler {

    //create user
    async  create(req:Request,res:Response){

        const data = req.body;
        console.log(data);
        const checkadmin = await user.getUser(req.body.email);
        console.log(typeof(checkadmin))

        try {

            if(checkadmin){
                res.status(200).json({message:"A user with this email already exist"});
            }else {
                const u:User = {
                    email:req.body.email,
                    password: req.body.password
                }
                await user.create(u);
                res.status(201).json({message:"New user created"})   
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }

    //connect user 

    async signin(req:Request, res:Response){
        try {
            const data = req.body;
            const admin = await user.authenticate(data.email,data.password);
            if(admin){
                res.status(200).json({message:"Sucessfully login"});
            }else{
                res.status(200).json({message: "Wrong credentials"})
            }
            
        } catch (error) {
            console.log(error);
            res.status(401).json(`Access denied ${error}`);

            
        }
    }

    //create project 

    async createProject(req:Request,res:Response){

        try {
            const data:Project = req.body;
            const newProject = await project.create(data);
            res.status(201).json({message:"Project Created", project: newProject});
            
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal Serveur Error"});
            
        }
    }

    //update project 
    async updateProject(req:Request,res:Response){

        try {
            const data:Project = req.body;
            const newProject = await project.update(data);
            res.status(201).json({message:"Project Updated", project:newProject});
            
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal Serveur Error"});
            
        }
    }


    //get project list 
    async getProjectList(req:Request,res:Response){

        try {
            const data =  await project.index()
            res.status(200).json({message:"All Project", projects:data});
            
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal Serveur Error"});
   
        }
    }

    //get one project  
    async getProject(req:Request,res:Response){

        try {
            const id = Number(req.query.id);
            const data =  await project.show(id);
            res.status(200).json({project:data, message: "successfully fetched project"});
            
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal Serveur Error"});
   
        }
    }

    //delete project 
    async deleteProject(req:Request,res:Response){

        try {
            const id = Number(req.query.id);
            const data =  await project.delete(id)
            res.status(200).json({project:data, message: "Project Deleted!"});
            
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal Serveur Error"});
   
        }
    }

    //contact user 
    async sendEmail(req:Request,res:Response){
        try {
            const data = req.body;
            let subject = `${data.email}  sent you a message`;
            await sendEmail(subject, data.message);
            res.status(200).json({message: "Message Sent !"})    
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Internal server error"});
            
        }
    }

    // signout 


}