
import HeaderAdmin from "./HeaderAdmin/headerAdmin"
import SideBar from "./AdminHero/Sidebar/sidebar"
import "./adminpannel.css"
import ProductsSections from "./AdminHero/Main-Content/productsSection"

let Admin = () => {

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

export default Admin