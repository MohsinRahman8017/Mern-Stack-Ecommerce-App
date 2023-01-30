
import "./editnewproduct.css"
import {useEffect, useState} from "react"
import { toast} from 'react-toastify';
import {useParams} from "react-router-dom"


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
        Price()
    })

    let Price = () => {
        setTotalPrice(select + price)
    }
    
    let {id} = useParams()

    const token = JSON.parse(localStorage.getItem("token"))
 
    let Submit_form = async (event) => {

        event.preventDefault()
         
        const data = new FormData()

         data.append("file1",image)
        data.append("file2",image1)
        data.append("file3",image2)
        data.append("file4",image3)
 
        data.append("title",title)
        data.append("description",description)
        data.append("category",category)
        data.append("color",color)
        data.append("totalprice",TotalPrice)
   

     fetch(`http://localhost:8300/update/${id}`,{
        method : "PUT",
       headers:{
            Authorization:token
        },
        body:data
        }).then((result)=>{
            result.json().then((resp)=>{

            })
        })

        toast.success(`Product Updated Successfully `,{
            position: 'top-center',
        })
        
              
    }

   
    useEffect(()=>{
        loadUser()
    },[])



    let loadUser = () => {

        fetch(`http://localhost:8300/allproducts/${id}`)
        .then((resp)=>{
            resp.json().then((result)=>{
                settitle(result[0].title)
                setDescription(result[0].description)
                setCategory(result[0].category)
                setColor(result[0].color)
                setPrice(result[0].totalprice.split(" ")[1])
                setSelect(result[0].totalprice.split(" ")[0])
                setfiles(result[0].file1)
                setfiles1(result[0].file2)
                setfiles2(result[0].file3)
                setfiles3(result[0].file4)
                
            })  
        })   

    }


    
    

    let serverpath = "http://localhost:8300/Files/" 
    const [Path , setPath] = useState(serverpath)
    

    // Fixing URL issue
    function fixURI(p, f) {
        let FilePath  = p + " " +  f; 
        let split = FilePath.split(" ")  

        if(split[1].includes("blob")){
            split.shift()  
            return split.toString()      
        }
        else{
            return p + f
        }
    }
    
    
    let split = fixURI(Path, file);
    let split1 = fixURI(Path, file1);
    let split2 = fixURI(Path, file2);
    let split3 = fixURI(Path, file3);

    

    return(
            <>
                <form className="form" action="/add-product"  method="post" encType="multipart/form-data"  >

                    <div style={{display:"flex",flexDirection:"row"}} className="form-data">
                        <div className="Add-Left-Section">

                        <label>Product Name</label>
                        <input type="text" placeholder="Product Name" value={title} name="title" required onChange={(e)=>{
                            settitle(e.target.value)
                        }}/>

                        <label>Description</label>
                        <textarea type="text" placeholder="Description" value={description} name="description" required className="textarea" onChange={(e)=>{
                            setDescription(e.target.value)
                        }}/>

                        <label>Category</label>
                        <input type="text" placeholder="e:g Shoes Furniture" value={category} name="category" required onChange={(e)=>{
                            setCategory(e.target.value)
                        }}/>

                        <label>Color</label>
                        <input type="Text" placeholder="white black"  name="color" value={color} required onChange={(e)=>{
                            setColor(e.target.value)
                        }}/>

                        <label>Price</label>
                        <div className="ProductPrice">
                         
                         
                            <select  value={select}name="toalprice"  onChange={(e)=>{
                                setSelect(e.target.value)
                            }} >
                                <option >Currency</option>
                                <option  value="$ ">USD</option>
                                <option  value="€ ">Euro</option>
                                <option  value="Rs ">PKR</option>
                            </select>
                            <input type="number" value={price} name="totalprice" style={{width:"96%"}} placeholder="Product Price" required onChange={(e)=>{
                                setPrice(e.target.value)
                            }}/>

                        
                        </div>

                        
                         </div> 


                        <div className="Add-Right-Section">
                            
                             <div className="largeImg-upload" style={{backgroundImage:`url(${split})`}} >
                                
                               <div className={uploadwrapper} >  
                                <span class="material-symbols-outlined">cloud_upload</span>
                                <input type="file" className="file" required  name="file1" onChange={(event)=>{
                                     setfiles(URL.createObjectURL(event.target.files[0]));
                                     setImage(event.target.files[0])
                                     
                                    //  event.target.files?  setuploadwrapper("upload-wrapper-none") :  setuploadwrapper("upload-wrapper")     
                                    }} />
                              </div>

                            </div>

                            
                        
                          <div className="SmallWrapper">
                            <div className="SmallImg-upload"  style={{backgroundImage:`url(${split1})`}} >
                                <div className={uploadwrapper1}>
                                    <span class="material-symbols-outlined">cloud_upload</span>
                                    <input type="file" className="filesmall"  name="file2" required onChange={(event)=>{
                                        setfiles1(URL.createObjectURL(event.target.files[0]));
                                        setImage1(event.target.files[0])
                                       
                                        // event.target.files?  setuploadwrapper1("upload-wrapper-none") :  setuploadwrapper1("upload-wrapper")
                                    }} />
                                </div>
                            </div>

                             <div className="SmallImg-upload" style={{backgroundImage:`url(${split2})`}} >
                                <div className={uploadwrapper2}>
                                        <span class="material-symbols-outlined">cloud_upload</span>
                                        <input type="file" className="filesmall"  name="file3" required onChange={(event)=>{
                                            setfiles2(URL.createObjectURL(event.target.files[0]))
                                            // setImage2(event.target.files[0])
                                            setImage2(event.target.files[0])
                                            // event.target.files?  setuploadwrapper2("upload-wrapper-none") :  setuploadwrapper2("upload-wrapper")

                                        }}/>
                                    </div>
                            </div>
                            
                            <div className="SmallImg-upload" style={{backgroundImage:`url(${split3})`}}   >
                                <div className={uploadwrapper3}>
                                        <span class="material-symbols-outlined">cloud_upload</span>
                                        <input type="file" className="filesmall"  name="file4" required onChange={(event)=>{
                                            setfiles3(URL.createObjectURL(event.target.files[0]))
                                            setImage3(event.target.files[0])
                                             
                                            // event.target.files?  setuploadwrapper3("upload-wrapper-none") :  setuploadwrapper3("upload-wrapper")

                                        }}/>
                                </div>

                            </div>  

                        </div> 

                             <button type="submit" className="Submit" onClick={Submit_form}> UPDATE PRODUCT NOW</button>
                        </div>

                    </div>

                </form>
            </>
    );
}

export default AddNewProduct