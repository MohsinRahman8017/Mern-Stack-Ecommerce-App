
import { useEffect, useState } from "react";
import {Link,useParams} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import {AddItem} from "./productId"



import "./products.css"


let Product = () => {

    const dispatch = useDispatch()
    const [data,setdata] = useState([])
    const [filterdata,setfilterdata] = useState([])
    let {id } = useParams()

    
    useEffect(()=>{
        GetData()
    },[])
    
    let GetData = () => {
      
        fetch("http://localhost:8300/allproducts")
        .then((response)=>{
            response.json().then((result)=>{              
                setdata(result)
                setfilterdata(result)
                
            })
        })
    }


    let FilterProduct = (CatItem) => {
        
        let result = filterdata.filter((storedata)=>{
             return  storedata.category.trim() === CatItem
            })
         setdata(result)
    
    }


    // This Function Will Filter Out All The Array Item
    let FilterAllProduct = () => {
        setdata(filterdata)
    }

 
    const product = useSelector((state) => state.product.cartItem)
 
    return (
             <>
                <div className="Product-Outer-Wrapper">
                    <div className="filter-wrapper">
                        <ul>
                            <li onClick={ ()=> FilterAllProduct()}>All</li>             
                            <li onClick={ ()=> FilterProduct("Shoes")}>Shoes</li>
                            <li onClick={ ()=> FilterProduct("Cloth")}>Cloth</li>
                            <li onClick={ ()=> FilterProduct("Phone")}>Mobile Phones</li>
                            <li onClick={ ()=> FilterProduct("Car")}>Cars</li>
                        </ul>
                    </div>

                    <div className="Cards-section">
                        <div className="Card-section-inner-wrapper">
                           {
                            data.map((item,value)=>{

                                    return  <div className="Card-wrapper" key={value} > 
                                             <div className="Card-Img" style={{backgroundImage:`url(http://localhost:8300/Files/${item.file1})`,backgroundSize:"cover"}} >
                                                {/* //  <img src={`http://localhost:8300/Files/`+item.file1}/> */}
                                             </div>

                                            <div className="Card-Details">

                                                <div className="title">
                                                    <h2>{item.title}</h2>
                                                </div>

                                                <div className="price">
                                                    <h2>{item.totalprice}</h2>
                                                </div>
                                                <div className="add-to-cart">
                                                    <Link to={`/product/${item._id}`} >View More</Link>
                                                    
                                                </div>
                                            </div>
                                        </div>
                            
                                         
                                    })
                                }
                        </div>
                    </div>
                </div>
             </>
    ) ;
}

export default Product