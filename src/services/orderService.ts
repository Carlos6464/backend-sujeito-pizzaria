import { Types } from "mongoose";
import { Order } from "../model/Order";

interface OrderRequest{
  table: number;
  name: string
}

class orderSevice {
  createOrderService =async ({table, name}: OrderRequest) => {
     const order = await Order.create({
      table: table,
      name: name
     })

     return order
  }

  removeOrderservice =async (id: string) => {
    const order_id = new Types.ObjectId(id);
    const order = await Order.deleteOne({_id: order_id});
    return order;
    
  }
};

export {orderSevice}