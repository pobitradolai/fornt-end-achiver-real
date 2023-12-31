import React, { useEffect, useState } from "react";
import signup from "../images/signup.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar.js";
import { userSignup } from "../../Service/userAuth";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    setName("");
    setEmail("");
    setPhone("");
    setAge("");
    setPassword("");
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const showPass = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  const navigate = useNavigate();
  const goto = (path) => {
    navigate(path);
  };

  const onSubmit = () => {
    if (email.trim()) {
      if (!email.trim().match(mailformat)) {
        toast.error("Please Enter Email special characters mail formate (xxxx@.xxxxx.com) !", {
          position: toast.POSITION.BOTTOM_CENTER
        });
      return false;
     }
    }
    if (phone.length<10 || phone.length>10) {
      toast.error("Please Enter Phone Number 10 Digits !", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    return false;
    }
    if (confirm.length>6) {
      toast.error("Please Enter Password 6 to 12 digits!", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    return false;
    }
    if (name == '') {
      toast.error("Please Enter Name !", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    return false;
    }
    if (email == '') {
      toast.error("Please Enter Email !", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    return false;
    }
    if (phone == '') {
      toast.error("Please Enter Phone !", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    return false;
    }
    if (age == '') {
      toast.error("Please Enter Age !", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    return false;
    }
    if (password == '') {
      toast.error("Please Enter Password !", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    return false;
    }

    var data = {
      userName: name,
      userEmail: email,
      userPhone: phone,
      userAge: age,
      UserPassword: password,
    };

    if (password !== confirm) {
      alert("Passwords don't match !!");
    } else {
      userSignup(data).then(result=>{
        if (result.data.success) {
          toast.success(result.data.message);
          navigate("/login");
        } else {
          toast.error(result.data.message);
        }

      })
    }
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="body">
          <div className="wrapper">
            <h1>Sign up</h1>
            <div className="container">
              <input
                type="text"
                className="formInput"
                placeholder=""
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label htmlFor>Name</label>
            </div>
            <div className="container">
              <input
                type="email"
                className="formInput"
                placeholder=""
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor>Email</label>
            </div>
            <div className="container">
              <input
                type="text"
                className="formInput"
                placeholder=""
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                maxLength={10}
              />
              <label htmlFor>Phone</label>
            </div>
            <div className="container">
              <input
                type="number"
                className="formInput"
                placeholder=""
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
              <label htmlFor>Age</label>
            </div>
            <div className="container">
              <input
                type={showPassword ? "text" : "password"}
                className="formInput"
                id="userPass"
                placeholder=" "
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                maxLength={12}
              />
              <label htmlFor>Create a password</label>
              <div className="show">
                {showPassword ? (
                  <VisibilityIcon
                    style={{ cursor: "pointer" }}
                    onClick={showPass}
                  />
                ) : (
                  <VisibilityOffIcon
                    style={{ cursor: "pointer" }}
                    onClick={showPass}
                  />
                )}
              </div>
            </div>
            <div className="container">
              <input
                type="text"
                className="formInput"
                placeholder=""
                onChange={(e) => {
                  setConfirm(e.target.value);
                }}
                maxLength={12}
              />
              <label htmlFor>Confirm password</label>
            </div>
            <input
              className="button"
              type="submit"
              value="Create your account"
              onClick={onSubmit}
            />
            <p>
              Already have an account?{" "}
              <a
                className="anchor"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  goto("/login");
                }}
              >
                Login
              </a>
            </p>
          </div>

          <img src={signup} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
