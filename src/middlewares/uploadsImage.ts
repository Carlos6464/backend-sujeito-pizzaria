import multer from "multer";
import path from "path";

const imageStore = multer.diskStorage({
  destination: function (Request, file, cb) {
    let folder = "";
    if(Request.baseUrl.includes("product")){
      folder = "product"
    }

    cb(null, `uploads/${folder}`)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const imageUpload = multer({
  storage: imageStore,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // upload only png and jpg format
      return cb(new Error("Por favor, envie apenas png ou jpg!"));
    }
    cb(undefined, true);
  },
});

export {imageUpload};
