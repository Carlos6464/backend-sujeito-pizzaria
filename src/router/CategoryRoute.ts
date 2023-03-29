import { Router } from "express";

import { authGuard } from "../middlewares/authGuard";
import { categoryValidation } from "../middlewares/categoryValidation";
import { handleValidation } from "../middlewares/handleValidation";

import { categoryController } from "../controllers/categoryController";

const routeCategory = Router();

const categorycontroller = new categoryController()
const categoryvalidation = new categoryValidation()
const handlevalidation = new handleValidation()



routeCategory.post('/', authGuard, categoryvalidation.createCategoryValidation(), handlevalidation.validate, categorycontroller.createCategoryController )
routeCategory.get('/', authGuard, categorycontroller.listcategorysController);



export {routeCategory};