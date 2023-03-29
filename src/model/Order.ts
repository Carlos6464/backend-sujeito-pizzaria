import{Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    table: Number,
    status:{type: Boolean, default: false},
    draft: {type: Boolean, default: true},
    name: String
  },
  {
    timestamps: true
  }
);

const Order = model("Order", orderSchema);
export {Order};