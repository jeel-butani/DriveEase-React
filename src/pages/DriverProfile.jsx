import React, { useState, useEffect } from 'react';
import image from "../assets/images/driver.png"
import Navbar from '../components/navBar';
import axios from 'axios';
const DriverProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [driverData, setDriverData] = useState([]);
  const [formattedDate, setFormattedDate] = useState("");

  function getEncodedIdFromUrl() {
    const urlParts = window.location.href.split('/');
    return urlParts[urlParts.length - 1];
  }

  function decodeId(encodedId) {
    return atob(encodedId);
  }

  const encodedId = getEncodedIdFromUrl();
  const ids = decodeId(encodedId);

  const checkToken = () => {
    const companyTokenMatch = document.cookie.match(
      /(?:(?:^|.*;\s*)drivertoken\s*=\s*([^;]*).*$)|^.*$/
    );
    const companyToken = companyTokenMatch ? companyTokenMatch[1] : null;
    setIsLoggedIn(!!companyToken);
  };

  const fetchData = async () => {
    const getCarResponse = await axios.get(`http://localhost:3000/api/driver/${ids}`);
    console.log(getCarResponse.data.driver);
    const originalDate = new Date(getCarResponse.data.driver.birthdate);
    setFormattedDate(`${originalDate.getDate()}-${originalDate.getMonth() + 1}-${originalDate.getFullYear()}`);

    console.log(formattedDate);
    setDriverData(getCarResponse.data.driver);
  };

  useEffect(() => {
    checkToken();
    fetchData();
  }, [])

  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setTimeout(() => {
        window.location.href = '/userLoginSignup';
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  return (
    <><Navbar /><section className="bg-gray-200 min-h-screen pt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={image}
                alt="avatar"
                className="rounded-full w-64 mx-auto" />
            </div>
            <p className="text-center text-gray-600 mb-1">{driverData.name}</p>
            <p className="text-center text-gray-600 mb-4">
              Driver | {driverData.location}
            </p>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white rounded shadow p-4">
              <div className="mb-8">
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Name</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">{driverData.name}</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Birthdate</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">{formattedDate}</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">License Number</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">{driverData.licenseNumber}</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Aadhar Card Number</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">{driverData.aadharCardNumber}</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Price</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">{driverData.price}Rs.</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Location</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">{driverData.location}</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Phone Number</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">{driverData.phoneNumber}</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Type of Vehicle</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">{driverData.typeOfVehicle}</p>
                  </div>
                </div>
                <hr className="my-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></>
  );
};

export default DriverProfile;
