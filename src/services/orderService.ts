import { Types } from "mongoose";
import { Order } from "../model/Order";
import { Product } from "../model/Product";
import { Item } from "../model/Item";

interface OrderRequest{
  table: number;
  name: string
}

interface ItemRequest{
  order_id: string;
  product_id: string;
  ammout: number;
}

class orderSevice {
  createOrderService =async ({table, name}: OrderRequest) => {
     const order = await Order.create({
      table: table,
      name: name
     })

     return order
  }

  removeOrderService =async (id: string) => {
    const order_id = new Types.ObjectId(id);
    const order = await Order.deleteOne({_id: order_id});
    return order;
    
  }

  addItensService = async ({order_id, product_id, ammout}: ItemRequest) => {
    const orderId = new Types.ObjectId(order_id);
    const productId = new Types.ObjectId(product_id);

    if(!await Order.findById(orderId)){
      throw new Error("Order não existe.")
    }

    if(!await Product.findById(productId)){
      throw new Error("Product não existe.")
    }

    const item = await Item.create({
      amount: ammout,
      orderId: orderId,
      productId: productId
    })

    return item;
  }

  removeItemService =async (id:string) => {
    const item_id = new Types.ObjectId(id);
    const item = await Item.deleteOne({_id: item_id})
    return item;

  }
};

export {orderSevice}