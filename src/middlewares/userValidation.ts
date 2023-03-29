import {body} from "express-validator";



class userValidation {
  createUserValidation = () => {
    return [
      body("name")
          .isString()
          .withMessage("O nome é obrigátorio")
          .isLength({min: 3})
          .withMessage(" O campo nome têm que ter no minimo 3 caracteres."),
      body("email")
          .isString()
          .withMessage("O email é obrigátorio")
          .isEmail()
          .withMessage("insira um email valido.")
          .isLength({min: 6})
          .withMessage(" O campo email têm que ter no minimo 6 caracteres."),
      body("password")
          .isString()
          .withMessage("A senha é obrigátoria")
          .isLength({min: 6})
          .withMessage(" O campo senha têm que ter no minimo 6 caracteres."),
      body("confirmPassword")
          .isString()
          .withMessage("A confirmação de senha é obrigátoria")
          .custom((value, {req}) => {
            if(value != req.body.password){
                throw new Error("As senhas não são iguais.")
            }
            return true;
           }),  
    ]
  };

  loginUserValidation = () => {
    return [
      body("email")
      .isString()
      .withMessage("O email é obrigátorio")
      .isEmail()
      .withMessage("insira um email valido.")
      .isLength({min: 6})
      .withMessage(" O campo email têm que ter no minimo 6 caracteres."),
  body("password")
      .isString()
      .withMessage("A senha é obrigátoria")
      .isLength({min: 6})
      .withMessage(" O campo senha têm que ter no minimo 6 caracteres."),
    ]
  }
};

export {userValidation};