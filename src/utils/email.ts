import nodemailer from "nodemailer";
import dotenv from "dotenv"; 
import { error } from "console";

dotenv.config();

//create transporter 

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: '#' + process.env.EMAIL_PASS,
    },
  });

//verify connection 

transporter.verify((error)=>{
    if(error){
        console.log(error)
        throw new Error(`Failed to connec to the server ${error}`);
    }else{
        console.log('Server ready to send emails...')
    }
});


//sending email 
export const sendEmail = async(subject:string,text:string, html?: string)=>{
    try {
        const info = await transporter.sendMail({ 
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject,
            text,
            html : html || text
        });
        console.log('message sent: ', info.messageId)
        return info;
        
    } catch (error) {
        console.log('error sending message', error);
        throw error;
        
    }
}