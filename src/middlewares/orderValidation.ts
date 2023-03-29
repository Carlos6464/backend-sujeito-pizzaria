import { body } from "express-validator";

class orderValidation {
  createOrderValidation = () => {
    return[
      body("table")
          .isInt()
          .withMessage("O numero da mesa é obrigátorio"),
      body("name")
          .optional()
    ]
  }
}

export {orderValidation}