import { Router } from "express";

import { authGuard } from "../middlewares/authGuard";
import { orderValidation } from "../middlewares/orderValidation";
import { handleValidation } from "../middlewares/handleValidation";

import { orderController } from "../controllers/orderController";

const routeOrder = Router();

const ordercontroller = new orderController()
const ordervalidation = new orderValidation()
const handlevalidation = new handleValidation()



routeOrder.post('/', authGuard, ordervalidation.createOrderValidation(), handlevalidation.validate, ordercontroller.createOrderController );



export {routeOrder};