import { useState ,useEffect} from "react";
import "./productDetails.css"
import { useSelector, useDispatch  } from 'react-redux'
import {useParams} from "react-router-dom"
import { decrement, increment,CounterValue } from './counterSlice'
import {AddItem } from "../Products/productId"


let ProductImage = () => {
    const dispatch = useDispatch()
    let count = useSelector((state) => state.counter.value)
    
    let {id } = useParams()
    const [data,setdata] = useState()
    const [title,settitle] = useState()
    const [price,setprice] = useState()
    const [category,setcategory] = useState()
    const [description,setdescription] = useState()
    const [color,setColor] = useState()
 
    useEffect(()=>{
        GetData()
    },[])
    
    let GetData = () => {
     
        fetch("http://localhost:8300/allproducts/"+id)
        .then((response)=>{
            response.json().then((result)=>{
                setdata(result[0])
                settitle(result[0].title)
                setprice(result[0].totalprice)
                setcategory(result[0].category)
                setdescription(result[0].description)
                setColor(result[0].color)
            })
        })
    }

    

  let ProductData = (product) => {    
    dispatch(AddItem(product))  
    // console.log(product)

  }

    return(
            <>
                <div className="Product-Details-Sec">
                    
                    <div className="Detail-wrapper">
                                <div className="Product-Title">
                                    <h2 >{title}</h2>
                                </div>
                                <div className="Price">
                                    <h2>{price}</h2>
                                </div>      
                                <div className="Color">
                                    <h2>Color : {color}</h2>
                                </div>      
                                <div className="Category">
                                    <h2>Category : {category}</h2>
                                </div>      
                                <div className="Details">
                                    <h2>Details : </h2>
                                    <p>{description}</p>
                                </div>   
                                
        
                                <div className="Cart">
                                    <div className="counter">
                                        <button className="decre" onClick={()=> dispatch(decrement())}>-</button>  
                                        <input type="number" value={count}/>
                                        <button className="incre" onClick={()=>dispatch(increment())}>+</button>  
                                    </div>
                                    <button className="Cartbtn" onClick={()=>ProductData(data)}>ADD TO CART</button>                        
                                </div>     
                                
                            </div>
                
                    
                </div>
            </>
    );
}

export default ProductImage