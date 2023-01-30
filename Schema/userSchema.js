const mongoose = require("mongoose");
const increment = require("mongoose-auto-increment")


const UserSchema = mongoose.Schema({
        name:String,
        email:String,
        password:String,
        token:String
})

increment.initialize(mongoose.connection);
UserSchema.plugin(increment.plugin,"users")
const User =  mongoose.model("users",UserSchema);

module.exports = {User}