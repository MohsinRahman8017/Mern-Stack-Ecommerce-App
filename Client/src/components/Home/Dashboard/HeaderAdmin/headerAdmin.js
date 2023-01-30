
import "./headerAdmin.css"
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'



let HeaderAdmin = () => {

    const navigate = useNavigate()

    let Logout = () => {
        let removetoken = localStorage.removeItem("token")
        navigate('/login');
    }

    let userName = JSON.parse(localStorage.getItem("user"))


    return(
            <>

<div className="outer-wrapper-admin">
                <div className="header-logo-admin">
                    <Link to="/">Green Square</Link>
                </div>

                <div className="Nav-left-admin">
                    <Link to="/">Products</Link>
                  
                </div>

                <div className="Nav-right-admin">
                    <ul>
                        <li>
                            <Link to="/">Open the website</Link>
                        </li>

                        <li>
                            Need helps ?
                        </li>

                        <li>
                            <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
                                <img src="/images/pic6.jpg" style={{height:"39px",borderRadius:"50px"}}/>
                                <h2 style={{fontWeight:"400",fontFamily:"system-ui",fontSize:"16px"}}>{userName}</h2>
                            </div>
                                                       
                        </li>

                        <li>
                           <span class="material-symbols-outlined" onClick={Logout}>logout</span>
                        </li>
                    </ul>
                            
                </div>


                
              </div>
            </>
    );
}

export default HeaderAdmin