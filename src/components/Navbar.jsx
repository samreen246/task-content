import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar(){

    const navigate = useNavigate()

    function logout(){
        localStorage.clear()
        navigate("/")
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light position-sticky top-0">
        <div className="container-fluid">
            <h2 className="mx-3">Simple Site</h2>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto mx-5 py-2">
                <button className="bg-dark border-0 logout"><h5 className="text-light nav-link" onClick={()=>logout()}>Logout</h5></button>
                </div>
            </div>
        </div>
        </nav>
    )
    
}

export default Navbar