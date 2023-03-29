import { sign } from "jsonwebtoken";
import { genSalt, hash, compare } from "bcryptjs";
import { User } from "../model/User";
import { Types } from "mongoose";


//generate token 



interface useRequest{
  name:string;
  email:string;
  password:string
}

interface loginRequest{
  email: string;
  password: string
}

class userService {
  
  //create user
  createUserService = async ( {name, email,password}: useRequest) => {
     const user = await User.findOne({email});
     if(user) {
      throw new Error("Por favor, insira outro email.")
     }

      //gerar hash da senha
      const salt = await genSalt();
      const passwordHash = await hash(password, salt);

      const newUser = await User.create({
        name,
        email,
        password: passwordHash
      })

      if(!newUser){
        throw new Error("Houve um error, por favor tente mais tarde.")
      }

     
      const token =  sign(
        {
          name: newUser.name,
          email: newUser.email
        }, 
        process.env.JWT_SECRET,
        {
         subject: newUser._id.toString(),
         expiresIn: "30d"
        }
        )
      
    
      return  {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        token: token
      };
  };

  //login user Service
  loginUserService = async ({email, password}: loginRequest) => {
      

      const user = await User.findOne({email});
      if(!user){
        throw new Error("Email invalido")
      }
      const verfyPassword = await compare(password, user.password);
      if(!verfyPassword){
        throw new Error("Senha invalida")
      }
      const token =  sign(
        {
          name: user.name,
          email: user.email,
        }, 
        process.env.JWT_SECRET,
        {
          subject: user._id.toString(),
          expiresIn: "30d"
        }
        )

      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        token: token
      }
  };

  //get By user Controller
  getByUserService =async (ReqUser) => {
 
    try {
      const ObjectId = new Types.ObjectId(ReqUser)
      const user = await User.findById(ObjectId).select("-password");
      if(!user){
        throw new Error("Usuario não existe.")
      }
      return user; 
    } catch (error) {
      throw new Error("Id invalido")
    }
  }

}

export {userService};