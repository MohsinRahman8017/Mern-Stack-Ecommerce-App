
import "./login-form.css"
import {json, Link, useNavigate} from 'react-router-dom'
import {useEffect, useState} from "react"
import { toast} from 'react-toastify';


let Login_form = (props) => {

      const navigate = useNavigate()
      const [email,setEmail] = useState()
      const [password,setPassword] = useState()
      const [result,setresult] = useState({})
      
      let Submit = (e) => {


         const user = {email,password}

         e.preventDefault()

         if(email && password){

            fetch(`http://localhost:8300/signin`,{
               method : "POST", 
               headers:{
                  "Accept" : "application/json",
                  "Content-Type" : "application/json"
              },            
               body:JSON.stringify(user),
           }).then((result)=>{
               result.json().then((resp)=>{
                  
                  if(resp.message == "Login Successfully"){
                     toast.success(`${resp.message}`,{
                      position: 'top-center',
                      })
                      // save this token in localstorage -> resp.user.token
                     //  props.token(token);
                     localStorage.setItem("token",JSON.stringify(resp.token))
                     localStorage.setItem("user",JSON.stringify(resp.user.name))

                     navigate("/dashboard")
                      
                     
                  }
                  else{
                     toast.error(`${resp.message}`,{
                        position: 'top-center',
                        })
                  }

               //   setresult(resp.user)
                 
               })

            })
            
         }
       
      }

    return(

            <>
              <div className="login-outer-wrapper">
                 <div className="login-left-wrapper">
                    <div className="login-inner-wrapper">
                       <div className="login-title">
                            <h2>Sign in to </h2> <h2>Green Square</h2>
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

                        <form className='form'>
                           <div className="Email">
                             <span className="material-symbols-outlined" style={{color:"gray",fontSize:"20px"}}>mail</span>
                             <input type="email" placeholder="Email" className="Email-input" onChange={(e)=>{
                              setEmail(e.target.value)
                             }} />
                           </div>

                           <div className="Password">
                             <span className="material-symbols-outlined" style={{color:"gray",fontSize:"20px"}}>lock</span>
                             <input type="password" placeholder="Password" className="Password-input" onChange={(e)=>{
                              setPassword(e.target.value)
                             }} />
                           </div>

                           <div className="forget">
                                <h2>Forgot your password?</h2>
                           </div>

                           <div className="SignIn">
                                <button type="submit" onClick={Submit}>SIGN IN</button>
                           </div>
                        </form>
                    </div>
                 </div>

                 <div className="login-right-wrapper">
                    <div className="inner-wrapper-signup">
                       <div style={{width:"100%",height:"20%",alignItems:"center",justifyContent:"center",display:"flex"}}>
                            <h2 style={{fontSize:"37px",color:" white",fontFamily:"sans-serif"}} className="Welcome" >Hello Welcome!</h2>
                       </div>

                       <div style={{width:"100%",height:"20%",alignItems:"center",justifyContent:"center",display:"flex"}}>
                            <h2 style={{fontSize:"15px",color:" white",fontFamily:" system-ui",fontWeight:"200"}}>Enter your personal details<br/> and login to access site</h2>
                       </div>

                       <div className="SignUp">
                                <Link to="/signup" >SIGN UP</Link>
                           </div>


                    </div>
                 </div>
              </div>
            </>
    )
}

export default Login_form