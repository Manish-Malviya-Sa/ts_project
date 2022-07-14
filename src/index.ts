import express,{Request,Response} from "express";
import router from "./routes/routes";
import connect from "./config/db";
const app = express();

app.use('/',router);

app.get('/test', (req:Request, res:Response):void => {
    res.json({data: 'test data'})
})

connect();

app.listen(3000,()=>{
 console.log("port is listen on 3000");
})


// 205220694081