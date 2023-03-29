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
  };

  removeOrderController =async (req: Request, res: Response) => {
    const order_id = req.query.order_id as string;

    const removeorderservice = new orderSevice();
    const order = await removeorderservice.removeOrderservice(order_id);
    return res.status(200).json(order);
  }
}

export { orderController};