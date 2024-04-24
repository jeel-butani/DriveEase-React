import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/navBar';
import axios from 'axios'; 
import { useForm } from "react-hook-form";

const companyLoginSignup = ()=> {
    const {
        register: registerLogin,
        handleSubmit: handleSubmitLogin,
        formState: { errors: errorsLogin },
    } = useForm();
    const {
        register: registerSignup,
        handleSubmit: handleSubmitSignup,
        formState: { errors: errorsSignup },
        watch: watchSignup 
    } = useForm();
    const [isLoginFormSubmitting, setIsLoginFormSubmitting] = useState(false);
    const [isSignupFormSubmitting, setIsSignupFormSubmitting] = useState(false);
    const password = watchSignup("password");

    const signupRef = useRef(null);
    const loginRef = useRef(null);
    const sliderRef = useRef(null);
    const formSectionRef = useRef(null);

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

    const onSubmitLogin = async (data) => {
        setIsLoginFormSubmitting(true);
        
        try {
            const formData = {
                email: data.loginEmail,
                password: data.loginPassword
            };
            console.log(formData);  
            const loginResponse = await axios.post('http://localhost:3000/api/company/login', formData);
    
            const company = loginResponse.data.company;
            const token = loginResponse.data.token;
    
            if (!company) {
                console.log('company does not exist');
            } else if (company && company.password === data.loginPassword) {
                console.log('Login successful');
                console.log(token);
                console.log(company);
                
                document.cookie = `companytoken=${token}; path=/;`;
                const encodedId = btoa(company._id); 
                window.location.href = `/companyCars/${encodedId}`;
            } else {
                console.log('Invalid email or password');
            }
    
            setTimeout(() => {
                setIsLoginFormSubmitting(false);
            }, 1000);
        } catch (error) {
            console.error('Error:', error);
            setIsLoginFormSubmitting(false);
        }
    };

    const onSubmitSignup = async (data) => {
        setIsSignupFormSubmitting(true);
        console.log(data);
        const formData = {
            name: data.companyName,
            gstNumber: data.gstNumber,
            email: data.emailAddress,
            ownerName: data.ownerName,
            ownerContact: data.ownerContact,
            location: data.location,
            password: data.password, 
        };

        const createUserResponse = await axios.post('http://localhost:3000/api/company', formData);
        
        if (createUserResponse.status === 201) {
            console.log(createUserResponse.data.token);
            const token = createUserResponse.data.token;
            document.cookie = `companytoken=${token}; path=/;`;
            window.location.href = '/companyCars'
        } else {
            console.error('Error:', createUserResponse.statusText);
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
                            <p className='text-3xl font-bold'>Company Login</p>
                            <input type="email" className="email ele" placeholder="youremail@email.com" {...registerLogin("loginEmail", { required: "Please enter your email!" })}/>
                            {errorsLogin.loginEmail && <span className="error">{errorsLogin.loginEmail.message}</span>}
                            <input type="password" className="password ele" placeholder="password" {...registerLogin("loginPassword", { required: "Please enter your password!" })}/>
                            {errorsLogin.loginPassword && <span className="error">{errorsLogin.loginPassword.message}</span>}
                            <button className="clkbtn text3xl font-medium" disabled={isLoginFormSubmitting}>{isLoginFormSubmitting ? "Logging in..." : "Login"}</button>
                        </form>
                        <form className="signup-box" onSubmit={handleSubmitSignup(onSubmitSignup)}>
                            <p className='text-2xl font-bold'>Company Signup</p>
                            <div className="driverSideBySide">
                                <div className="driverLeft">
                                    <input type="text" className="company-name ele" placeholder="Company Name" {...registerSignup("companyName", { required: "Please enter Company Name!" })}/>
                                    {errorsSignup.companyName && <span className="error">{errorsSignup.companyName.message}</span>}
                                    <input type="text" className="gst-number ele" placeholder="GST Number" {...registerSignup("gstNumber", { required: "Please enter GST Number!" })}/>
                                    {errorsSignup.gstNumber && <span className="error">{errorsSignup.gstNumber.message}</span>}
                                    <input type="email" className="email ele" placeholder="Email Address" {...registerSignup("emailAddress", { required: "Please enter Email Address!" })}/>
                                    {errorsSignup.emailAddress && <span className="error">{errorsSignup.emailAddress.message}</span>}
                                    <input type="text" className="owner-name ele" placeholder="Owner Name" {...registerSignup("ownerName", { required: "Please enter Owner Name!" })}/>
                                    {errorsSignup.ownerName && <span className="error">{errorsSignup.ownerName.message}</span>}
                                </div>
                                <div className="driverRight">
                                    <input type="tel" className="owner-contact ele" placeholder="Owner Contact" {...registerSignup("ownerContact", { required: "Please enter Owner Contact!" })}/>
                                    {errorsSignup.ownerContact && <span className="error">{errorsSignup.ownerContact.message}</span>}
                                    <input type="text" className="location ele" placeholder="Location" {...registerSignup("location", { required: "Please enter Location!" })}/>
                                    {errorsSignup.location && <span className="error">{errorsSignup.location.message}</span>}
                                    <input type="password" className="password ele" placeholder="Password" {...registerSignup("password", { required: "Please enter Password!" })}/>
                                    {errorsSignup.password && <span className="error">{errorsSignup.password.message}</span>}
                                    <input type="password" className="confirm-password ele" placeholder="Confirm Password" {...registerSignup("confirmPassword", { required: "Please confirm Password!", validate: value => value === password || "Passwords do not match" })}/>
                                    {errorsSignup.confirmPassword && <span className="error">{errorsSignup.confirmPassword.message}</span>}
                                </div>
                            </div>
                            <button className="clkbtn font-medium" disabled={isSignupFormSubmitting}>{isSignupFormSubmitting ? "Signing up..." : "Signup"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default companyLoginSignup