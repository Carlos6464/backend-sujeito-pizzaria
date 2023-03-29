import { Request, Response } from "express";
import { productService } from "../services/productService";

class productController {
  createProductController =async (req: Request, res: Response) => {
    const {name, price, description,categoryId} = req.body;
   
  
    if (!req.file) {
      throw new Error("Error ao acessar a foto.")
    }else{
      const createproductservice = new productService();
      const { filename } = req.file;
      const product = await createproductservice.createProductService({
          name,
          price,
          banner: filename,
          description, 
          categoryId
      });

      res.status(201).json(product)
    }

    
  }

  FilterProductByIdCategoryService =async (req: Request, res:Response) => {
    const category_id = req.query.category_id as string;
  
    const filterproductservice = new productService();
    const products = await filterproductservice.FilterProductByIdCategoryService(category_id);

    res.status(200).json(products)
    
  }
}

export {productController}