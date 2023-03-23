import React from 'react';
import '../css/signup.css'
import{Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Signup=()=>{
    const navigate=useNavigate()
    const[username,setusername]=useState("")
    const[useremail,setuseremail]=useState("")
    const[userpassword,setuserpassword]=useState("")
    const[usernumber,setusernumber]=useState("")

    const signup=(e)=>{
        const datas={
            username:username,
            useremail:useremail,
            userpassword:userpassword,
            usernumber:usernumber
        }
        axios.post("http://localhost:8000/register",datas).then((res)=>{
            console.log(res.data)
            if(res.data.status){
                navigate("/login")
            }
            else{
                toast.error(res.data.msg)
            }
        })
    }
    return(
        <div className="background">
            <div className="signup">
                <div className="card">
                    <div className="heading">
                        <h1>SignUp</h1>
                        <hr></hr>
                    </div>
                    <div className="form">
                        <div className="name">
                            <label>Name :</label>
                            <input type="text" name="Name" value={username} id="uname" onChange={(e)=>setusername(e.target.value)}/>
                        </div>
                        <div className="email">
                            <label>Email :</label>
                            <input type="email" name="Email" value={useremail} id="uemail" onChange={(e)=>setuseremail(e.target.value)}/>
                        </div>
                        <div className="password">
                            <label>Password   :</label>
                            <input type="password" name="Password" value={userpassword} id="upassword" onChange={(e)=>setuserpassword(e.target.value)}/>
                        </div>
                        <div className="mno">
                            <label>MobileNo :</label>
                            <input type="text" name="MobileNumber" value={usernumber} id="umno" onChange={(e)=>setusernumber(e.target.value)}/>
                        </div>
                        <button id="signupbutton" onClick={signup}>Create Account</button>
                        <div className="loginuser">
                            <p>Already a user ?</p>
                            <hr></hr>
                        </div>
                        <button id="loginbutton" onClick={()=>navigate("/login")}>Login</button>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}