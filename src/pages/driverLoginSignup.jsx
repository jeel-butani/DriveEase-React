import React, { useRef, useEffect } from 'react';
import Navbar from '../components/navBar';


const driverLoginSignup = ()=> {
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
                            <p className='text-3xl font-bold'>Driver Login</p>
                            <input type="email" className="email ele" placeholder="youremail@email.com" />
                            <input type="password" className="password ele" placeholder="password" />
                            <button className="clkbtn text3xl font-medium">Login</button>
                        </div>
                        <div className="driver-input-box">
                            <p className='text-2xl font-bold'>Driver Details</p>
                            <div className="driverSideBySide">
                                <div className="driverLeft">
                                    <input type="text" className="driver-name ele" placeholder="Driver Name" />
                                    <input type="text" className="license-number ele" placeholder="License Number" />
                                    <input type="file" className="license-photo ele" accept="image/*" />
                                    <input type="file" className="adharcard-photo ele" accept="image/*" />
                                    <input type="text" className="adharcard-number ele" placeholder="Adharcard Number" />
                                    <input type="password" className="password ele" placeholder="password" />
                                    <input type="password" className="confirm-password ele" placeholder="confirm password" />
                                </div>
                                <div className="driverRight">
                                    <input type="date" className="birthdate ele" placeholder="Birthdate" />
                                    <input type="number" className="price ele" placeholder="Price" />
                                    <input type="email" className="email-address ele" placeholder="Email Address" />
                                    <input type="tel" className="phone-number ele" placeholder="Phone Number" />
                                    <select className="driver-wheel-type ele">
                                        <option value="2-wheel">2 Wheel Driver</option>
                                        <option value="4-wheel">4 Wheel Driver</option>
                                    </select>
                                    <input type="text" className="Location ele" placeholder="Location" />
                                    
                                </div>
                            </div>
                            <button className="driver-submit-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default driverLoginSignup