import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    //
     if (!email || !password) {
       return handleError("Please fill in all fields.");
    }
    //
     try {
       const { data } = await axios.post(
         "http://localhost:3002/login",
         inputValue,
         {
           headers: {
             "Content-Type": "application/json",
           },
           withCredentials: true,
         }
       );
       const { success, message } = data;

       if (success) {
         handleSuccess(message);
          setInputValue({
            email: "",
            password: "",
          });
         setTimeout(() => {
           navigate("/");
         }, 1000);
       } else {
         handleError(message);
       }
     } catch (error) {
       console.error("Login Error:", error);
        handleError(
          error.response?.data?.message ||
            "Something went wrong. Please try again."
        );
     }

  };

  return (
    <div className="box-fit mb-5 mt-5">
      <div className="form_container">
        <h2>Login Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit">Submit</button>
          <span>
            Don't have an account? <Link to={"/signup"}>Signup</Link>
          </span>
        </form>
        <ToastContainer autoClose={3000} hideProgressBar />
      </div>
    </div>
  );
};

export default Login;
