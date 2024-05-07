import React, { useState, useEffect } from "react";
import Navbar from "../components/navBar";
import "../pagesCss/DriProfile.css";
import axios from "axios";
const DriProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [requests, setRequests] = useState([]);
  const [sDate, setSDate] = useState("");
  const [eDate, setEDate] = useState("");

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

  const fetchData = async ()=>{
    const response = await axios.get(`http://localhost:3000/api/driverRequest/request/${ids}`);
    setRequests(response.data.driverRequests);
    console.log(response.data.driverRequests);
  }

  const handleAccept = async (requestId) => {
    const formData = {
      driverId: ids, driverRequestId: requestId
    }
    const sendResponse = await axios.post(`http://localhost:3000/api/driverRequest/accept`, formData);
    window.location.href = `/driver/${encodedId}`;
    console.log(sendResponse.data);
  };

  const handleReject = async (requestId) => {
    const formData = {
      driverId: ids, driverRequestId: requestId
    }
    const sendResponse = await axios.post(`http://localhost:3000/api/driverRequest/reject`, formData);
    window.location.href = `/driver/${encodedId}`;
    console.log(sendResponse.data);
  };

  const checkToken = () => {
    const driverTokenMatch = document.cookie.match(
      /(?:(?:^|.*;\s*)drivertoken\s*=\s*([^;]*).*$)|^.*$/
    );
    const driverToken = driverTokenMatch ? driverTokenMatch[1] : null;

    console.log("Driver Token:", driverToken);
    setIsLoggedIn(!!driverToken);
  };
  useEffect(() => {
    checkToken();
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setTimeout(() => {
        window.location.href = '/driverLoginSignup';
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
        <section class="bg-light">
          <div class="container py-5">
            <div class="row justify-content-center">
              <div class="col-lg-11 mx-5">
                <h2 class="mb-4 text-2xl font-bold">Requests</h2>
                {requests.map((request) => (
                  request.isReject === "false"? (<div key={request._id} class="card mb-3 request-card">
                  <div class="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h5 class="card-title text-l font-bold">{request.startDate} ---- To ---- {request.endDate} </h5>
                      <p class="card-text">{request.startTime} ---------------- {request.endTime}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                      {request.isAccept === "false"?( <div>
                        <button onClick={() => handleAccept(request._id)} class="success">
                          Accept
                        </button>
                      </div>): null}
                      <div>
                        <button onClick={() => handleReject(request._id)} class="reject">
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                </div>): null
                ))}
              </div>
            </div>
          </div>
        </section>

      ) : null}
    </>
  );
};

export default DriProfile;
