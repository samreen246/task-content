import React, {useState} from 'react'
import blankProfile from '../images/blankProfile.jpg'
import '../css/login.css'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import NavbarLogin from '../components/NavbarLogin'

function Login(){

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate() 

    function login(){
        fetch("http://localhost:5000/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
            username:username,
            password:password
        })
        })
        .then(res=>res.json())
        .then(data=>{ 
        if(data.error){
            Swal.fire({
                icon:"error",
                title:data.error
            })
        }
        else{
            localStorage.setItem("token",data.token) 
            navigate("/main")
        }
        })  
    }

    return(
        <>
        <NavbarLogin/>
        <div className='container text-center'>
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="shadow border rounded py-3 px-3 mb-4">
                        <h4>USER LOGIN </h4>
                        <img src={blankProfile} alt="" />
                        <input type="text" value={username} onChange={e=>setUsername(e.target.value)} placeholder="Enter your username" className="form-control mt-3 bg-dark text-light"/>
                        <input type="password" value={password} onChange={e=>setPassword(e.target.value)}placeholder="Enter password" className="form-control mt-3 bg-dark text-light"/>
                        <button className="form-control bg-primary text-white mt-3" onClick={()=>login()}>Login</button>
                        <Link to='/signup'><div className="text-center mt-3">I don't have a account ? Signup</div></Link>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
        </>
    )
}

export default Login