import React, { useState, useEffect } from "react";
import Navbar from "../components/navBar";
import "../pagesCss/DriProfile.css";
import axios from "axios";

const BookingDetails = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookDetails, setBookDetails] = useState([]);
  function getEncodedIdFromUrl() {
    const urlParts = window.location.href.split('/');
    return urlParts[urlParts.length - 1];
  }

  function decodeId(encodedId) {
    return atob(encodedId);
  }

  const encodedId = getEncodedIdFromUrl();
  const ids = decodeId(encodedId);

  const fetchData = async () => {
    const getCarResponse = await axios.get(`http://localhost:3000/api/booking/user/${ids}`);
    console.log(getCarResponse.data.bookings);
    setBookDetails(getCarResponse.data.bookings);
  }

  const checkToken = () => {
    const driverTokenMatch = document.cookie.match(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/
    );
    const driverToken = driverTokenMatch ? driverTokenMatch[1] : null;
    setIsLoggedIn(!!driverToken);
  };

  useEffect(() => {
    checkToken();
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setTimeout(() => {
        window.location.href = "/userLoginSignup";
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      {isLoggedIn ? (
        <section className="bg-light">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-11 mx-5">
                <h2 className="mb-4 text-2xl font-bold">Booking Details</h2>

                {bookDetails.map((card) => (
                  <div className="card mb-3 request-card">
                    <div className="card-body">
                      <h5 className="card-title text-l font-bold">
                        {card.type}  ({card.location})
                      </h5>
                      <p className="card-text">
                        {card.startDate} ----- To ----- {card.endDate}
                      </p>
                      <p className="card-text">
                        {card.startTime} ------------------------ {card.endTime}
                      </p>

                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default BookingDetails;
