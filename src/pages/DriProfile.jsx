import React, { useState, useEffect } from "react";
import Navbar from "../components/navBar";
import "../pagesCss/DriProfile.css";

const DriProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to handle redirect

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
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <p className="text-muted mb-1">Driver</p>
                    <p className="text-muted mb-4">Rajkot, Gujarat</p>+
                    <ul className="list-group list-group-flush rounded-3">
                      {Object.entries(userProfile).map(([key, value]) => (
                        <li
                          key={key}
                          className="list-group-item d-flex justify-content-between align-items-center py-4"
                        >
                          <span>{key}</span>
                          <span className="text-muted">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <h2 className="mb-4">Requests</h2>
                {requests.map((request) => (
                  <div key={request.id} className="card mb-3 request-card">
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="card-title">{request.name}</h5>
                      <p className="card-text">{request.description}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <button
                          onClick={() => handleAccept(request.id)}
                          className="btn btn-success me-2"
                        >
                          Accept
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => handleReject(request.id)}
                          className="btn btn-danger"
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
