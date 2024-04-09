import React from 'react';
import Navbar from '../components/navBar';
import { useParams } from 'react-router-dom';
import '../pagesCss/editCar.css';

const EditDriver = () => {
    const { id } = useParams();

    function getEncodedIdFromUrl() {
        const urlParts = window.location.href.split('/');
        return urlParts[urlParts.length - 1];
    }

    function decodeId(encodedId) {
        return atob(encodedId);
    }

    const encodedId = getEncodedIdFromUrl();
    const ids = decodeId(encodedId);

    return (
        <>
            <header>
                <Navbar />
            </header>
            <div className="body">
                <div className="main-container1">
                    <div className="slider-edit1"></div>
                    <div className="btn1">
                        <button className="driver1">Update Driver Details</button>
                    </div>
                    <div className="form-section-edit1">
                        <div className="driver-input-box1">
                            <input type="text" className="driver-name ele" placeholder="Driver Name" />
                            <input type="email" className="email-address ele" placeholder="Email Address" />
                            <input type="tel" className="phone-number ele" placeholder="Phone Number" />
                            <input type="number" className="amount ele" placeholder="Amount" />
                            <select className="driver-wheel-type ele">
                                <option value="2-wheel">2 Wheel Driver</option>
                                <option value="4-wheel">4 Wheel Driver</option>
                            </select>
                            <button className="driver-submit-btn-edit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditDriver;
