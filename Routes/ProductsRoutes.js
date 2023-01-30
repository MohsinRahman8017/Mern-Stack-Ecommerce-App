const express =  require("express");
const ProductRoutes = express.Router();
const {upload} = require("../controller/Upload")
const {auth} = require("../middlewares/auth")

const {Add_Products, getproduct,getSingleProducts,update,Delete,userproducts} =  require("../controller/ProductController");

ProductRoutes.post("/add-product",auth,upload,Add_Products)
ProductRoutes.get("/allproducts",getproduct)
ProductRoutes.get("/userproducts",auth,userproducts)
ProductRoutes.get("/allproducts/:id",getSingleProducts)
ProductRoutes.put("/update/:id",auth,upload,update)
ProductRoutes.delete("/delete/:id",auth,Delete)

module.exports = {ProductRoutes}