import { orderSevice } from "../services/orderService";
import { Request, Response } from "express";

class orderController {
  createOrderController = async (req: Request, res:Response) => {
    const {table, name} = req.body;
    const createrderservice = new orderSevice();
    const order = await createrderservice.createOrderService({
      table,
      name
    })

    return res.status(201).json(order);
  };

  removeOrderController = async (req: Request, res: Response) => {
    const order_id = req.query.order_id as string;

    const removeorderservice = new orderSevice();
    const order = await removeorderservice.removeOrderService(order_id);
    return res.status(200).json(order);
  }

  addItemController =async (req: Request, res: Response) => {
    const {order_id,product_id, ammout} = req.body;

    const additemservice = new orderSevice();
    const itens = await additemservice.addItensService({
      order_id,
      product_id,
      ammout  
    })

    res.status(201).json(itens);
    
  }

  removeItemController =async (req: Request, res: Response) => {
    const item_id = req.query.item_id as string;
    const removeitemservice = new orderSevice();
    const item = await removeitemservice.removeItemService(item_id);

    res.status(200).json(item);

  }

  sendOrderController =async (req: Request, res: Response) => {
    const {order_id}  = req.body;

    const sendorderservice = new orderSevice();
    const order = await sendorderservice.sendOrderService(order_id)
    res.status(200).json(order);
  }

  listOrderController =async (req: Request, res: Response) => {
    const listorderservice = new orderSevice();
    const orders = await listorderservice.listOrderService();

    res.status(200).json(orders)
  }

  detailOrderController =async (req:Request, res:Response) => {
    const order_id = req.query.order_id as string;

    const detailorderservice = new orderSevice();
    const order = await detailorderservice.detailOrderService(order_id);

    res.status(200).json(order);
  }
}

export { orderController};