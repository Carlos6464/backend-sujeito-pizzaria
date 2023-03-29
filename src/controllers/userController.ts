import { Request, Response } from "express";
import {userService} from "../services/userService";
class userController {
  //create user controller
   createUserController =  async(req: Request, res: Response) => {
      const {name, email, password} = req.body;
       const createUserService = new userService()
       const user = await createUserService.createUserService({
        name,
        email,
        password
       })
       res.status(201).json(user)
  }

  //login user controller
  loginUserController =async (req: Request, res: Response) => {
    const {email, password} = req.body;
    const loginUserService = new userService();
    const user = await loginUserService.loginUserService({email, password})

    res.status(200).json(user)
  }

  getByUserController =async (req: Request, res: Response) => {
    const ReqUser = req.user_id
    const getByUserService = new userService();
    const user = await getByUserService.getByUserService(ReqUser)

    res.status(200).json(user)
  }
}

export { userController};