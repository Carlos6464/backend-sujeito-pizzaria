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

  addItemValidation = () => {
    return [
      body("ammout")
        .isInt()
        .withMessage("A quantidade de itens é obrigátoria.") 
    ]
}

}

export {orderValidation}