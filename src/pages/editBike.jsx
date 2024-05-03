import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../components/navBar';
import '../pagesCss/editCar.css';
import axios from 'axios';

const editBike = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [bikeData, setBikeData] = useState([]);

    function getEncodedIdFromUrl() {
        const urlParts = window.location.href.split('/');
        return urlParts[urlParts.length - 1];
    }

    function decodeId(encodedId) {
        return atob(encodedId);
    }

    const encodedId = getEncodedIdFromUrl();
    const ids = decodeId(encodedId);

    const checkToken = () => {
        const companyTokenMatch = document.cookie.match(
          /(?:(?:^|.*;\s*)companytoken\s*=\s*([^;]*).*$)|^.*$/
        );
        const companyToken = companyTokenMatch ? companyTokenMatch[1] : null;
    
        console.log("Company Token:", companyToken);
        setIsLoggedIn(!!companyToken);
    };

    const fetchData = async ()=>{
        const getBikeResponse = await axios.get(`http://localhost:8080/api/bikes/${ids}`);
        console.log(getBikeResponse.data)
        setBikeData(getBikeResponse.data);
    };

    useEffect(()=>{
        checkToken();
        fetchData();
    },[])

    
    
    useEffect(() => {
        if (!isLoggedIn) {
            const timer = setTimeout(() => {
                window.location.href = '/companyLoginSignup'; 
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isLoggedIn]);

    const onSubmit = async (data) => {
        console.log(data);
    };

    return (
        <>
            <header>
                <Navbar />
            </header>
            {bikeData.length!=0 ? (<div className="body">
                <div className="main-container1">
                    <div className="slider-edit1"></div>
                    <div className="btn1">
                        <button className="car1">Update Bike Details</button>
                    </div>
                    <div className="form-section-edit1">

                        <form className="car-input-box1" onSubmit={handleSubmit(onSubmit)}>
                            <img className="w-36 h-36  rounded-full" src={"http://localhost:5173/@fs/D:/Sem_6/drive-ease-backend/assets/bikesImage/"+bikeData.bike.imageUrl} alt="" />
                            <input type="text" className="car-name ele" placeholder="Car Name" defaultValue={bikeData.bike.bikeName} {...register("bikeName", { required: "Please enter Bike Name!" })} />
                            {errors.bikeName && <span className="error">{errors.bikeName.message}</span>}
                            <input type="number" className="car-name ele" placeholder="Total number of bikes" defaultValue={bikeData.bike.totalCount} {...register("totalBikes", { required: "Please enter Total number of bikes!" })} />
                            {errors.totalBikes && <span className="error">{errors.totalBikes.message}</span>}
                            <input type="number" className="car-name ele" placeholder="Available number of cars" defaultValue={bikeData.bike.availableCount} {...register("availableBikes", { required: "Please enter Available number of bikes!" })} />
                            {errors.availableBikes && <span className="error">{errors.availableBikes.message}</span>}
                            <input type="number" className="amount ele" placeholder="Amount" defaultValue={bikeData.bike.amount} {...register("amount", { required: "Please enter Amount!" })} />
                            {errors.amount && <span className="error">{errors.amount.message}</span>}
                            <button className="car-submit-btn-edit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>):(null)}
        </>
    )
}

export default editBike