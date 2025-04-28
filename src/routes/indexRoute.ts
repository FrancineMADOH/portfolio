import express, {Request, Response} from "express";
import { ProjectHandler } from "../handlers/projectHandler";
import { verifyToken } from "../utils/jwt";

const router = express.Router();
const methods = new ProjectHandler();



// signin user 
router.post('/user/login',methods.signin)

//createuser 

router.post('/user/create',verifyToken,methods.create)

//create projet 
router.post('/project/create',verifyToken, methods.createProject)

//update project 
router.patch('/project/update',verifyToken,methods.updateProject)

//get project list 
router.get('/project/all', methods.getProjectList)

//get one project 
router.get('/project', methods.getProject)

// delete project 
router.delete('/project/delete',verifyToken, methods.deleteProject)

// contact dev 
router.post('/user/contact',methods.sendEmail)

// signout the user 
router.post('/user/contact',methods.sendEmail)


export default router;
