import React from 'react';
import '../css/adminregister.css'
import{Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const AdminLogin=()=>{
    const navigate=useNavigate()
    const[password,setpassword]=useState("")
    const[number,setnumber]=useState("")

    const signup=(e)=>{
        const datas={
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
                        <h1>Admin Login</h1>
                        <hr></hr>
                    </div>
                    <div className="form">
                        <div className="password">
                            <label>Password   :</label>
                            <input type="password" name="Password" value={password} id="upassword" onChange={(e)=>setpassword(e.target.value)}/>
                        </div>
                        <div className="mno">
                            <label>MobileNo :</label>
                            <input type="text" name="MobileNumber" value={number} id="umno" onChange={(e)=>setnumber(e.target.value)}/>
                        </div>
                        <button id="signupbutton" onClick={signup}>Login as Admin</button>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}