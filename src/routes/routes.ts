import express,{Request,Response} from "express";
import userController from "../controllers/users"
const router = express.Router();

router.get('/home', userController.home );
router.get('/AllUsers', userController.AllUsers);
router.post('/AddUsers', userController.AddUsers);

router.get('/about', (req:Request, res:Response) => {
    res.json({
        message: 'about page'
    })
})

export default router;