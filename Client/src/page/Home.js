
import Header from "../components/Home/Header/header"
import Hero from "../components/Home/Hero/hero"
import Product from "../components/Home/Products/products"
import "./home.css"
let Home = () => {
    return(
            <>
                <Header/>
                <Hero/>
                <Product/>
                <div className="footer">
                    <h2>© All right Reserved 2022 Green Square</h2>
                </div>
              
            </>
    );
}

export default Home