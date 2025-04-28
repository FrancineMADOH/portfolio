import express, {Request, Response} from "express";
import { ProjectHandler } from "../handlers/projectHandler";

const router = express.Router();
const methods = new ProjectHandler();

//createuser 

router.post('/user/create', methods.create)

// signin user 
router.post('/user/login',methods.signin)

//create projet 
router.post('/project/create',methods.createProject)

//update project 
router.patch('/project/update',methods.updateProject)

//get project list 
router.get('/project/all', methods.getProjectList)

//get one project 
router.get('/project', methods.getProject)

// delete project 
router.delete('/project/delete',methods.deleteProject)

// contact dev 
router.post('/user/contact',methods.sendEmail)



export default router;
