import React, { useRef, useEffect } from 'react';
import Navbar from '../components/navBar';

const companyLoginSignup = ()=> {
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
                        
                        <div className="login-box">
                            <p className='text-3xl font-bold'>Company Login</p>
                            <input type="email" className="email ele" placeholder="youremail@email.com" />
                            <input type="password" className="password ele" placeholder="password" />
                            <button className="clkbtn text3xl font-medium">Login</button>
                        </div>
                        <div className="signup-box">
                            <p className='text-2xl font-bold'>Company Signup</p>
                            <input type="text" className="name ele" placeholder="Enter your name" />
                            <input type="email" className="email ele" placeholder="youremail@email.com" />
                            <input type="password" className="password ele" placeholder="password" />
                            <input type="password" className="password ele" placeholder="Confirm password" />
                            <button className="clkbtn font-medium">Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default companyLoginSignup