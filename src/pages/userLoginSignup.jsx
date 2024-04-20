import React, { useRef, useEffect, useState } from 'react';
import '../pagesCss/userLoginSignup.css';
import Navbar from '../components/navBar';
import { useForm } from "react-hook-form";
const multer = require("multer");

const LoginSignup = () => {
    const signupRef = useRef(null);
    const loginRef = useRef(null);
    const sliderRef = useRef(null);
    const formSectionRef = useRef(null);
    const {
        register: registerLogin,
        handleSubmit: handleSubmitLogin,
        formState: { errors: errorsLogin },
      } = useForm();
    const {
        register: registerSignup,
        handleSubmit: handleSubmitSignup,
        formState: { errors: errorsSignup },
        watch: watchSignup // <-- add watch function for signup form
      } = useForm();
    const [isLoginFormSubmitting, setIsLoginFormSubmitting] = useState(false);
    const [isSignupFormSubmitting, setIsSignupFormSubmitting] = useState(false);
    const signupPassword = watchSignup("signupPassword"); // <-- watch the signup password field

    useEffect(() => {
        const signupButton = signupRef.current;
        const loginButton = loginRef.current;
        const slider = sliderRef.current;
        const formSection = formSectionRef.current;

        const handleSignupClick = () => {
            slider.classList.add("moveslider");
            formSection.classList.add("form-section-move");
        };

        const handleLoginClick = () => {
            slider.classList.remove("moveslider");
            formSection.classList.remove("form-section-move");
        };

        signupButton.addEventListener("click", handleSignupClick);
        loginButton.addEventListener("click", handleLoginClick);

        return () => {
            signupButton.removeEventListener("click", handleSignupClick);
            loginButton.removeEventListener("click", handleLoginClick);
        };
    }, []);

    const onSubmitLogin = (data) => {
        setIsLoginFormSubmitting(true);
        console.log(data);
        // Simulate form submission (API call, etc.)
        setTimeout(() => {
            setIsLoginFormSubmitting(false);
        }, 1000); // Set a timeout to reset the submitting state after 1 second (replace with actual submission logic)
    }

    const onSubmitSignup = async (data) => {
        setIsSignupFormSubmitting(true);
        console.log(data);
    
        const formData = {
            name: data.fullName,
            birthdate: data.birthdate,
            email: data.signupEmail,
            phoneNumber: data.phoneNumber,
            location: data.location,
            aadharCard: data.aadharCardNumber,
            aadharCardImageUrl: "assets/aadharImage/Aadhaar_3.pdf",
            password: data.signupPassword
        };  
    
        try {
            const response = await fetch('http://localhost:3000/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);

            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }

        setIsSignupFormSubmitting(false);
    };

    return (
        <>
            <header>
                <Navbar/>
            </header>
            <div className="body">
                <div className="main-container">
                    <div className="slider" ref={sliderRef}></div>
                    <div className="btn">
                        <button className="login" ref={loginRef}>Login</button>
                        <button className="signup" ref={signupRef}>Signup</button>
                    </div>
                    <div className="form-section" ref={formSectionRef}>
                        <form className="login-box" onSubmit={handleSubmitLogin(onSubmitLogin)}>
                            <p className='text-3xl font-bold'>User Login</p>
                            <input type="email" className="email ele" placeholder="youremail@email.com" {...registerLogin("loginEmail", { required: "Please enter email!!"})}/>
                            {errorsLogin.loginEmail && <span className="error">{errorsLogin.loginEmail.message}</span>}
                            <input type="password" className="password ele" placeholder="password" {...registerLogin("loginPassword", { required: "Please enter Password!", maxLength: {value: 16, message:"Password max size is 16"} })}/>
                            {errorsLogin.loginPassword && <span className="error">{errorsLogin.loginPassword.message}</span>}
                            <button type='submit' className="clkbtn text3xl font-medium" disabled={isSignupFormSubmitting || isLoginFormSubmitting} >{isLoginFormSubmitting ? "Logging in..." : "Login"}</button>
                        </form>
                        <form className="signup-box" onSubmit={handleSubmitSignup(onSubmitSignup)}>
                            <p className="text-2xl font-bold">User Signup</p>
                            <div className="driverSideBySide">
                            <div className="driverLeft">
                                <input type="text" className="full-name ele" placeholder="Full Name" {...registerSignup("fullName", { required: "Please enter your full name!" })} />
                                {errorsSignup.fullName && <span className="error">{errorsSignup.fullName.message}</span>}
                                <input type="date" className="birthdate ele" placeholder="Birthdate" {...registerSignup("birthdate", { required: "Please enter your birthdate!" })} />
                                {errorsSignup.birthdate && <span className="error">{errorsSignup.birthdate.message}</span>}
                                <input type="email" className="email ele" placeholder="Email Address" {...registerSignup("signupEmail", { required: "Please enter email!!"})} />
                                {errorsSignup.signupEmail && <span className="error">{errorsSignup.signupEmail.message}</span>}
                                <input type="tel" className="phone-number ele" placeholder="Phone Number" {...registerSignup("phoneNumber", { required: "Please enter your phone number!" })} />
                                {errorsSignup.phoneNumber && <span className="error">{errorsSignup.phoneNumber.message}</span>}
                                <input type="text" className="location ele" placeholder="Location" {...registerSignup("location", { required: "Please enter your location!" })} />
                                {errorsSignup.location && <span className="error">{errorsSignup.location.message}</span>}
                            </div>
                            <div className="driverRight">
                                
                                <input type="text" className="aadharcard-number ele" placeholder="Aadhar Card Number" {...registerSignup("aadharCardNumber", { required: "Please enter your Aadhar card number!" })} />
                                {errorsSignup.aadharCardNumber && <span className="error">{errorsSignup.aadharCardNumber.message}</span>}
                                <input type="file" className="aadharcard-photo ele" accept="image/*" {...registerSignup("aadharCardPhoto")} />
                                <input type="password" className="password ele" placeholder="Password" {...registerSignup("signupPassword", { required: "Please enter Password!", maxLength: {value: 16, message:"Password max size is 16"} })}/>
                                {errorsSignup.signupPassword && <span className="error">{errorsSignup.signupPassword.message}</span>}
                                <input type="password" className="confirm-password ele" placeholder="Confirm Password" {...registerSignup("confirmPassword", { required: "Please confirm your password!", validate: value => value === signupPassword || "The passwords do not match." })} />
                                {errorsSignup.confirmPassword && <span className="error">{errorsSignup.confirmPassword.message}</span>}
                            </div>
                            </div>
                            <button type='submit' className="clkbtn font-medium" disabled={isSignupFormSubmitting || isLoginFormSubmitting}>{isSignupFormSubmitting ? "Signing up..." : "Signup"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginSignup;
