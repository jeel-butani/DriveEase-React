import React, {useState } from 'react';
import Navbar from '../components/navBar';
import { useParams } from 'react-router-dom';
import '../pagesCss/editCar.css'
const editCar = () => {
    const { id } = useParams();
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
                <div className="main-container">
                    <div className="slider-edit"></div>
                    <div className="btn">
                        <button className="car" >Update Car Details</button>
                    </div>
                    <div className="form-section-edit" >
                        
                        <div className="car-input-box">
                            <input type="file" className="image ele" accept="image/*"/>
                            <input type="text" className="car-name ele" placeholder="Car Name" />
                            <select className="car-type ele">
                                <option value="manual">Manual</option>
                                <option value="automatic">Automatic</option>
                            </select>
                            <input type="number" className="seater ele" placeholder="Number of Seats" />
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