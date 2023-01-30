const mongoose =  require("mongoose");

const Connection = (username,password) => {

    const URL = `mongodb+srv://${username}:${password}@crud-app.cs2auk0.mongodb.net/?retryWrites=true&w=majority`;

    try {
        mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
        console.log("Data Base Connected Successfully")
    } catch (error) {
        console.log("error While Connecting With Data Base",error)
    }
}

module.exports= {Connection}