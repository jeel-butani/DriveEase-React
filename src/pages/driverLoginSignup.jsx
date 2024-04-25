import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/navBar';
import { useForm } from "react-hook-form";
import '../pagesCss/userLoginSignup.css';
import axios from 'axios'; 

const driverLoginSignup = ()=> {
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
                aadharCardNumber: data.loginAadhar,
                password: data.loginPassword
            };
            console.log(formData);  
            const loginResponse = await axios.post('http://localhost:3000/api/driver/login', formData);
    
            const driver = loginResponse.data.driver;
            const token = loginResponse.data.token;
    
            if (!driver) {
                console.log('driver does not exist');
            } else if (driver && driver.password === data.loginPassword) {
                console.log('Login successful');
                console.log(token);
                
                document.cookie = `drivertoken=${token}; path=/;`;
                window.location.href = '/'
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

        try {
            const fileFormData = new FormData();
            fileFormData.append('driverAadhar ele', data.adharCardPhoto[0]);
            console.log(fileFormData); 
            console.log(data.adharCardPhoto); 

            const fileFormDataLicense = new FormData();
            fileFormDataLicense.append('driverLicense ele', data.licensePhoto[0]);
            console.log(fileFormDataLicense); 
            console.log(data.licensePhoto); 

            const uploadLicenseResponse = await axios.post('http://localhost:3000/driver/license', fileFormDataLicense,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            const countLicense = uploadLicenseResponse.data.count;
            const filenameLicense = `Driver_License_${countLicense+1}`;
            console.log(uploadLicenseResponse.data);

            const uploadAdharResponse = await axios.post('http://localhost:3000/driver/profile', fileFormData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            const countAadhar = uploadAdharResponse.data.count;
            const filenameAdhar =  `Driver_Aadhar_${countAadhar+1}`;

            const formData = {
                name: data.driverName,
                birthdate: data.birthdate,
                licenseNumber: data.licenseNumber,
                licensePhotoUrl: filenameLicense,
                aadharCardNumber: data.adharCardNumber,
                aadharCardPhotoUrl: filenameAdhar, 
                price: data.price,
                location: data.location,
                phoneNumber: data.phoneNumber,
                typeOfVehicle: data.driverWheelType,
                password: data.password
            };
            console.log(formData);
            const createUserResponse = await axios.post('http://localhost:3000/api/driver', formData);
            
            if (createUserResponse.status === 201) {
                console.log(createUserResponse.data);
                document.cookie = `drivertoken=${createUserResponse.data.token}; path=/;`;
                const encodedId = btoa(createUserResponse.data.driver._id);
                window.location.href = `/driverProfile/${encodedId}`;
            } else {
                console.error('Error:', createUserResponse.statusText);
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
                            <p className='text-3xl font-bold'>Driver Login</p>
                            <input type="text" className="aadharNum ele" placeholder="Aadhar number" {...registerLogin("loginAadhar", { required: "Please enter Aadhar number!!"})}/>
                            {errorsLogin.loginAadhar && <span className="error">{errorsLogin.loginAadhar.message}</span>}
                            <input type="password" className="password ele" placeholder="password" {...registerLogin("loginPassword", { required: "Please enter Password!" })}/>
                            {errorsLogin.loginPassword && <span className="error">{errorsLogin.loginPassword.message}</span>}
                            <button type="submit" className="driver-submit-btn" disabled={isSignupFormSubmitting || isLoginFormSubmitting} >{isLoginFormSubmitting ? "Logging in..." : "Login"}</button>
                        </form>

                        <form className="signup-box" onSubmit={handleSubmitSignup(onSubmitSignup)}>
                            <p className='text-2xl font-bold'>Driver Details</p>
                            <div className="driverSideBySide">
                                <div className="driverLeft">
                                    <input type="text" className="driver-name ele" placeholder="Driver Name" {...registerSignup("driverName", { required: "Please enter Driver Name!" })}/>
                                    {errorsSignup.driverName && <span className="error">{errorsSignup.driverName.message}</span>}
                                    <input type="text" className="license-number ele" placeholder="License Number" {...registerSignup("licenseNumber", { required: "Please enter License Number!" })}/>
                                    {errorsSignup.licenseNumber && <span className="error">{errorsSignup.licenseNumber.message}</span>}
                                    <input type="file" className="driverLicense ele" accept="image/*, .pdf" {...registerSignup("licensePhoto", { required: "Please upload License Photo!" })}/>
                                    {errorsSignup.licensePhoto && <span className="error">{errorsSignup.licensePhoto.message}</span>}
                                    <input type="text" className="adharcard-number ele" placeholder="Adharcard Number" {...registerSignup("adharCardNumber", { required: "Please enter Aadharcard Number!" })}/>
                                    {errorsSignup.adharCardNumber && <span className="error">{errorsSignup.adharCardNumber.message}</span>}
                                    <input type="file" className="driverAadhar ele" accept="image/*, .pdf" {...registerSignup("adharCardPhoto", { required: "Please upload Aadharcard Photo!" })}/>
                                    {errorsSignup.adharCardPhoto && <span className="error">{errorsSignup.adharCardPhoto.message}</span>}
                                    <input type="password" className="password ele" placeholder="password" {...registerSignup("password", { required: "Please enter Password!" })}/>
                                    {errorsSignup.password && <span className="error">{errorsSignup.password.message}</span>}
                                    <input type="password" className="confirm-password ele" placeholder="confirm password" {...registerSignup("confirmPassword", { required: "Please confirm Password!", validate: value => value === password || "Passwords do not match" })}/>
                                    {errorsSignup.confirmPassword && <span className="error">{errorsSignup.confirmPassword.message}</span>}
                                </div>
                                <div className="driverRight">
                                    <input type="date" className="birthdate ele" placeholder="Birthdate" {...registerSignup("birthdate", { required: "Please enter Birthdate!" })}/>
                                    {errorsSignup.birthdate && <span className="error">{errorsSignup.birthdate.message}</span>}
                                    <input type="number" className="price ele" placeholder="Price" {...registerSignup("price", { required: "Please enter Price!" })}/>
                                    {errorsSignup.price && <span className="error">{errorsSignup.price.message}</span>}
                                    <input type="email" className="email-address ele" placeholder="Email Address" {...registerSignup("emailAddress", { required: "Please enter Email Address!" })}/>
                                    {errorsSignup.emailAddress && <span className="error">{errorsSignup.emailAddress.message}</span>}
                                    <input type="tel" className="phone-number ele" placeholder="Phone Number" {...registerSignup("phoneNumber", { required: "Please enter Phone Number!" })}/>
                                    {errorsSignup.phoneNumber && <span className="error">{errorsSignup.phoneNumber.message}</span>}
                                    <select className="driver-wheel-type ele" {...registerSignup("driverWheelType", { required: "Please select Driver Wheel Type!" })}>
                                        <option value="2-wheel">2 Wheel Driver</option>
                                        <option value="4-wheel">4 Wheel Driver</option>
                                    </select>
                                    {errorsSignup.driverWheelType && <span className="error">{errorsSignup.driverWheelType.message}</span>}
                                    <input type="text" className="Location ele" placeholder="Location" {...registerSignup("location", { required: "Please enter Location!" })}/>
                                    {errorsSignup.location && <span className="error">{errorsSignup.location.message}</span>}
                                </div>
                            </div>
                            <button type='submit' className="driver-submit-btn" disabled={isSignupFormSubmitting || isLoginFormSubmitting}>{isSignupFormSubmitting ? "Signing up..." : "Signup"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default driverLoginSignup