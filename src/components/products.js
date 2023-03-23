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
    const[litre,setlitre]=useState(0)
    const[price,setprice]=useState(0)
    const[image,setImage]=useState("")
    const[minquantity,setminquantity]=useState(0)
    const signup=(e)=>{
        const datas={
            product_name:name,
            product_litre:litre,
            product_price:price,
            product_image:image
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
                        <h1>Products</h1>
                        <hr></hr>
                    </div>
                    <div className="form">
                        <div className="name">
                            <label>Name :</label>
                            <input type="text" name="Name" value={name} id="name" onChange={(e)=>setname(e.target.value)}/>
                        </div>
                        <div className="quantity">
                            <label>Quantity(in litres)   :</label>
                            <input type="number" name="litre" value={litre} id="litre" onChange={(e)=>setlitre(e.target.value)}/>
                        </div>
                        <div className="price">
                            <label>Price(in Rs) :</label>
                            <input type="number"  name="price" value={price} id="price" onChange={(e)=>setprice(e.target.value)}/>
                        </div>
                        <div className="minquantity">
                            <label>MobileNo :</label>
                            <input type="number"  name="price" value={price} id="minquantity" onChange={(e)=>setprice(e.target.value)}/>
                        </div>
                        <button id="signupbutton" onClick={signup}>Create Account</button>
                        
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}