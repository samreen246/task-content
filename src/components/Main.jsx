import React, { useState, useEffect } from "react";
import '../css/main.css';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Main() {
    const [user, setUser] = useState([]);
    const [loaded,setLoaded] = useState(false);
    const navigate = useNavigate();
    
    // follow
    const followUser = (Username) => {
        fetch(`http://localhost:5000/follow/${Username}`, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
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
        }
        })       
    };
       
    // const unfollowUser = (Username) => {
    //     fetch(`http://localhost:5000/unfollow/${Username}`, {
    //         method: "POST",
    //         headers: {
    //             "Authorization": "Bearer " + localStorage.getItem("token")
    //         },
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{ 
    //     if(data.error){
    //         Swal.fire({
    //             icon:"error",
    //             title:data.error
    //         })
    //     }
    //     else{
    //         Swal.fire({
    //             icon:"success",
    //             title:data.success
    //         })
    //     }
    //     })      
    // };

    useEffect(() => {

        fetch("http://localhost:5000//details",{
            method:"POST",
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        })
        .then(res=>res.json())
        .then(data=>setUser(data.user))

        fetch("http://localhost:5000/getusers", {
            method: "POST",
            headers: {
                "authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    Swal.fire({
                        icon: "warning",
                        title: "Login please"
                    });
                    navigate("/");
                }
                else {
                setUser(data);
                setLoaded(true);
                }
            })
    }, [user]);

    return (
        <>
            <Navbar/>
            <div className="container text-center mb-5">

                {
                    loaded?

                    <div className="row">
                    {user.map((item) => (
                        <div key={item._id} className="col-lg-3">
                            <div className="shadow p-3 mx-2 my-4 border">
                                <img className="mainimage" src={item.image} alt="" />
                                <div className="username mt-2">{item.username}</div>
                                <div className="title">{item.followers.length} : followers</div>
                                <div className="title">{item.following.length} : followings</div>
                                <button className="form-control bg-primary text-white mt-2" onClick={()=>followUser(item.username)}>Follow</button>
                                {/* <button className="form-control bg-secondary text-white mt-2" onClick={()=>unfollowUser(item.username)}>Unfollow</button> */}
                            </div>
                        </div>
                    ))}
                    </div>

                    :

                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>

                }
                
            </div>
        </>
    );
}

export default Main;