import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/indexRoute";


const app:express.Application = express();
const port = 5000;

const corsOptions = {
    origin:process.env.DOMAIN,
    optionSuccessStatus:200
}
//call the api route
app.use('/api', router);

app.use(bodyParser.json());
app.use(cors(corsOptions));


app.listen(5000, ()=>{
    console.log(`starting app on port ${port}`)
});