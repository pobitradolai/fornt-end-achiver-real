import React, {useState} from "react";
import login from "../images/login.svg";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Userlogin() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [showPassword,setShowPassword] = useState(false);
    const showPass = ()=>{
        if(showPassword){
            setShowPassword(false)
        }
        else{
            setShowPassword(true)
        }
    }
    const navigate =useNavigate();
    const goto =(path)=>{
        navigate(path);
    }

    const onSubmit =()=>{
        var data ={
            userEmail:username,
            UserPassword:password
        }
        console.log(data);
        axios
        .post("http://localhost:8080/api/user/userLogin", data)
        .then(function (response) {
          console.log("response", response);
          if (response.data.success) {
            toast.success(response.data.message);
            localStorage.setItem("user-info", JSON.stringify(response.data));
            navigate("/");

          } else {
            toast.error(response.data.message);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return (
        <>
            <div>
                
            </div>
            <div className="body">
                <div className="wrapper">
                    <h1>Login</h1>
                    <div className="container">
                        <input type="text" className="formInput" placeholder=" " onChange={(e)=>{setUsername(e.target.value)}}/>
                        <label htmlFor>Email</label>
                    </div>
                    <div className="container">
                        <input type={showPassword ? "text" : "password"} className="formInput" id="userPass" placeholder=" " onChange={(e)=>{setPassword(e.target.value)}}/>
                        <label htmlFor>Password</label>
                        <div className="show">
                        {showPassword ?  <VisibilityIcon style={{cursor:"pointer"}} onClick={showPass}/>  : <VisibilityOffIcon style={{cursor:"pointer"}} onClick={showPass}/> }
                        </div>
                    </div>
                    <a href="#">Forget password?</a>
                    <input className="button" type="submit" value="Login" onClick={onSubmit}/>
                    <p>Don't have an account? <a style={{cursor:'pointer'}} onClick={()=>{goto("/signup");}}>Signup</a></p>
                </div>
                <img src={login}/>
            </div>
            <ToastContainer/>
        </>
    )
}