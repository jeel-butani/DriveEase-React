import React, { useState } from "react";

const DriProfile = () => {
  // Dummy data for user profile
  const userProfile = {
    fullName: "ABC XYZ",
    email: "example@example.com",
    mobile: "8978786567",
    address: "Rajkot, Gujarat",
    // Add other user details here
  };

  // Dummy data for requests
  const initialRequests = [
    { id: 1, name: "Request 1", description: "Description of request 1" },
    { id: 2, name: "Request 2", description: "Description of request 2" },
    { id: 3, name: "Request 3", description: "Description of request 3" },
  ];

  // State to manage requests
  const [requests, setRequests] = useState(initialRequests);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Function to handle accepting a request
  const handleAccept = (requestId) => {
    // Logic to accept the request
    console.log("Accepted request with ID:", requestId);
  };

  // Function to handle rejecting a request
  const handleReject = (requestId) => {
    // Logic to reject the request
    console.log("Rejected request with ID:", requestId);
  };
  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              {/* User Profile Sidebar */}
              <div className="card mb-4">
                <div className="card-body text-center">
                  <p className="text-muted mb-1">Driver</p>
                  <p className="text-muted mb-4">Rajkot, Gujarat</p>
                  {/* Display user details */}
                  <ul className="list-group list-group-flush rounded-3">
                    {Object.entries(userProfile).map(([key, value]) => (
                      <li
                        key={key}
                        className="list-group-item d-flex justify-content-between align-items-center p-3"
                      >
                        <span>{key}</span>
                        <span className="text-muted">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Display name on the right side */}
            <div className="col-lg-8">
              <h2 className="mb-4">Requests</h2>
              {requests.map((request) => (
                <div key={request.id} className="card mb-3">
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h5>{request.name}</h5>
                      <p>{request.description}</p>
                    </div>
                    <div>
                      <button
                        onClick={() => handleAccept(request.id)}
                        className="btn btn-success me-2"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleReject(request.id)}
                        className="btn btn-danger"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DriProfile;
