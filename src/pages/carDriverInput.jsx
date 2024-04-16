import React, { useRef, useEffect } from "react";
import "../pagesCss/carDriverInput.css";
import Navbar from "../components/navBar";

const carDriverInput = () => {
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
        <Navbar />
      </header>
      <div className="body">
        <div className="main-container">
          <div className="slider" ref={sliderRef}></div>
          <div className="btn">
            <button className="car" ref={driverRef}>
              Car
            </button>
            <button className="driver" ref={carRef}>
              Driver
            </button>
          </div>
          <div className="form-section" ref={formSectionRef}>
            <div className="car-input-box">
              <p className="text-3xl font-bold">Car Details</p>
              <div className="carSideBySide">
                <div className="carLeft">
                  <input
                    type="text"
                    className="car-name ele"
                    placeholder="Car Name"
                  />
                  <select className="car-type ele">
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                  </select>
                  <select className="fuel-type ele">
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="electric">Electric</option>
                  </select>
                  <input
                    type="number"
                    className="seater ele"
                    placeholder="Number of Seats"
                  />
                  <input
                    type="number"
                    className="seater ele"
                    placeholder="Car Register Number"
                  />
                </div>
                <div className="carRight">
                  <input
                    type="text"
                    className="company-name ele"
                    placeholder="Company Name"
                  />
                  <input
                    type="number"
                    className="amount ele"
                    placeholder="Amount"
                  />
                  <input type="file" className="image ele" accept="image/*" />
                  <input
                    type="number"
                    className="available-count ele"
                    placeholder="Number Available"
                  />
                  <select className="car-wheel-type ele">
                    <option value="2-wheel">2 Wheel</option>
                    <option value="4-wheel">4 Wheel</option>
                  </select>
                </div>
              </div>
              <button className="car-submit-btn">Submit</button>
            </div>
            <div className="driver-input-box">
              <p className="text-2xl font-bold">Driver Details</p>
              <div className="driverSideBySide">
                <div className="driverLeft">
                  <input
                    type="text"
                    className="driver-name ele"
                    placeholder="Driver Name"
                  />
                  <input
                    type="text"
                    className="license-number ele"
                    placeholder="License Number"
                  />
                  <input
                    type="file"
                    className="license-photo ele"
                    accept="image/*"
                  />
                  <input
                    type="file"
                    className="adharcard-photo ele"
                    accept="image/*"
                  />
                  <input
                    type="text"
                    className="adharcard-number ele"
                    placeholder="Adharcard Number"
                  />
                </div>
                <div className="driverRight">
                  <input
                    type="date"
                    className="birthdate ele"
                    placeholder="Birthdate"
                  />
                  <input
                    type="number"
                    className="price ele"
                    placeholder="Price"
                  />
                  <input
                    type="email"
                    className="email-address ele"
                    placeholder="Email Address"
                  />
                  <input
                    type="tel"
                    className="phone-number ele"
                    placeholder="Phone Number"
                  />
                  <select className="driver-wheel-type ele">
                    <option value="2-wheel">2 Wheel Driver</option>
                    <option value="4-wheel">4 Wheel Driver</option>
                  </select>
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

export default carDriverInput;
