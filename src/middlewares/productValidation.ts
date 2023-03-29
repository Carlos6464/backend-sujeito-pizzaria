import { body } from "express-validator";

class productValidation {
  createProductValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("O nome é obrigátorio")
            .isLength({min: 3})
            .withMessage(" O campo nome têm que ter no minimo 3 caracteres."),
        body("price")
            .isString()
            .withMessage("O preço é obrigátorio"),
        body("description")
            .isString()
            .withMessage("A descrição é obrigátoria")
            .isLength({min: 3})
            .withMessage(" O campo descrição têm que ter no minimo 3 caracteres."),
        body("banner")
            .custom((value, {req}) => {
              if(!req.file){
                throw new Error("A imagem é obrigatória.")
              }
              return true;
            }),
        body("categoryId")
            .isString()
            .withMessage("A categoria do produto é obrigátoria"),
    ]
  }
}

export {productValidation};