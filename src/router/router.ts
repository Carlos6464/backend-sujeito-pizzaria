import { Router} from "express";
import {routeUser} from "./UserRoute";
import {routeCategory} from "./CategoryRoute";
import { routeProduct } from "./ProductRoute";
import { routeOrder } from "./OrderRoute";

const router = Router();
router.use("/api/users", routeUser);
router.use("/api/category",routeCategory);
router.use("/api/product", routeProduct);
router.use("/api/order", routeOrder);



export {router};

