import mongoose,{Schema, Types} from "mongoose";

const itemSchema = new Schema(
  {
    amount: Number,
    orderId: Types.ObjectId,
    product: Array,
    order: Array
 
  },
  {
    timestamps: true
  }
);

const Item = mongoose.model("Item", itemSchema);
export {Item};