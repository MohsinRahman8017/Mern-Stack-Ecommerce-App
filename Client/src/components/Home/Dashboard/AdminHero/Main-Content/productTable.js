import "./productTable.css";
import { useEffect, useRef, useState ,React } from "react";
import { useParams,Link, json} from "react-router-dom";
import { toast} from 'react-toastify';
import axios from "axios";

let ProductTable = () => {

    const {id} = useParams()

    const token = JSON.parse(localStorage.getItem("token"))
 
    let [getdata,setgetdata] = useState()

    useEffect(()=>{
        getproduct()
    },[])


    let getproduct = () => {

        fetch("http://localhost:8300/userproducts",{
            headers:{
                Authorization:token
            }
        })
        .then((response)=>{
            response.json().then((result)=>{
              setgetdata(result)
              
            })
        })
    }

    
    let Delete = (i) => {
       

        fetch(`http://localhost:8300/delete/${i}`,{
            method:"DELETE",          
            headers:{
                Authorization:token
            },
        }).then((result)=>{
            result.json().then((resp)=>{    
                console.log("user deleted") 
            })
        })

            getproduct()    
        
            toast.error(`product deleted successfully `,{
            position: 'top-center',
            })
          
 }

    return(
            <>
                <div className="producttable-wrapper" >
                    <div className="product-table-Header">
                        <div className="table-right">
                             <h2>Products</h2>
                        </div>

                        <div className="table-left">
                            <Link to="/dashboard/add" className="btn-blue">
                                <span className="material-symbols-outlined">add</span>
                                <h2>Add New</h2>
                            </Link>
                        </div>
                    </div>

                    <table className="table-Product">
                        <thead>
                            <th>ID</th>
                            <th>IMAGE</th>
                            <th>TITLE</th>
                            <th>CATEGORY</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </thead>


                    <tbody>
                     {
                        getdata ? getdata.map((item,index)=>{
                            let path = "http://localhost:8300/Files/" + item.file1

                           return    <tr key={index}>
                                        <td>{item._id}</td>
                                        <td >
                                            <div style={{width:"100%",height:"43px",display:"flex",alignitem:"center",justifyContent: "center"}}>
                                                <div style={{backgroundImage:`url(${path})`,width: "65px", height: "44px",backgroundSize:"Cover"}}>
                                            </div>
         
                                        </div>
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.category}</td>
                                        <td>{item.totalprice}</td>
                                        <td>
                                            <div style={{display:"flex",flexDirection:"row",alignItem:"center",justifyContent:"center",gap:"10px"}}> 
                                                <Link to={`/dashboard/edit/${item._id}`}><span className="material-symbols-outlined" style={{color:"blue"}}>edit</span></Link>
                                                <Link to={`/product/${item._id}`}><span className="material-symbols-outlined" style={{color:"green"}}>visibility</span></Link>
                                                <span className="material-symbols-outlined" style={{color:"red",cursor:"pointer"}} onClick={()=>Delete(item._id)} >delete</span>
                                            </div>
 
                                     </td>
                                                    
                                    </tr>
     
                        }):getdata
                     }
                     </tbody>          

                       
                        
                    </table>
                </div>
            </>
    );
}

export default ProductTable