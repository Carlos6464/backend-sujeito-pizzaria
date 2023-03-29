import { Request, Response } from "express";
import { categoryService } from "../services/categoryService";


class categoryController {
    createCategoryController =async (req: Request, res: Response) => {
      const {name} = req.body;
      const categoryservice = new categoryService();
      const category = await categoryservice.createCategoryService({name})

      return res.status(201).json(category)


    }
    listcategorysController =async (req: Request, res:Response) => {
      const categoryservice = new categoryService();
      const categories = await categoryservice.ListCategorysService();

      return res.status(200).json(categories);
    }

} 

export {categoryController}