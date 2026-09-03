import express, {Application, Request, Response} from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import config from "./config"
import { prisma } from "./lib/prisma";

const app : Application = express();

app.use(cors ({
    origin : config.app_url,
    credentials : true
}))

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser())

/* Checking the database connection and fetching users from the database

app.get("/", async(req : Request , res : Response) => {
   
    const user = await prisma.user.findMany()
    console.log(user)
    res.send("Hello")
})
*/

app.get("/", (req : Request , res : Response) => {
   
   
    res.send("Hello")
})

export default app;


