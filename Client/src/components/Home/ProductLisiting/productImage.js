import "./productImage.css"
import { useEffect, useRef, useState } from "react";
import { useParams} from "react-router-dom";



let ProductImage = () => {
   
    const{id} = useParams()

    const[LargeImg,setLargeImg] = useState()
    const[ChildImg1,setChildImg1] = useState()
    const[ChildImg2,setChildImg2] = useState()
    const[ChildImg3,setChildImg3] = useState()

    useEffect(()=>{
        loadProduct()
    },[])
    
    let loadProduct = () => {

      
        fetch(`http://localhost:8300/allproducts/${id}`)
        .then((response)=>{
            response.json().then((result)=>{
                setLargeImg(result[0].file1)
                setChildImg1(result[0].file2)
                setChildImg2(result[0].file3)
                setChildImg3(result[0].file4)
            })
        })
    }

    var Getimage1 = () => {
        setLargeImg(ChildImg1)
    }

    var Getimage2 = () => {
        setLargeImg(ChildImg2)
    }
    var Getimage3 = () => {
        setLargeImg(ChildImg3)
    }

    
    return(
            <>
                <div className="Product-Image-Sec">
                                    
                    <div className="child-img-wrapper">
                        <div className="inner-wrapper">
                         
                          <div className="wrapper-img"style={{backgroundImage:`url(http://localhost:8300/Files/${ChildImg1})`,backgroundSize:"cover",}}  onClick={Getimage1}> 
                             {/* <img src={"http://localhost:8300/Files/" + ChildImg1} onClick={Getimage1} /> */}
                             
                          </div>

                          <div className="wrapper-img" style={{backgroundImage:`url(http://localhost:8300/Files/${ChildImg2})`,backgroundSize:"cover",}}  onClick={Getimage2}> 
                             {/* <img src={"http://localhost:8300/Files/" + ChildImg2} onClick={Getimage2}/> */}
                          </div>

                          <div className="wrapper-img" style={{backgroundImage:`url(http://localhost:8300/Files/${ChildImg3})`,backgroundSize:"cover",}}  onClick={Getimage3}> 
                             {/* <img src={"http://localhost:8300/Files/" + ChildImg3} onClick={Getimage3}/> */}
                          </div>
                                       
                        </div>

                   </div>

                   <div className="main-img-wrapper">
                        <div className="img-wrapper"  style={{backgroundImage:`url(http://localhost:8300/Files/${LargeImg})`,backgroundSize:"cover",}}  >
                            
                        </div>
                    </div>
                </div>
            </>
    );
}

export default ProductImage