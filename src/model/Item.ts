import mongoose,{Schema, Types} from "mongoose";

const itemSchema = new Schema(
  {
    amount: Number,
    productId: Types.ObjectId,
    orderId: Types.ObjectId
  },
  {
    timestamps: true
  }
);

const Item = mongoose.model("Item", itemSchema);
export {Item};