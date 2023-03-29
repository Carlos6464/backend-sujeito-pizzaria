import { orderSevice } from "../services/OrderService";
import { Request, Response } from "express";

class orderController {
  createOrderController =async (req: Request, res:Response) => {
    const {table, name} = req.body;
    const createrderservice = new orderSevice();
    const order = await createrderservice.createOrderService({
      table,
      name
    })

    return res.status(201).json(order);
  }
}

export { orderController};