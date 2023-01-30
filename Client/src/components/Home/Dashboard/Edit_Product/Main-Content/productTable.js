import "./productTable.css";
import { useEffect, useRef, useState } from "react";
import { useParams} from "react-router-dom";
import AddNewProduct from "./editnewproduct"


let ProductTable = () => {

 


    return(
            <>
                <div className="producttable-wrapper" >
                    <div className="product-table-Header">
                        <div className="table-right">
                             <h2>Edit Product</h2>
                        </div>

                        <div className="table-left">
                            <div className="btn-blue">
                            <span class="material-symbols-outlined">add</span>
                                <h2>Add New</h2>
                            </div>
                        </div>
                    </div>

                    <div className="add-product-wrapper">
                        <AddNewProduct/>
                    </div>
                </div>
            </>
    );
}

export default ProductTable