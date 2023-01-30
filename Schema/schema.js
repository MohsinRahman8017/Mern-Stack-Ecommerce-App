const mongoose = require("mongoose");
const increment = require("mongoose-auto-increment")


const ProductSchema = mongoose.Schema({
    title:String,
    description:String,
    category:String,
    color:String,
    totalprice:String,
    file1:String,
    file2:String,
    file3:String,
    file4:String,
    userId:String
    
})

increment.initialize(mongoose.connection);
ProductSchema.plugin(increment.plugin,"ecommerces")

const Product =  mongoose.model("ecommerces",ProductSchema);

module.exports = {Product}