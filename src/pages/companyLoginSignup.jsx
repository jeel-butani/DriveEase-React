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
                            <div className="driverSideBySide">
                                <div className="driverLeft">
                                    <input type="text" className="company-name ele" placeholder="Company Name" />
                                    <input type="text" className="gst-number ele" placeholder="GST Number" />
                                    <input type="email" className="email ele" placeholder="Email Address" />
                                    <input type="text" className="owner-name ele" placeholder="Owner Name" />
                                </div>
                                <div className="driverRight">
                                    <input type="tel" className="owner-contact ele" placeholder="Owner Contact" />
                                    <input type="text" className="location ele" placeholder="Location" />
                                    <input type="password" className="password ele" placeholder="Password" />
                                    <input type="password" className="confirm-password ele" placeholder="Confirm Password" />
                                </div>
                            </div>
                            <button className="clkbtn font-medium">Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default companyLoginSignup