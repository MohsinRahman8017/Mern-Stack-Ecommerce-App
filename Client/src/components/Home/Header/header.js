
import { Link,useNavigate } from "react-router-dom";
import "./header.css"
import { useSelector} from 'react-redux'
import { useEffect, useState } from "react";
// import {AddItem} from "./productId"


let Header = () => {

    const[sidebar,setsidebar] = useState("sidebar-left-hide")

    const Tab = () => {
         sidebar == "sidebar-left-hide" ? setsidebar("sidebar-left"):setsidebar("sidebar-left-hide")
    }


    const navigate = useNavigate()
    const product = useSelector((state) => state.product.cartItem)
    const[cart,setcart] = useState("numHide")

    useEffect(()=>{
        if(product.length < 1){
             setcart("numHide")
        }
        else{
            setcart("num")
        }
    })

    // console.log(product.length)

    let Register = () => {
        navigate("/signup")
    }


    return(
            <>
              <div className="outer-wrapper">
                <div className="header-logo">
                    <Link to="/">Green Square</Link>
                </div>

                <div className="Nav-left">
                    <Link to="/">Home</Link>
                    <Link to="/">Product</Link>
                    <Link to="/">Contact</Link>
                </div>

                <div className="Nav-right">
                    <div>
                        <span className="material-symbols-outlined">search</span>
                     <Link to="/product/cart" >
                        <div className="cart"> 
                          <h2 className={cart}>{product.length}</h2>
                          <span className="material-symbols-outlined">shopping_cart</span>
                       </div>
                    </Link>

                        <Link to="/login"><button className="login">Login</button></Link>
                        <button className="register" onClick={Register}>Register</button>
                    </div>                
                </div>

                <div className="tab" >
                    <span className="material-symbols-outlined" onClick={Tab} >menu</span>
                </div>
               
              </div>

              <div className={sidebar}>
                <div className="cancel">
                 <span className="material-symbols-outlined" onClick={Tab}>cancel</span>
                </div>
                    <div className="content">
                     <Link to="/"  className="home">Home</Link>
                     <Link to="/product/cart" >
                        <div className="cart" > 
                          <h2 className={cart}>{product.length}</h2>
                          <span style={{fontSize:"35px"}} className="material-symbols-outlined">shopping_cart</span>
                       </div>
                    </Link>

                        <Link to="/login"><button className="login">Login</button></Link>
                        <button className="register" onClick={Register}>Register</button>
                    </div>                
             </div>

           
            
            </>
    );
}

export default Header