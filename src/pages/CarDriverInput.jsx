import React, { useRef, useEffect } from 'react';
import '../pagesCss/carDriverInput.css'
import Navbar from '../components/navBar';

const CarDriverInput = () => {
    const carRef = useRef(null);
    const driverRef = useRef(null);
    const sliderRef = useRef(null);
    const formSectionRef = useRef(null);

    useEffect(() => {
        const carButton = carRef.current;
        const driverButton = driverRef.current;
        const slider = sliderRef.current;
        const formSection = formSectionRef.current;

        const handleCarClick = () => {
            slider.classList.add("moveslider");
            formSection.classList.add("form-section-move");
        };

        const handleDriverClick = () => {
            slider.classList.remove("moveslider");
            formSection.classList.remove("form-section-move");
        };

        carButton.addEventListener("click", handleCarClick);
        driverButton.addEventListener("click", handleDriverClick);

        return () => {
            carButton.removeEventListener("click", handleCarClick);
            driverButton.removeEventListener("click", handleDriverClick);
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
                        <button className="car" ref={driverRef}>Car</button>
                        <button className="driver" ref={carRef}>Driver</button>
                    </div>
                    <div className="form-section" ref={formSectionRef}>
                        
                        <div className="car-input-box">
                            <p className='text-3xl font-bold'>Car Details</p>
                            <input type="text" className="car-name ele" placeholder="Car Name" />
                            <input type="text" className="company-name ele" placeholder="Company Name" />
                            <select className="car-type ele">
                                <option value="manual">Manual</option>
                                <option value="automatic">Automatic</option>
                            </select>
                            <input type="number" className="seater ele" placeholder="Number of Seats" />
                            <input type="number" className="amount ele" placeholder="Amount" />
                            <input type="file" className="image ele" accept="image/*" />
                            <button className="car-submit-btn">Submit</button>
                        </div>
                        <div className="driver-input-box">
                            <p className='text-2xl font-bold'>Driver Details</p>
                            <input type="text" className="driver-name ele" placeholder="Driver Name" />
                            <input type="number" className="driver-age ele" placeholder="Age" />
                            <input type="text" className="license-number ele" placeholder="License Number" />
                            <input type="text" className="driver-company ele" placeholder="Company Name" />
                            <input type="number" className="driver-amount ele" placeholder="Amount" />
                            <button className="driver-submit-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarDriverInput;
