import React, { useState, useEffect } from 'react';
import Navbar from '../components/navBar';
import axios from 'axios';
const CompanyProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [companyData, setCompanyData] = useState([]);

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
      /(?:(?:^|.*;\s*)companytoken\s*=\s*([^;]*).*$)|^.*$/
    );
    const companyToken = companyTokenMatch ? companyTokenMatch[1] : null;
    setIsLoggedIn(!!companyToken);
  };

  const fetchData = async () => {
    const getCarResponse = await axios.get(`http://localhost:3000/api/company/${ids}`);
    console.log(getCarResponse.data.company);
    setCompanyData(getCarResponse.data.company);
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
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-1 flex items-center justify-center w-500">
          <div className="lg:col-span-3">
            <div className="bg-white rounded shadow p-4">
              <div className="mb-8">
                <div className="flex mb-4">
                  <div className="w-1/2">
                    <p className="font-semibold">Company Name</p>
                  </div>
                  <div className="w-1/2">
                    <p className="text-gray-600">{companyData.name}</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/2">
                    <p className="font-semibold">GST Number</p>
                  </div>
                  <div className="w-1/2">
                    <p className="text-gray-600">{companyData.gstNumber}</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/2">
                    <p className="font-semibold">Email</p>
                  </div>
                  <div className="w-1/2">
                    <p className="text-gray-600">{companyData.email}</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/2">
                    <p className="font-semibold">Owner Name</p>
                  </div>
                  <div className="w-1/2">
                    <p className="text-gray-600">{companyData.ownerName}</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/2">
                    <p className="font-semibold">Location</p>
                  </div>
                  <div className="w-1/2">
                    <p className="text-gray-600">{companyData.location}</p>
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

export default CompanyProfile;
