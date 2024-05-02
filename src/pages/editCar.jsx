import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../components/navBar';
import '../pagesCss/editCar.css';

import axios from 'axios';

const EditCar = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [carData, setCarData] = useState([]);

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
        const getCarResponse = await axios.get(`http://localhost:8080/api/cars/${ids}`);
        console.log(getCarResponse.data)
        setCarData(getCarResponse.data);
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
        const formData = {
            carName: data.carName,
            fuelType: carData.car.fuelType,
            transmissionType: carData.car.transmissionType,
            seats: carData.car.seats,
            companyName: carData.car.companyName,
            amount: data.amount,
            imageUrl: carData.car.imageUrl,
            totalCount: data.totalCars,
            availableCount: data.availableCars
        }
        console.log(formData);

        const getCarResponse = await axios.put(`http://localhost:8080/api/cars/${ids}`,formData);
        console.log(getCarResponse.status);
        if(getCarResponse.status === 200){
            const urlParts = window.location.href.split('/');
            const compoanyId = urlParts[urlParts.length - 2];
            window.location.href = `/companyCars/${compoanyId}`; 
        }
    };

    

    return (
        <>
            <header>
                <Navbar />
            </header>
            {carData.length!=0 ? (<div className="body">
                <div className="main-container1">
                    <div className="slider-edit1"></div>
                    <div className="btn1">
                        <button className="car1">Update Car Details</button>
                    </div>
                    <div className="form-section-edit1">

                        <form className="car-input-box1" onSubmit={handleSubmit(onSubmit)}>
                            <img className="w-36 h-36  rounded-full" src={"http://localhost:5173/@fs/D:/Sem_6/drive-ease-backend/assets/carsImage/"+carData.car.imageUrl} alt="" />
                            <input type="text" className="car-name ele" placeholder="Car Name" defaultValue={carData.car.carName} {...register("carName", { required: "Please enter Car Name!" })} />
                            {errors.carName && <span className="error">{errors.carName.message}</span>}
                            <input type="number" className="car-name ele" placeholder="Total number of cars" defaultValue={carData.car.totalCount} {...register("totalCars", { required: "Please enter Total number of cars!" })} />
                            {errors.totalCars && <span className="error">{errors.totalCars.message}</span>}
                            <input type="number" className="car-name ele" placeholder="Available number of cars" defaultValue={carData.car.availableCount} {...register("availableCars", { required: "Please enter Available number of cars!" })} />
                            {errors.availableCars && <span className="error">{errors.availableCars.message}</span>}
                            <input type="number" className="amount ele" placeholder="Amount" defaultValue={carData.car.amount} {...register("amount", { required: "Please enter Amount!" })} />
                            {errors.amount && <span className="error">{errors.amount.message}</span>}
                            <button className="car-submit-btn-edit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>):(null)}
        </>
    );
}

export default EditCar;
