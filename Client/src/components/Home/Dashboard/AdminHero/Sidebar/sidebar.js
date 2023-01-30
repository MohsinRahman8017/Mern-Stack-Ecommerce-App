import { Link } from "react-router-dom";
import "./sidebar.css"

let Sidebar = () => {


    return(
            <>
                <div className="Sidebar-wrapper">
                    <ul>
                        <li >
                            <div className="listitem">
                                <span className="material-symbols-outlined">grid_view</span>
                                MY DASHBOARD  
                            </div>                 
                        </li>

                        <li>
                            <div className="listitem">
                                <span className="material-symbols-outlined">settings</span>
                                SETTINGS
                             </div>   
                        </li>

                        <li>
                            <Link to="/dashboard" className="listitem"  style={{textDecoration:"none", color: "#171717"}}>
                                <span className="material-symbols-outlined">inventory</span>
                                PRODUCTS
                            </Link>   
                        </li>
                        <li>
                            <Link to="/dashboard/add" className="listitem" style={{textDecoration:"none"}}>
                            <span className="material-symbols-outlined">add</span>
                                ADD NEW
                            </Link>   
                        </li>

                    
                    </ul>
                </div>
            </>
    );
}

export default  Sidebar