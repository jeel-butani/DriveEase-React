import React, { useState, useEffect } from "react";
import Navbar from "../components/navBar";
import "../pagesCss/DriProfile.css";

const BookingDetails = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to check if the driver is logged in
  const checkToken = () => {
    const driverTokenMatch = document.cookie.match(
      /(?:(?:^|.*;\s*)drivertoken\s*=\s*([^;]*).*$)|^.*$/
    );
    const driverToken = driverTokenMatch ? driverTokenMatch[1] : null;
    setIsLoggedIn(!!driverToken);
  };

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setTimeout(() => {
        window.location.href = "/driverLoginSignup";
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  // Sample booking details data
  const bookingDetails = {
    location: "Sample Location",
    startDate: "2024-05-05",
    endDate: "2024-05-07",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    type: "Car",
  };

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
                <div className="card mb-3 request-card">
                  <div className="card-body">
                    <h5 className="card-title text-l font-bold">
                      Location: {bookingDetails.location}
                    </h5>
                    <p className="card-text">
                      Start Date: {bookingDetails.startDate}
                    </p>
                    <p className="card-text">
                      End Date: {bookingDetails.endDate}
                    </p>
                    <p className="card-text">
                      Start Time: {bookingDetails.startTime}
                    </p>
                    <p className="card-text">
                      End Time: {bookingDetails.endTime}
                    </p>
                    <p className="card-text">Type: {bookingDetails.type}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default BookingDetails;
