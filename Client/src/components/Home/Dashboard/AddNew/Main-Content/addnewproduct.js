
import "./addnewproduct.css"
import {useEffect, useState} from "react"
import { toast} from 'react-toastify';


let AddNewProduct = () => {


    const [title , settitle] = useState()
    const [description , setDescription] = useState()
    const [category , setCategory] = useState()
    const [color , setColor] = useState()
    const [price , setPrice] = useState()
    const [select , setSelect] = useState()
    const [TotalPrice,setTotalPrice] = useState()

    // All Files
    const [file,setfiles] = useState()
    const [file1,setfiles1] = useState()
    const [file2,setfiles2] = useState()
    const [file3,setfiles3] = useState()
    const [uploadwrapper,setuploadwrapper] = useState("upload-wrapper")
    const [uploadwrapper1,setuploadwrapper1] = useState("upload-wrapper")
    const [uploadwrapper2,setuploadwrapper2] = useState("upload-wrapper")
    const [uploadwrapper3,setuploadwrapper3] = useState("upload-wrapper")

    //All FileS Object
    const [image,setImage] = useState()
    const [image1,setImage1] = useState()
    const [image2,setImage2] = useState()
    const [image3,setImage3] = useState()

    useEffect(()=>{
        Total()
    })
    let Total = () => {
        setTotalPrice(select + price)
    }

    

    let fileupload = (event) => {
        setfiles(URL.createObjectURL(event.target.files[0]))
        setImage(event.target.files[0])

        if(event.target.files){
            setuploadwrapper("upload-wrapper-none")
        }else{
            setuploadwrapper("upload-wrapper")
        }

        event.target.files?  setuploadwrapper("upload-wrapper-none") :  setuploadwrapper("upload-wrapper")
      
    }

    const token = JSON.parse(localStorage.getItem("token"))
    console.log(token)
 
    let Submit_form = async (event) => {

        try {

            let Product_data  = (title,description,category,color,select,price,image,image1,image2,image3)
        
            if(Product_data){
                const data = new FormData();
                data.append("title",title)
                data.append("description",description)
                data.append("category",category)
                data.append("color",color)
                data.append("totalprice",TotalPrice)
                data.append("file1",image)
                data.append("file2",image1)
                data.append("file3",image2)
                data.append("file4",image3)
    
            
                fetch(`http://localhost:8300/add-product`,{
                    method : "POST", 
                    headers:{
                        Authorization:token
                    },
                    body:data,
                }).then((result)=>{
                    result.json().then((resp)=>{
        
                    })
                })
                toast.success(`Product Uploaded Successfully `,{
                    position: 'top-center',
                    })
                          
            }else{
                event.preventDefault()
    
                toast.error(`Please Fill All The Field `,{
                    position: 'top-center',
                    })
            }
            
        } catch (error) {
           alert(error)
        }


       
            
        }

      


    return(
            <>
                <form className="form"  method="post" encType="multipart/form-data" >

                    <div style={{display:"flex",flexDirection:"row"}} className="form-data">
                        <div className="Add-Left-Section">

                        <label>Product Name</label>
                        <input type="text" placeholder="Product Name"  name="title" required onChange={(e)=>{
                            settitle(e.target.value)
                        }}/>

                        <label>Description</label>
                        <textarea type="text" placeholder="Description"  name="description" required className="textarea" onChange={(e)=>{
                            setDescription(e.target.value)
                        }}/>

                        <label>Category</label>
                        <input type="text" placeholder="e:g Shoes Furniture"  name="category" required onChange={(e)=>{
                            setCategory(e.target.value)
                        }}/>

                        <label>Color</label>
                        <input type="Text" placeholder="white black"  name="color" required onChange={(e)=>{
                            setColor(e.target.value)
                        }}/>

                        <label>Price</label>
                        <div className="ProductPrice">
                            <select name="toalprice" onChange={(e)=>{
                                setSelect(e.target.value)
                            }} >
                                <option >Currency</option>
                                <option value="$ ">USD</option>
                                <option value="€ ">Euro</option>
                                <option value="Rs ">PKR</option>
                            </select>
                            <input type="number"  name="totalprice" style={{width:"96%"}} placeholder="Product Price" required onChange={(e)=>{
                                setPrice(e.target.value)
                            }}/>
                        </div>
                        
                         </div> 

                        <div className="Add-Right-Section">
                             <div className="largeImg-upload" style={{backgroundImage:`url(${file})`}} >
                                
                               <div className={uploadwrapper} >  
                                <span class="material-symbols-outlined">cloud_upload</span>
                                <input type="file" className="file" required onChange={fileupload} name="file1" />
                              </div>

                            </div>
                        
                        <div className="SmallWrapper">
                            <div className="SmallImg-upload" style={{backgroundImage:`url(${file1})`}} >
                                <div className={uploadwrapper1}>
                                    <span class="material-symbols-outlined">cloud_upload</span>
                                    <input type="file" className="filesmall"  name="file2" required onChange={(event)=>{
                                        setfiles1(URL.createObjectURL(event.target.files[0]));
                                        setImage1(event.target.files[0])
                                        event.target.files?  setuploadwrapper1("upload-wrapper-none") :  setuploadwrapper1("upload-wrapper")
                                    }} />
                                </div>
                            </div>

                            <div className="SmallImg-upload" style={{backgroundImage:`url(${file2})`}} >
                                <div className={uploadwrapper2}>
                                        <span class="material-symbols-outlined">cloud_upload</span>
                                        <input type="file" className="filesmall"  name="file3" required onChange={(event)=>{
                                            setfiles2(URL.createObjectURL(event.target.files[0]))
                                            setImage2(event.target.files[0])
                                            event.target.files?  setuploadwrapper2("upload-wrapper-none") :  setuploadwrapper2("upload-wrapper")

                                        }}/>
                                    </div>
                            </div>
                            
                            <div className="SmallImg-upload" style={{backgroundImage:`url(${file3})`}}   >
                                <div className={uploadwrapper3}>
                                        <span class="material-symbols-outlined">cloud_upload</span>
                                        <input type="file" className="filesmall"  name="file4" required onChange={(event)=>{
                                            setfiles3(URL.createObjectURL(event.target.files[0]))
                                            setImage3(event.target.files[0])
                                            event.target.files?  setuploadwrapper3("upload-wrapper-none") :  setuploadwrapper3("upload-wrapper")

                                        }}/>
                                </div>

                            </div> 

                        </div> 

                             <button type="button" className="Submit" onClick={Submit_form}> ADD PRODUCT NOW</button>
                        </div>

                    </div>

                </form>
            </>
    );
}

export default AddNewProduct