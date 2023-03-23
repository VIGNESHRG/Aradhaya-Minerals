import React from 'react';
import '../css/adminregister.css'
import{Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const AdminRegister=()=>{
    const navigate=useNavigate()
    const[name,setname]=useState("")
    const[password,setpassword]=useState("")
    const[number,setnumber]=useState("")

    const signup=(e)=>{
        const datas={
            admin_name:name,
            admin_password:password,
            admin_number:number
        }
        /*axios.post("",datas).then((res)=>{
            console.log(res.data)
            if(res.data.status){
                navigate("/login")
            }
            else{
                toast.error(res.data.msg)
            }
        })*/
    }
    return(
        <div className="background">
            <div className="signup">
                <div className="cards">
                    <div className="heading">
                        <h1>Create Admin</h1>
                        <hr></hr>
                    </div>
                    <div className="form">
                        <div className="name">
                            <label>Name :</label>
                            <input type="text" name="Name" value={name} id="uname" onChange={(e)=>setname(e.target.value)}/>
                        </div>
                        <div className="password">
                            <label>Password   :</label>
                            <input type="password" name="Password" value={password} id="upassword" onChange={(e)=>setpassword(e.target.value)}/>
                        </div>
                        <div className="mno">
                            <label>MobileNo :</label>
                            <input type="text" name="MobileNumber" value={number} id="umno" onChange={(e)=>setnumber(e.target.value)}/>
                        </div>
                        <button id="signupbutton" onClick={signup}>Create Account</button>
                        
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}