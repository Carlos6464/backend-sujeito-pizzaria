import { Product } from "../model/Product";
import { Category } from "../model/Category";
import  { Types } from "mongoose";

interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    categoryId: string,
}

class productService {
  createProductService =async ({name, price, banner, description, categoryId}:ProductRequest) => {
    const categoryid =  new Types.ObjectId(categoryId);
    const category = await Category.findById(categoryid);

    if(!category){
      throw new Error("Categoria não encontrada.")
    }
   
    const product = await Product.create({
      name,
      price,
      description,
      banner,
      categoryId: category._id
    })

    return product;
    
  }

  FilterProductByIdCategoryService =async (id: string) => {
    const categoryid =  new Types.ObjectId(id);
    const category = await Category.findById(categoryid);
 
    if(!category){
      throw new Error("Categoria não encontrada.")
    }

    const products = await Product.find({categoryId: categoryid._id}).sort([["createdAt", -1]]).exec()

    return products;
  }
}

export {productService};