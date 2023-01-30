
const jwt = require("jsonwebtoken")

const  {User} = require ("../Schema/userSchema")

const auth = (req,resp,next) => {

    console.log("AUTHORIZATION")
    try {
        const token =  req.headers.authorization
        if(token){   
                
            let user = jwt.verify(token,process.env.SECRET_KEY) 
            req.userId = user.id
        }
        else{
            resp.status(401).json({message:"Unathorized User"})
        }
        next()

    } 
    catch (error) {
        resp.status(401).json({message:"Unathorized User"})

    }
}

module.exports = {auth}