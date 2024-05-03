import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const UserMainProfile = () => {
  return (
    <section
      style={{
        backgroundColor: "#eee",
        minHeight: "100vh",
        paddingTop: "50px",
      }}
    >
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <div style={{ marginBottom: "20px" }}>
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "250px", margin: "auto" }}
                    fluid
                  />
                </div>
                <p className="text-muted mb-1">Johnatan Smith</p>
                <p className="text-muted mb-4">User | Rajkot, Gujarat</p>
                <div className="d-flex justify-content-center mb-2"></div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow className="mb-8">
                  {" "}
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      Johnatan Smith
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow className="mb-8">
                  {" "}
                  <MDBCol sm="3">
                    <MDBCardText>Birthdate</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">11/11/2000</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow className="mb-8">
                  {" "}
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      jonathansmith@gmail.com
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow className="mb-8">
                  {" "}
                  <MDBCol sm="3">
                    <MDBCardText>Phone Number</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      +91 8989101029
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow className="mb-8">
                  {" "}
                  <MDBCol sm="3">
                    <MDBCardText>Location</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Rajkot</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow className="mb-8">
                  {" "}
                  <MDBCol sm="3">
                    <MDBCardText>Aadhar Card Number</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      1234 5678 9012
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default UserMainProfile;