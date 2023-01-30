const {User} = require("../Schema/userSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

let SignUp = async (req,resp) => {

    let userdetail = req.body   
    
     userdetail = {
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
    }

    const users = await User.findOne({email:userdetail.email})
    
    if(users){
        resp.send({message:"user Already Register"})
    }
    else{

       const hashedPassword = await bcrypt.hash(userdetail.password,10)

       const newUserData = {
            name : userdetail.name,
            email : userdetail.email,
            password : hashedPassword,
       }

        let user = new User(newUserData) //Create New User
        user.save(err=>{
            if(err){
                resp.send(err)
            }else{
                const token = jwt.sign({email:userdetail.email,id:userdetail._id},process.env.SECRET_KEY)
                resp.status(201).send({user:user,token:token})
            }
        })
    }

  
}

let SignIn = async (req,resp) => {

    let userdetail = req.body   
    
    userdetail = {
           email : req.body.email,
           password : req.body.password,
   }


   const user = await User.findOne({email:userdetail.email})

     const matchPassword = await bcrypt.compare(userdetail.password,user.password )

        if(user){

            if(matchPassword){
                const token = jwt.sign({email:userdetail.email,id:user._id},process.env.SECRET_KEY)
                resp.send({message:"Login Successfully", user:user,token:token})

            }
            else{
                resp.send({message:"Password did no match"})
            }
        }else{
            resp.send({message:"User Not Registered"})
        }


}

module.exports = {
    SignIn,SignUp,
}
