import "./productlisting.css"
import Header from "../Header/header"
import ProductImage from "./productImage"
import ProductDetails from "./productDetails"



let ProductListing = () => {
    return(
            <>
                <Header/>
                <div className="Product-list-outer-wrapper">
                    <ProductImage/>
                    <ProductDetails/>
                </div>
                
              
              
            </>
    );
}

export default ProductListing