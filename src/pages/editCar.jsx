import React, {useState } from 'react';
import Navbar from '../components/navBar';
import { useParams } from 'react-router-dom';
import '../pagesCss/editCar.css'
const editCar = () => {
    const [isChecked, setIsChecked] = useState(true);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); 
    };

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
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <div className="body">
                <div className="main-container1">
                    <div className="slider-edit1"></div>
                    <div className="btn1">
                        <button className="car1" >Update Car Details</button>
                    </div>
                    <div className="form-section-edit1" >
                        
                        <div className="car-input-box1">
                            <input type="file" className="image ele" accept="image/*"/>
                            <input type="text" className="car-name ele" placeholder="Car Name" />
                            <input type="number" className="car-name ele" placeholder="Total number of cars" />
                            <input type="number" className="car-name ele" placeholder="Available number of cars" />
                            <input type="number" className="amount ele" placeholder="Amount" />
                            
                            <button className="car-submit-btn-edit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default editCar