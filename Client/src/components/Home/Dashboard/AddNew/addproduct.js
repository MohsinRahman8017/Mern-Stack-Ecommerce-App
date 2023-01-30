
import HeaderAdmin from "../HeaderAdmin/headerAdmin"
import SideBar from "../AdminHero/Sidebar/sidebar"
import ProductsSections from "./Main-Content/productsSection"



let AddProduct = () => {
    return(
            <>
              <div className="containerDashboard">
              <HeaderAdmin/>
              <div className="HeroWrapper">
                <SideBar/>
               <ProductsSections/>

              </div>
             
              
            </div>
            </>
    );
}

export default AddProduct