import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerfunc } from '../services/Apis';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [inputdata, setInputData] = useState({

        userName: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    // Set values
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputData({...inputdata,[name]:value})
        
    };

    // Register data && required error messages for ui 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { userName, email, password } = inputdata;
        if (userName === "") {
            toast.error("Please enter your username");
        } else if (email === "") {
            toast.error("Please enter your email");
        } else if (!email.includes("@")) {
            toast.error("Please enter a valid email address");
        } else if (password === "") {
            toast.error("Please enter your password");
        } else if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
        } else {
            try {
                const response = await registerfunc(inputdata);
                if (response.status === 200) {
                    setInputData({ userName: "", email: "", password: "" });
                    toast.success("Registration successful");
                    navigate("/");
                } else {
                    toast.error(response.data.message || "Registration failed");
                }
            } catch (error) {
                toast.error(error.response?.data?.message || "An error occurred");
            }
        }
    };

    return (
        <>
            <section>
                <div className='form_data'>
                    <div className='form_heading'>
                        <h1>SignUp</h1>
                        <p>Hi, fill the blank parts with necessary information</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='form_input'>
                            <label htmlFor="userName">Username</label>
                            <input
                                type='text'
                                name='userName'
                                id="userName"
                                placeholder='Enter Your Username'
                                value={inputdata.userName}
                                onChange={handleInput}
                            />
                            <label htmlFor="email">Email</label>
                            <input
                                type='email'
                                name='email'
                                id="email"
                                placeholder='Enter Your Email'
                                value={inputdata.email}
                                onChange={handleInput}
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                type='password'
                                name='password'
                                id="password"
                                placeholder='Enter Your Password'
                                value={inputdata.password}
                                onChange={handleInput}
                            />
                        </div>
                        <button type='submit' className='btn'>SIGNUP </button>
                    </form>
                </div>
            </section>
            <ToastContainer />
        </>
    );
};

export default Register;
