import React from 'react'
import '../pagesCss/driversList.css'
import NavBar from '../components/navBar';
import { Link } from "react-router-dom";
const driversList = () => {
    const driverData = [
        {
          id: 1,
          name: "John Doe",
          licenseNumber: "ABCD-1234-5678",
          licensePhoto: "https://example.com/john-license.jpg",
          aadharCardNumber: "1234-5678-9012",
          aadharCardPhoto: "https://example.com/john-aadhar.jpg",
          birthdate: "1990-05-15",
          emailAddress: "john.doe@example.com",
          phoneNumber: "+1234567890",
          type: "4 wheels",
          available: true,
          price: "₹500/hour",
          location: "New York"
        },
        {
          id: 2,
          name: "Jane Smith",
          licenseNumber: "EFGH-5678-9012",
          licensePhoto: "https://example.com/jane-license.jpg",
          aadharCardNumber: "2345-6789-0123",
          aadharCardPhoto: "https://example.com/jane-aadhar.jpg",
          birthdate: "1985-10-20",
          emailAddress: "jane.smith@example.com",
          phoneNumber: "+1987654321",
          type: "2 wheels",
          available: true,
          price: "₹400/hour",
          location: "Los Angeles"
        },
        {
          id: 3,
          name: "Michael Johnson",
          licenseNumber: "IJKL-9012-3456",
          licensePhoto: "https://example.com/michael-license.jpg",
          aadharCardNumber: "3456-7890-1234",
          aadharCardPhoto: "https://example.com/michael-aadhar.jpg",
          birthdate: "1982-03-10",
          emailAddress: "michael.johnson@example.com",
          phoneNumber: "+1650432198",
          type: "4 wheels",
          available: false,
          price: "₹550/hour",
          location: "Chicago"
        },
        {
          id: 4,
          name: "Emily Brown",
          licenseNumber: "MNOP-3456-7890",
          licensePhoto: "https://example.com/emily-license.jpg",
          aadharCardNumber: "4567-8901-2345",
          aadharCardPhoto: "https://example.com/emily-aadhar.jpg",
          birthdate: "1993-07-25",
          emailAddress: "emily.brown@example.com",
          phoneNumber: "+1789543210",
          type: "4 wheels",
          available: true,
          price: "₹480/hour",
          location: "Houston"
        },
        {
          id: 5,
          name: "David Wilson",
          licenseNumber: "QRST-6789-0123",
          licensePhoto: "https://example.com/david-license.jpg",
          aadharCardNumber: "5678-9012-3456",
          aadharCardPhoto: "https://example.com/david-aadhar.jpg",
          birthdate: "1978-12-05",
          emailAddress: "david.wilson@example.com",
          phoneNumber: "+1324657980",
          type: "2 wheels",
          available: true,
          price: "₹420/hour",
          location: "Miami"
        },
        {
          id: 6,
          name: "Sophia Miller",
          licenseNumber: "UVWX-9012-3456",
          licensePhoto: "https://example.com/sophia-license.jpg",
          aadharCardNumber: "6789-0123-4567",
          aadharCardPhoto: "https://example.com/sophia-aadhar.jpg",
          birthdate: "1987-08-15",
          emailAddress: "sophia.miller@example.com",
          phoneNumber: "+1876543210",
          type: "4 wheels",
          available: true,
          price: "₹520/hour",
          location: "Seattle"
        },
        {
          id: 7,
          name: "Ethan Martinez",
          licenseNumber: "YZAB-1234-5678",
          licensePhoto: "https://example.com/ethan-license.jpg",
          aadharCardNumber: "7890-1234-5678",
          aadharCardPhoto: "https://example.com/ethan-aadhar.jpg",
          birthdate: "1995-01-30",
          emailAddress: "ethan.martinez@example.com",
          phoneNumber: "+1456321890",
          type: "2 wheels",
          available: false,
          price: "₹450/hour",
          location: "San Francisco"
        },
        {
          id: 8,
          name: "Olivia Taylor",
          licenseNumber: "CDEF-2345-6789",
          licensePhoto: "https://example.com/olivia-license.jpg",
          aadharCardNumber: "8901-2345-6789",
          aadharCardPhoto: "https://example.com/olivia-aadhar.jpg",
          birthdate: "1984-06-20",
          emailAddress: "olivia.taylor@example.com",
          phoneNumber: "+1321897654",
          type: "4 wheels",
          available: true,
          price: "₹490/hour",
          location: "Dallas"
        },
        {
          id: 9,
          name: "James Anderson",
          licenseNumber: "GHIJ-3456-7890",
          licensePhoto: "https://example.com/james-license.jpg",
          aadharCardNumber: "9012-3456-7890",
          aadharCardPhoto: "https://example.com/james-aadhar.jpg",
          birthdate: "1980-11-12",
          emailAddress: "james.anderson@example.com",
          phoneNumber: "+1876543209",
          type: "2 wheels",
          available: true,
          price: "₹430/hour",
          location: "Atlanta"
        },
        {
          id: 10,
          name: "Ava Garcia",
          licenseNumber: "KLMN-4567-8901",
          licensePhoto: "https://example.com/ava-license.jpg",
          aadharCardNumber: "0123-4567-8901",
          aadharCardPhoto: "https://example.com/ava-aadhar.jpg",
          birthdate: "1991-04-18",
          emailAddress: "ava.garcia@example.com",
          phoneNumber: "+1987654321",
          type: "4 wheels",
          available: true,
          price: "₹470/hour",
          location: "Denver"
        }
      ];
      
      
      return (
        <>
          <NavBar />
          <div className="flex justify-between items-center">
            <div className="headDriver text-3xl font-bold">
              Drivers
            </div>
            <Link className="btn text-xl font-bold" to="/companyCars">Cars</Link>
            <Link className="btn  text-xl font-bold" to="/carDriverInput">Add Driver/Cars</Link>
          </div>
          <div className="wrapper">
            <div className="cardRow">
              {driverData.map(driver => (
                <div key={driver.id} className="carCol">
                  <div className="cardTitle">
                    <strong>{driver.name}</strong>
                  </div>
                  <div className="cardContainer">
                    <figure>
                    </figure>
                    <div className="specifications">
                      <div className="speList">
                        <div className="icon">
                        </div>
                        <p>{driver.location}</p>
                      </div>
                      <div className="speList">
                        <div className="icon">
                          {/* Icon for availability */}
                        </div>
                        <p>{driver.available ? 'Available' : 'Not Available'}</p>
                      </div>
                      {/* You can add more specifications if needed */}
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
              ))}
            </div>
          </div>
        </>
      );
      
      
}

export default driversList