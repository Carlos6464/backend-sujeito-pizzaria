import { Category } from "../model/Category";

interface requestCategory{
  name: string
}

class categoryService {
  createCategoryService =async ({name}:requestCategory) => {
     const category = await Category.findOne({name});

     if (category) {
        throw new Error("A categoria já esta cadastrada no sistema.");
     }

     const newCategory = await Category.create({name})

     if(!newCategory) throw new Error("Houve um error, por favor tente mais tarde.")

     return newCategory;
  }

  ListCategorysService =async () => {
    const categories = await Category.find({}).sort([["createdAt", -1]]).exec();

    return categories;
  }
}

export {categoryService};