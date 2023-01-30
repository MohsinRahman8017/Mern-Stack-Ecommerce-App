
import "./Signup-form.css"
import {Link,useNavigate} from "react-router-dom"
import {axios} from "axios"
import { toast} from 'react-toastify';
import {useState} from "react"

let SignUp_form = () => {

      const[name,setname] = useState()
      const[email,setemail] = useState()
      const[password,setpassword] = useState()

      const navigate = useNavigate()
      
      let Register =  (e) => {
         const user = {name,email,password}
         
         e.preventDefault()


         if(name && email && password){

            fetch(`http://localhost:8300/signup`,{
               method : "POST", 
               headers:{
                 
              },            
               body:JSON.stringify(user),
           }).then((result)=>{
               console.log(result)
               result.json().then((resp)=>{
                  if(resp.message == "user Already Register"){
                     toast.warn(`${resp.message}`,{
                        position: 'top-center',
                        })
                  }else{
                     toast.success(`${"user registered successfully"}`,{
                        position: 'top-center',
                     })
                     // navigate('/login');
                     

                  }
                  
   
               })
           })
            
         }
         else{
            e.preventDefault()
         }
      }
 
    return(

            <>
              <div className="login-outer-wrapper">
                 <div className="login-left-wrapper">
                    <div className="login-inner-wrapper">
                       <div className="login-title">
                            <h2>Sign Up to </h2> <h2>Green Square</h2>
                       </div>

                       <div className="login-Social-media">
                          <button style={{background:"#00a693", color:"white",width: "27%", height: "80%", display: "flex", alignItems: "center",justifyContent: "center", border: "none", borderRadius: "20px"}}>
                                facebook
                          </button>
                          <button style={{ background:"#00a693", color:"white",width: "27%", height: "80%", display: "flex", alignItems: "center",justifyContent: "center", border: "none", borderRadius: "20px"}}>
                                Google
                          </button>
                       </div>

                        <div className="some-text">
                            <h2>or use you email account</h2>
                        </div>

                        <form className='form' method="post" action="/signup" encType="multipart/form-data" >
                           <div className="Email">
                             <span className="material-symbols-outlined" style={{color:"gray",fontSize:"20px"}}><span class="material-symbols-outlined">person_filled</span></span>
                             <input type="text" placeholder="Name" name="name" className="Email-input" onChange={(e)=>{
                              setname(e.target.value)
                             }}  />
                           </div>

                           <div className="Email">
                             <span className="material-symbols-outlined" style={{color:"gray",fontSize:"20px"}}>mail</span>
                             <input type="email" placeholder="Email" name="email"  className="Email-input" onChange={(e)=>{
                              setemail(e.target.value)
                             }} />
                           </div>

                           <div className="Password">
                             <span className="material-symbols-outlined" style={{color:"gray",fontSize:"20px"}}>lock</span>
                             <input type="password" placeholder="Password" name="password" className="Password-input" onChange={(e)=>{
                              setpassword(e.target.value)
                             }} />
                           </div>

                           <div className="forget">
                                <h2>Forgot your password?</h2>
                           </div>

                           <div className="SignIn">
                                <button type="submit" onClick={Register}>SIGN IN</button>
                           </div>
                        </form>
                    </div>
                 </div>

                 <div className="login-right-wrapper">
                    <div className="inner-wrapper-signup">
                       <div style={{width:"100%",height:"20%",alignItems:"center",justifyContent:"center",display:"flex"}}>
                            <h2 style={{fontSize:"37px",color:" white",fontFamily:"sans-serif"}} className="Welcome" > Welcome Back</h2>
                       </div>

                       <div style={{width:"100%",height:"20%",alignItems:"center",justifyContent:"center",display:"flex"}}>
                            <h2 style={{fontSize:"15px",color:" white",fontFamily:" system-ui",fontWeight:"200"}}>If you do have account<br/> then please Sign In</h2>
                       </div>

                       <div className="SignUp">
                              <Link to="/login" >SIGN IN</Link>
                           </div>


                    </div>
                 </div>
              </div>
            </>
    )
}

export default SignUp_form