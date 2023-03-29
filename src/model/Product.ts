import {Schema, model, Types} from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    price: String,
    description: String,
    banner: String,
    categoryId: Types.ObjectId
  },
  {
    timestamps:true
  }
);

const Product = model("Product", productSchema);
export {Product};