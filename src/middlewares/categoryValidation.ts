import { body } from "express-validator";

class categoryValidation {
  createCategoryValidation = () => {
    return[
      body("name")
          .isString()
          .withMessage("O nome é obrigátorio")
          .isLength({min: 3})
          .withMessage(" O campo nome têm que ter no minimo 3 caracteres."),
    ]
  }
}

export {categoryValidation}