import React from "react";
import { Link } from "react-router-dom";

function NavbarLogin(){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light position-sticky top-0">
        <div className="container-fluid">
            <h2 className="mx-3">Simple Site</h2>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto mx-5 py-2">
                <Link className="text-light nav-link mx-1 mt-1 sign" to="/signup"><h5>Signup</h5></Link>
                </div>
            </div>
        </div>
        </nav>
    )
    
}

export default NavbarLogin