import express, { Request, Response, NextFunction, urlencoded } from "express";
import 'express-async-errors'
import {router} from "./router/router";
import path from "path";
import {conn} from "./config/bd";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json())
app.use(urlencoded({extended:false}));

app.use(cors({credentials: true, origin: "http://localhost:3000"}));

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(router)

conn;

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error){
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  })
})

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`)
})