import{Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    table: Number,
    status: Boolean,
    draft: Boolean,
    name: String
  },
  {
    timestamps: true
  }
);

const Order = model("Order", orderSchema);
export {Order};