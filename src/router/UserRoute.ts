import { Router} from "express";
const routeUser = Router();

import {handleValidation} from "../middlewares/handleValidation";
import {userValidation } from "../middlewares/userValidation";
import { authGuard } from "../middlewares/authGuard";
import {userController} from "../controllers/userController";

const useValidation = new userValidation()
const handlevalidation = new handleValidation()
const useController = new userController();


routeUser.post('/register', useValidation.createUserValidation() ,handlevalidation.validate, useController.createUserController);
routeUser.post('/login', useValidation.loginUserValidation(), handlevalidation.validate, useController.loginUserController);
routeUser.get('/', authGuard, useController.getByUserController);

export {routeUser};