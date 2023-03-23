import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'
import axios from 'axios'
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Login=()=>{
    const navigate=useNavigate()
    const [number,setnumber]=useState("")
    const [password,setpassword]=useState("")
    const login=()=>{
        const data={
            usernumber:number,
            userpassword:password
        }
        axios.post("http://localhost:8000/login",data).then((res)=>{
            if(res.data.status){
                toast.success(res.data.msg)
            }
            else{
                toast.error(res.data.msg)
            }
        })
    }
    return(
        <div className="background">
            <div className="login">
                <div className="card">
                    <div className="heading">
                        <h1>Login</h1>
                        <hr></hr>
                    </div>
                    <div className="form">
                        <div className="email">
                            <label>MobileNo :</label>
                            <input type="text" value={number} onChange={(e)=>setnumber(e.target.value)} name="Mobile" id="uemail"/>
                        </div>
                        <div className="password">
                            <label>Password   :</label>
                            <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} name="Password" id="upassword"/>
                        </div>
                        <button onClick={login} id="loginbut">Login</button>
                        <div className="signupuser">
                            <p>Not a user ?</p>
                            <hr></hr>
                        </div>
                        <button id="signupbut" onClick={()=>navigate("/signup")}>Signup</button>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}