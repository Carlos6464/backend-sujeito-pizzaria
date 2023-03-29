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
};

export {orderSevice}