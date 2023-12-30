import React, {useState,useRef}from 'react'
import blankProfile from '../images/blankProfile.jpg'
import '../css/signup.css'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import NavbarSign from './NavbarSign'

function Signup(){

    const inputRef = useRef('')
    const [image,setImage] = useState('')

    const handleImageClick = () =>{
        inputRef.current.click()
    }

    const handleImageChange = (event) =>{
      console.log(event)
       var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload=()=>{
      console.log(reader.result) //base64 encoded string
      setImage(reader.result)
    }

    reader.onerror = error =>{
        console.log("error",error)
       }
    }

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    
  function signup(){

    fetch("http://localhost:5000/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json","Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
          base64:image,
          username:username,
          email:email,
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
          Swal.fire({
            icon:"success",
            title:data.success
          })
          navigate('/')
        }
      })  
  }

    return(
        <>
        <NavbarSign/>
        <div className='container text-center'>
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="shadow border rounded py-3 px-3 mt-2 mb-2 signup">
                        <h4>USER SIGNUP </h4>
                        <div onClick={handleImageClick}>
                          {
                            image ?
                              <img src={image} alt="" className="uploadimage"/>
                            :
                              <img src={blankProfile} alt="" />
                          }
                          <input type="file" ref={inputRef} onChange={handleImageChange} style={{display:"none"}}/>
                        </div> 
                        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter your Username" className="form-control mt-3 bg-dark text-light"/>
                        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" className="form-control mt-3 bg-dark text-light "/>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}placeholder="Enter password" className="form-control mt-3 bg-dark text-light"/>
                        <button className="form-control bg-primary text-white mt-3" onClick={()=>signup()}>Signup</button>
                        <Link to='/'><div className="text-center mt-3">I already have a account ? Login</div></Link>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
        </>
    )
}

export default Signup