import { Router } from "express";

import { authGuard } from "../middlewares/authGuard";
import { handleValidation } from "../middlewares/handleValidation";
import { productValidation } from "../middlewares/productValidation";
import { productController } from "../controllers/productController";
import { imageUpload } from "../middlewares/uploadsImage";

const routeProduct = Router();
const handlevalidation = new handleValidation();
const productvalidation = new productValidation();
const productcontroller = new productController();

routeProduct.post('/', authGuard, imageUpload.single("banner") ,productvalidation.createProductValidation() , handlevalidation.validate, productcontroller.createProductController)
routeProduct.get('/', authGuard, productcontroller.FilterProductByIdCategoryService);



export {routeProduct};