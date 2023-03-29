import { Router} from "express";
import {routeUser} from "./UserRoute";
import {routeCategory} from "./CategoryRoute";
import { routeProduct } from "./ProductRoute";

const router = Router();
router.use("/api/users", routeUser);
router.use("/api/category",routeCategory);
router.use("/api/product", routeProduct);



export {router};

