import express, {Application, Request, Response} from "express"

const app : Application = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use


app.get("/", (req : Request , res : Response) => {

    res.send("Hello")
})








export default app;