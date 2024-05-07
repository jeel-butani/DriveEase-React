import React, { useState, useEffect } from 'react';
import image from "../assets/images/user.png"
import Navbar from '../components/navBar';
import axios from 'axios';
const UserMainProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);
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
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/
    );
    const companyToken = companyTokenMatch ? companyTokenMatch[1] : null;
    setIsLoggedIn(!!companyToken);
  };

  const fetchData = async () => {
    const getCarResponse = await axios.get(`http://localhost:3000/api/user/${ids}`);
    console.log(getCarResponse.data.user);
    const originalDate = new Date(getCarResponse.data.user.birthdate);
    setFormattedDate(`${originalDate.getDate()}-${originalDate.getMonth() + 1}-${originalDate.getFullYear()}`);

    console.log(formattedDate);
    setUserData(getCarResponse.data.user);
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

  const bookings = ()=>{
    encodedId
    window.location.href = `/bookdetails/${encodedId}`;
  };

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
            <p className="text-center text-gray-600 mb-1">{userData.name}</p>
            <p className="text-center text-gray-600 mb-4">
              User

            </p>

          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded shadow p-4">
              <div className="mb-8">
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Full Name</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">{userData.name}</p>
                  </div>
                  <div className="w-3/3">
                    <p className="text-gray-600"><button class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={bookings}>
                      Bookings
                    </button></p>
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
                    <p className="font-semibold">Email</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">{userData.email}</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Phone Number</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">{userData.phoneNumber}</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Location</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">{userData.location}</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Aadhar Card Number</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">{userData.aadharCard}</p>
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

export default UserMainProfile;
