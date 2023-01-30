import Header from "../Header/header"
import "./cart.css"
import { useEffect ,useState} from "react"
import { useSelector, useDispatch } from 'react-redux'
import {DecrementCart,IncrementCart} from "../Products/productId"
import {Link} from "react-router-dom"




let Cart = () => {
  
    const dispatch = useDispatch()
    const product = useSelector((state) => state.product.cartItem)
    const[Item,setItem] = useState(product)

    let handleIncrement = (e) => {
        dispatch(IncrementCart(e))
        
    }
     
    return (
             <>
                <Header/>
                <div className="Cart-Section-Wrapper">
                    <table className="table">
                        <thead>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                        
                        {

                         Item.map((item,id) => {

                            let price = item.totalprice
                            let split = price.split(" ");
                            let resultPrice = split[1] * item.cartQuantity

                            const path = "http://localhost:8300/Files/" + item.file1;
                                return  <tr>
                                            <td >
                                                <div style={{width:"79px",height:"65px" , display:"flex",alignItems:"center",justifyContent:"center"}}>
                                                    <div style={{backgroundImage:`url(${path})`,backgroundSize:"cover",width:"100%",height:"100%",position:"relative",left:"56px"}}></div>
                                                </div>
                                            </td>
                                            <td><Link to={`/product/${item._id}`}>{item.title}</Link></td>
                                            <td >{item.totalprice}</td>
                                            <td className="counter-wrapper">
                                                <div className="counter">
                                                    <button className="decre" onClick={()=>handleIncrement(item)}>-</button>  
                                                    <h2 type="number">{item.cartQuantity}</h2>
                                                    <button className="incre" onClick={()=>dispatch(IncrementCart(item))} >+</button>  
                                                </div>
                                            </td>
                                            <td>{split[0] + " " +resultPrice}</td>
                                         </tr>
                            })

                    
                        }
                            
                        </tbody>
                    </table>
                </div>
             </>
    );
}

export default Cart