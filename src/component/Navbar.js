import React from "react";
import  './Navbar.css'



const Navbar = () => {

    return  (

        < div className="fiona">
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-3">
            
                        <h3  className="" href="/">GLADE</h3>

                    
                    </div>
                
                <div className="col-md-3 ">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                    <li className="nav-item">
                    
                        <a className="nav-link fi" href="/">WORLD MAPS</a>
                        </li>
                        

                    

                    </ul>
                    </div>
                    <div className="col-md-3">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                    <li className="nav-item">
                    
                        <a className="nav-link fi" href="/">WAYS WE HELP</a>
                        </li>
                        

                    

                    </ul>
                    </div>
                   
                    <div className="col-md-3">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                    <li className="nav-item">
                    
                        <a className="nav-link fi" href="/">ABOUT THE VIRUS</a>
                        </li>
                        

                    

                    </ul>
                    </div>
                    



                </div>

            </div>

        </div>

        
        
        
        
    )
}
export default Navbar;