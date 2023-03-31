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

    const order = await Order.findById(orderId)
    if(!order){
      throw new Error("Order não existe.")
    }
    const newOrder = {id: order._id, status: order.status, draft: order.draft, name: order.name};

    const product = await Product.findById(productId); 
    if(!product){
      throw new Error("Product não existe.")
    }
    const newProduct = {id: product._id, name: product.name, price: product.price, description: product.description, banner: product.banner, categoryId: product.categoryId}


    const item = await Item.create({
      amount: ammout,
      orderId: orderId
    })
    item.order.push(newOrder)
    item.product.push(newProduct)

    await item.save();
    return item;
  }

  removeItemService =async (id:string) => {
    const item_id = new Types.ObjectId(id);
    const item = await Item.deleteOne({_id: item_id})
    return item;

  }

  sendOrderService =async (order_id: string) => {
    const orderId = new Types.ObjectId(order_id)
    const order = await Order.updateOne({_id: orderId}, {draft: false});
    return order;
  }

  listOrderService =async () => {
    const orders = await Order.find({}).where({status: false, draft: false}).sort([["createdAt", -1]]).exec()
    return orders;
  }

  detailOrderService =async (id: string) => {
    const order_id = new Types.ObjectId(id);
    const order = await Item.find({}).where({orderId: order_id}).sort([["createdAt", -1]]).exec();
  

    return order;
  }
};

export {orderSevice}