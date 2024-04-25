import React, { useState, useEffect } from "react";
import Navbar from "../components/navBar";
import "../pagesCss/DriProfile.css";

const DriProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to handle redirect

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

  const userProfile = {
    fullName: "ABC XYZ",
    email: "example@example.com",
    mobile: "8978786567",
    address: "Rajkot, Gujarat",
  };

  const initialRequests = [
    { id: 1, name: "Request 1", description: "Description of request 1" },
    { id: 2, name: "Request 2", description: "Description of request 2" },
    { id: 3, name: "Request 3", description: "Description of request 3" },
  ];

  const [requests, setRequests] = useState(initialRequests);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleAccept = (requestId) => {
    console.log("Accepted request with ID:", requestId);
  };

  const handleReject = (requestId) => {
    console.log("Rejected request with ID:", requestId);
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
            <div class="row">
              <div class="col-lg-4">
                <div class="card mb-4">
                  <div class="card-body text-center">
                    <p class="text-muted mb-1">Driver</p>
                    <p class="text-muted mb-4">Rajkot, Gujarat</p>
                    <ul class="list-group list-group-flush rounded-3">
                      {Object.entries(userProfile).map(([key, value]) => (
                        <li
                          key={key}
                          class="list-group-item d-flex justify-content-between align-items-center py-4"
                        >
                          <span>{key}</span>
                          <span class="text-muted">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-lg-8">
                <h2 class="mb-4">Requests</h2>
                {requests.map((request) => (
                  <div key={request.id} class="card mb-3 request-card">
                    <div class="card-body d-flex justify-content-between align-items-center">
                      <div>
                        <h5 class="card-title">{request.name}</h5>
                        <p class="card-text">{request.description}</p>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <button
                            onClick={() => handleAccept(request.id)}
                            class="success"
                          >
                            Accept
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => handleReject(request.id)}
                            class="reject"
                          >
                            Reject
                          </button>
                        </div>
                      </div>
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

export default DriProfile;
