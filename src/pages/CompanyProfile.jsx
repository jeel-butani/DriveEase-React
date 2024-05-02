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

const CompanyProfile = () => {
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
                <p className="text-muted mb-1">XYZ</p>
                <p className="text-muted mb-4">Company | Rajkot, Gujarat</p>
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
                    <MDBCardText>Company l Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">XYZ</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow className="mb-8">
                  {" "}
                  <MDBCol sm="3">
                    <MDBCardText>GST Number</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      1234 5678 9012
                    </MDBCardText>
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
                      xyz@gmail.com
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow className="mb-8">
                  {" "}
                  <MDBCol sm="3">
                    <MDBCardText>Owner Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      Johnatan Smith
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />


                <MDBRow className="mb-6">
                  {" "}
                  <MDBCol sm="3">
                    <MDBCardText>Location</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Rajkot</MDBCardText>
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

export default CompanyProfile;
