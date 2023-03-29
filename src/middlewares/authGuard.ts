import {verify} from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";

interface Payload{
  sub: string;
}

const authGuard =async (req: Request, res: Response, next: NextFunction) => {
   const authToken = req.headers.authorization;
   if(!authToken) return res.status(401).json({errors: ["Acesso negado."]});

   
   const [,token] =  authToken.split(" ");
   try {
     const {sub} = verify(
      token,
      process.env.JWT_SECRET,
     ) as Payload
     req.user_id = sub;
     return next();
   } catch (error) {
     res.status(401).json({ errors: ["token invalido"]})
   }
  
}

export {authGuard};
