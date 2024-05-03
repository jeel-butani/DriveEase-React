import React, { useState, useEffect } from 'react';
import '../pagesCss/driversList.css';
import NavBar from '../components/navBar';
import axios from 'axios';

const DriversList = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [driverData, setDriverData] = useState([]);

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

  const fetchData = async () => {
    const driverResponse = await axios.get(`http://localhost:3000/api/company/${ids}/drivers`);
    console.log(driverResponse.data);
    setDriverData(driverResponse.data.drivers);
  };

  const checkToken = () => {
    const companyTokenMatch = document.cookie.match(
      /(?:(?:^|.*;\s*)companytoken\s*=\s*([^;]*).*$)|^.*$/
    );
    const companyToken = companyTokenMatch ? companyTokenMatch[1] : null;

    console.log("Company Token:", companyToken);
    setIsLoggedIn(!!companyToken);
  };
  
  useEffect(() => {
    checkToken();
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setTimeout(() => {
        window.location.href = '/companyLoginSignup'; 
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  const handleCarDriver = () => {
    const companyId = getEncodedIdFromUrl();
    window.location.href = `/carDriverInput/${companyId}`;
  };

  const handleCars = () => {
    const companyId = getEncodedIdFromUrl();
    window.location.href = `/companyCars/${companyId}`;
  };

  return (
    <>
      <NavBar />
      <div className="driverList flex justify-between items-center">
        <div className="headDriver text-3xl font-bold">Drivers</div>
        <button className="button text-xl font-bold" onClick={handleCars}>Cars</button>
        <button className="button text-xl font-bold" onClick={handleCars}>Bikes</button>
        <button className="button text-xl font-bold" onClick={handleCarDriver}>Add</button>
      </div>
      <div className="wrapper">
        <div className="cardRow">
          {driverData.length === 0 ? (<p className="text-center text-xl font-bold mt-4">OOPs!! There are no drivers added 😔😔</p>) : (
            driverData.map((driver) => (
              <div key={driver.id} className="carCol">
                <div className="cardTitle">
                  <strong>{driver.name}</strong>
                </div>
                <div className="cardContainer">
                  <figure></figure>
                  <div className="specifications">
                    <div className="speList">
                      <div className="icon"></div>
                      <p>{driver.available ? 'Available' : 'Not Available'}</p>
                    </div>
                  </div>
                </div>
                <div className="cardBtm">
                  <div className="priceDetails">
                    <b>Price:</b>
                    <strong>{driver.price}</strong>
                  </div>
                  <div className="cardCtrl">
                    <button className="selectBtn">Book</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default DriversList;
