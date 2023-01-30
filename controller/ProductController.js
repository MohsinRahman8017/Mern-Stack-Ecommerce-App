
const {Product} = require("../Schema/schema")

let Add_Products = async (req,resp) => {

    try {      
        let Product_details = req.body;
        let images = {
                file1: req.files.file1[0].originalname,
                file2: req.files.file2[0].originalname,
                file3: req.files.file3[0].originalname,
                file4: req.files.file4[0].originalname
            };
      
        Product_details = {
            ...Product_details,
            ...images,
            userId : req.userId
        }
    
        console.log(Product_details)
        const NewProduct = new Product (Product_details)

        try {
            await NewProduct.save();
            resp.status(201).json(NewProduct)
        } catch (error) {
            resp.status(404).json({message:error.message})
        }
   

        
    } catch (error) {
        resp.status(404).json({message:error.message})

    }

}

let getproduct = async (req,resp) => {

    try {
        const products = await Product.find({})      
        resp.status(201).json(products)

        
    } catch (error) {
        resp.status(404).json({message:error.message})

    }
}
let userproducts = async (req,resp) => {
  
    try {
        const products = await Product.find({userId:req.userId})   
        resp.status(201).json(products)

        
    } catch (error) {
        resp.status(404).json({message:error.message})

    }
}

let getSingleProducts = async(req,resp) => {
        // console.log(req.params.id)
   try {
    const products = await Product.find({_id:req.params.id})
    resp.status(201).json(products)


   } catch (error) {
    resp.status(404).json({message:error.message})

   }

}

let update  = async(req,resp) => {
    let Productdetails = req.body;

    const old = await Product.findOne({_id:req.params.id})

    let file1 = !req.files.file1 ? old.file1 : req.files.file1[0].originalname
    let file2 = !req.files.file2 ? old.file2 : req.files.file2[0].originalname
    let file3 = !req.files.file3 ? old.file3 : req.files.file3[0].originalname
    let file4 = !req.files.file4 ? old.file4 : req.files.file4[0].originalname

    let image = {file1,file2,file3,file4 }


    Productdetails = {
        ...Productdetails,
        ...image
    }

    const NewProduct = new Product (Productdetails)


     try {
       const Products = await Product.updateOne({_id:req.params.id},{$set:NewProduct});
        resp.status(200).json(Products)
            

     } catch (error) {       
         resp.status(404).json({message:error.message})

     }
    
}

let Delete  = async (req,resp) => {
    try {
         let product = await Product.deleteOne({_id:req.params.id})
         resp.status(200).json(product)

    } catch (error) {
        resp.status(404).json({message:error.message})

    }
}

module.exports = {
    Add_Products,getproduct,getSingleProducts,update,Delete,userproducts
}