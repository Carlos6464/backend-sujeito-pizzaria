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
routeOrder.delete('/', authGuard, ordercontroller.removeOrderController)
routeOrder.post('/item', authGuard, ordervalidation.addItemValidation(), handlevalidation.validate, ordercontroller.addItemController);
routeOrder.delete('/item', authGuard, ordercontroller.removeItemController);
routeOrder.put('/send', authGuard, ordercontroller.sendOrderController);
routeOrder.get('/', authGuard, ordercontroller.listOrderController);
routeOrder.get('/detail', authGuard, ordercontroller.detailOrderController);



export {routeOrder};