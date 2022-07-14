import express,{Request,Response} from "express";
import UserModel from "../models/users"
import { createUser,findUser,findAndUpdate,deleteUser} from "../services/users.services";

// const Home =(req:Request, res:Response) => {
//   res.json({
//         message: 'home page'
//     });
//  };

//  export { Home };

class users{

    static home = async (req:Request, res:Response) => {
        
       // ADD
        // let data=  await createUser({ sub:"javascript",title:"demo"});

        // update 
       // let data=  await findAndUpdate({ sub:"flutter"},{title:"demo"},{new:true});

       //Delete
       //let data=  await deleteUser({ _id:"6269350c3e4faac9e726cde2"});

       // find All Users
       // const data = await UserModel.find();

       // find
       let data=  await findUser({ _id:"626937db335501d97f7c77f8"});
        res.json({
            message: 'home page',
            data:data,
        })
    };

    static AllUsers = async (req: Request, res: Response)=>{
        const data = await UserModel.find();
        res.json({
            message: 'home page',
            data:data,
        })
    }

    static AddUsers = async (req: Request, res: Response)=>{
       const users =new UserModel(req.body)
      
        console.log(users);
        users.save((err:any)=>{
          if(err){
              console.log(err);
            res.send(err)
          }
          else{
            res.json({
              message:"data are added",
              data:users
            })
          }
        })
    }
    
};

export default users;