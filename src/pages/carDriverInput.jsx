import React, { useState, useRef, useEffect } from "react";
import "../pagesCss/carDriverInput.css";
import Navbar from "../components/navBar";
import { useForm } from "react-hook-form";
import axios from "axios";

const carDriverInput = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {
    register: registerCar,
    handleSubmit: handleSubmitCar,
    formState: { errors: carErrors }
  } = useForm();
  const {
    register: registerSignup,
    handleSubmit: handleSubmitDriver,
    formState: { errors: errorsSignup },
    watch: watchSignup 
  } = useForm();
  const carRef = useRef(null);
  const driverRef = useRef(null);
  const sliderRef = useRef(null);
  const formSectionRef = useRef(null);
  const [isCarDetailSubmit, setIsCarDetailSubmit] = useState(false);
  const [isDriverDetailSubmit, setIsDriverDetailSubmit] = useState(false);
  const password = watchSignup("password");

  const checkToken = () => {
    const companyTokenMatch = document.cookie.match(
      /(?:(?:^|.*;\s*)companytoken\s*=\s*([^;]*).*$)|^.*$/
    );
    const companyToken = companyTokenMatch ? companyTokenMatch[1] : null;

    console.log("Company Token:", companyToken);
    setIsLoggedIn(!!companyToken);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setTimeout(() => {
        window.location.href = '/companyLoginSignup'; 
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  

  useEffect(() => {

    checkToken();
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

  function getEncodedIdFromUrl() {
    const urlParts = window.location.href.split('/');
    return urlParts[urlParts.length - 1];
  }
  function decodeId(encodedId) {
    return atob(encodedId);
  }
  const encodedId = getEncodedIdFromUrl();

  const ids = decodeId(encodedId);
  console.log('Decoded ID:', ids);

  const onSubmitCar = async (data) => {
    setIsCarDetailSubmit(true);
    console.log(data);
    if (data.carWheelType === "4-wheel") {
      try {
        const fileFormData = new FormData();
        fileFormData.append('image', data.carImage[0]);

        const uploadResponse = await axios.post('http://localhost:3000/car/image', fileFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          });
        const filename = uploadResponse.data.image;

        const formData = {
          carName: data.carName,
          fuelType: data.fuelType,
          transmissionType: data.carType,
          seats: data.numberOfSeats,
          companyName: data.companyName,
          amount: data.amount,
          imageUrl: filename,
          totalCount: data.availableCount,
          availableCount: data.availableCount
        };
        console.log(formData)
        const createCarResponse = await axios.post(`http://localhost:3000/api/company/${ids}/cars`, formData);

        if (createCarResponse.status === 201) {
          console.log(createCarResponse.data);
          const encodedId = btoa(ids);
          window.location.href = `/companyCars/${encodedId}`;
        } else {
          console.error('Error:', createCarResponse.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    else {
      try {
        const fileFormData = new FormData();
        fileFormData.append('image', data.carImage[0]);

        const uploadResponse = await axios.post('http://localhost:3000/bike/image', fileFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          });
        const filename = uploadResponse.data.image;
        var type;
        if (data.carType === "manual") {
          type = "Bike";
        } else {
          type = "Scotty";
        }

        const formData = {
          bikeName: data.carName,
          fuel: data.fuelType,
          seats: data.numberOfSeats,
          companyName: data.companyName,
          amount: data.amount,
          imageUrl: filename,
          totalCount: data.availableCount,
          availableCount: data.availableCount,
          type: type
        };
        console.log(formData)
        const createBikeResponse = await axios.post(`http://localhost:3000/api/company/${ids}/bikes`, formData);

        if (createBikeResponse.status === 201) {
          console.log(createBikeResponse.data);
          const encodedId = btoa(ids);
          window.location.href = `/companyCars/${encodedId}`;
        } else {
          console.error('Error:', createBikeResponse.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    setIsCarDetailSubmit(false);
  };

  const onSubmitDriver = async (data) => {
    setIsDriverDetailSubmit(true);
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

      const filenameLicense = uploadLicenseResponse.data.image;
      console.log(uploadLicenseResponse.data);

      const uploadAdharResponse = await axios.post('http://localhost:3000/driver/profile', fileFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        });

      const filenameAdhar = uploadAdharResponse.data.image;

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
      const createUserResponse = await axios.post(`http://localhost:3000/api/company/${ids}/drivers`, formData);

      if (createUserResponse.status === 201) {
        console.log(createUserResponse.data);
        const encodedId = btoa(ids);
        window.location.href = `/companyCars/${encodedId}`;
      } else {
        console.error('Error:', createUserResponse.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
            <form className="car-input-box" onSubmit={handleSubmitCar(onSubmitCar)}>
              <p className="text-2xl font-bold">Car Details</p>
              <div className="carSideBySide">
                <div className="carLeft">
                  <input
                    type="text"
                    className="car-name ele"
                    placeholder="Car Name"
                    {...registerCar("carName", { required: "Please enter Car Name" })}
                  />
                  {carErrors.carName && <span className="error">{carErrors.carName.message}</span>}

                  <select className="car-type ele" {...registerCar("carType")}>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                  </select>

                  <select className="fuel-type ele" {...registerCar("fuelType")}>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="electric">Electric</option>
                  </select>

                  <input
                    type="number"
                    className="seater ele"
                    placeholder="Number of Seats"
                    {...registerCar("numberOfSeats", { required: "Please enter Number of Seats" })}
                  />
                  {carErrors.numberOfSeats && <span className="error">{carErrors.numberOfSeats.message}</span>}
                  <input
                    type="text"
                    className="company-name ele"
                    placeholder="Company Name"
                    {...registerCar("companyName", { required: "Please enter Company Name" })}
                  />
                  {carErrors.companyName && <span className="error">{carErrors.companyName.message}</span>}
                </div>

                <div className="carRight">
                  <input
                    type="number"
                    className="amount ele"
                    placeholder="Amount"
                    {...registerCar("amount", { required: "Please enter Amount" })}
                  />
                  {carErrors.amount && <span className="error">{carErrors.amount.message}</span>}
                  <input
                    type="file"
                    className="image ele"
                    accept="image/*"
                    {...registerCar("carImage", { required: "Please upload Car Image!" })}
                  />
                  {carErrors.carImage && <span className="error">{carErrors.carImage.message}</span>}


                  <input
                    type="number"
                    className="available-count ele"
                    placeholder="Total Number of Car"
                    {...registerCar("availableCount", { required: "Please enter Total Number of Car" })}
                  />
                  {carErrors.availableCount && <span className="error">{carErrors.availableCount.message}</span>}

                  <select className="car-wheel-type ele" {...registerCar("carWheelType")}>
                    <option value="2-wheel">2 Wheel</option>
                    <option value="4-wheel">4 Wheel</option>
                  </select>
                </div>
              </div>
              <button className="car-submit-btn" disabled={isCarDetailSubmit}>
                {isCarDetailSubmit ? "Submitting..." : "Submit"}
              </button>
            </form>
            <form className="driver-input-box" onSubmit={handleSubmitDriver(onSubmitDriver)}>
              <p className="text-2xl font-bold">Driver Details</p>
              <div className="driverSideBySide">
                <div className="driverLeft">
                  <input type="text" className="driver-name ele" placeholder="Driver Name" {...registerSignup("driverName", { required: "Please enter Driver Name!" })} />
                  {errorsSignup.driverName && <span className="error">{errorsSignup.driverName.message}</span>}
                  <input type="text" className="license-number ele" placeholder="License Number" {...registerSignup("licenseNumber", { required: "Please enter License Number!" })} />
                  {errorsSignup.licenseNumber && <span className="error">{errorsSignup.licenseNumber.message}</span>}
                  <input type="file" className="driverLicense ele" accept="image/*, .pdf" {...registerSignup("licensePhoto", { required: "Please upload License Photo!" })} />
                  {errorsSignup.licensePhoto && <span className="error">{errorsSignup.licensePhoto.message}</span>}
                  <input type="text" className="adharcard-number ele" placeholder="Adharcard Number" {...registerSignup("adharCardNumber", { required: "Please enter Aadharcard Number!" })} />
                  {errorsSignup.adharCardNumber && <span className="error">{errorsSignup.adharCardNumber.message}</span>}
                  <input type="file" className="driverAadhar ele" accept="image/*, .pdf" {...registerSignup("adharCardPhoto", { required: "Please upload Aadharcard Photo!" })} />
                  {errorsSignup.adharCardPhoto && <span className="error">{errorsSignup.adharCardPhoto.message}</span>}
                  <input type="password" className="password ele" placeholder="password" {...registerSignup("password", { required: "Please enter Password!" })} />
                  {errorsSignup.password && <span className="error">{errorsSignup.password.message}</span>}
                  <input type="password" className="confirm-password ele" placeholder="confirm password" {...registerSignup("confirmPassword", { required: "Please confirm Password!", validate: value => value === password || "Passwords do not match" })} />
                  {errorsSignup.confirmPassword && <span className="error">{errorsSignup.confirmPassword.message}</span>}
                </div>
                <div className="driverRight">
                  <input type="date" className="birthdate ele" placeholder="Birthdate" {...registerSignup("birthdate", { required: "Please enter Birthdate!" })} />
                  {errorsSignup.birthdate && <span className="error">{errorsSignup.birthdate.message}</span>}
                  <input type="number" className="price ele" placeholder="Price" {...registerSignup("price", { required: "Please enter Price!" })} />
                  {errorsSignup.price && <span className="error">{errorsSignup.price.message}</span>}
                  <input type="email" className="email-address ele" placeholder="Email Address" {...registerSignup("emailAddress", { required: "Please enter Email Address!" })} />
                  {errorsSignup.emailAddress && <span className="error">{errorsSignup.emailAddress.message}</span>}
                  <input type="tel" className="phone-number ele" placeholder="Phone Number" {...registerSignup("phoneNumber", { required: "Please enter Phone Number!" })} />
                  {errorsSignup.phoneNumber && <span className="error">{errorsSignup.phoneNumber.message}</span>}
                  <select className="driver-wheel-type ele" {...registerSignup("driverWheelType", { required: "Please select Driver Wheel Type!" })}>
                    <option value="2-wheel">2 Wheel Driver</option>
                    <option value="4-wheel">4 Wheel Driver</option>
                  </select>
                  {errorsSignup.driverWheelType && <span className="error">{errorsSignup.driverWheelType.message}</span>}
                  <input type="text" className="Location ele" placeholder="Location" {...registerSignup("location", { required: "Please enter Location!" })} />
                  {errorsSignup.location && <span className="error">{errorsSignup.location.message}</span>}
                </div>
              </div>
              <button className="driver-submit-btn" disabled={isDriverDetailSubmit}>
                {isDriverDetailSubmit ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default carDriverInput;
