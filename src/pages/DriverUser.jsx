import discount from "../assets/images/discount.png";
import Navbar from "../components/navBar";
import "../pagesCss/carsProduct.css";
import React, { useState, useEffect } from "react";
import image from "../assets/images/driver.png";
import axios from "axios";
const DriverUser = () => {
    const [driverData, setDriverData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [formData, setFormData] = useState(null);
    const [duration, setDuration] = useState(null);
    const [formattedStartDate, setFormattedStartDate] = useState('');
    const [formattedEndDate, setFormattedEndDate] = useState('');
    const [locat, setLocat] = useState('');

    function getEncodedIdFromUrl() {
        const url = new URL(window.location.href);
        const path = url.pathname;
        const pathParts = path.split('/');
        return pathParts[pathParts.length - 1];
    }
    function decodeId(encodedId) {
        return atob(encodedId);
    }
    const encodedId = getEncodedIdFromUrl();

    const ids = decodeId(encodedId);
    console.log('Decoded ID:', ids);

    const checkToken = () => {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
        console.log("Token:", token);
        setIsLoggedIn(!!token);
    };
    const fetchData = async () => {
        const getCarResponse = await axios.get('http://localhost:3000/api/company/drivers/location?location=rajkot');
        console.log(getCarResponse.data);
        setDriverData(getCarResponse.data.drivers);
    }

    useEffect(() => {
        checkToken();
        fetchData();
    }, []);

    useEffect(() => {
        if (!isLoggedIn) {
            const timer = setTimeout(() => {
                window.location.href = '/userLoginSignup';
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isLoggedIn]);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const formData = {};
        for (let param of queryParams.entries()) {
            formData[param[0]] = param[1];
        }
        console.log(formData);
        setLocat(formData.location);
        setFormData(formData);

        const startDate = new Date(formData.startDate + 'T' + formData.startTime);
        const endDate = new Date(formData.endDate + 'T' + formData.endTime);
        const durationInMilliseconds = endDate - startDate;

        const days = Math.floor(durationInMilliseconds / (1000 * 60 * 60 * 24));
        const remainingHours = durationInMilliseconds % (1000 * 60 * 60 * 24);
        const hours = Math.floor(remainingHours / (1000 * 60 * 60));
        const remainingMinutes = remainingHours % (1000 * 60 * 60);
        const minutes = Math.floor(remainingMinutes / (1000 * 60));

        setDuration({ days, hours, minutes });


        const startDateObj = new Date(formData.startDate);
        const endDateObj = new Date(formData.endDate);
        const startDay = startDateObj.getDate();
        const endDay = endDateObj.getDate();
        const startMonth = startDateObj.toLocaleString('default', { month: 'short' });
        const endMonth = endDateObj.toLocaleString('default', { month: 'short' });
        const startYear = String(startDateObj.getFullYear()).slice(2);
        const endYear = String(endDateObj.getFullYear()).slice(2);

        setFormattedStartDate(`${startDay} ${startMonth}' ${startYear}`);
        setFormattedEndDate(`${endDay} ${endMonth}' ${endYear}`);
    }, [location.search]);

    const handleSelect = async (id) => {
        const form = {
            driverId: id,
            userId: ids,
            startDate: formData.startDate,
            startTime: formData.startTime,
            endDate: formData.endDate,
            endTime: formData.endTime,
            location: formData.location,
            isAccept: "false",
            isReject: "false"
        }
        console.log(form);
        try {
            const response = await axios.post('http://localhost:3000/api/driverRequest', form);
            console.log(response.data);
            window.location.href = `/${encodedId}`;
        } catch (error) {
            console.error("Error:", error.message);
        }
    };
    return (
        <>
            <div></div>
            <header>
                <Navbar />
            </header>
            <section className="bookingWidget">
                <div className="templateContainer">
                    <div className="templateRow">
                        <div className="navWidget">
                            <div class="locationList locationFrom">
                                <div class="locationCol">
                                    <a href="/">
                                        <div class="location">Kochi</div>
                                        <div class="place">Maradu : EVM Volkswagen</div>
                                    </a>
                                    <div class="dayCol">
                                        <div class="dayRow">
                                            <div class="col2">
                                                <div class="date">22</div>
                                                <div class="month">Feb'</div>
                                                <div class="year">24</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="time">
                                        8:30<span>AM</span>
                                    </div>
                                </div>
                                <div class="forIcon">
                                    <img
                                        src="https://evmwheels.com/front-theme/images/next.png"
                                        alt=""
                                    />
                                </div>
                                <div class="locationCol">
                                    <a href="http://127.0.0.1:8000/">
                                        <div class="location">Kochi</div>
                                        <div class="place">Maradu : EVM Volkswagen</div>
                                    </a>
                                    <div class="dayCol">
                                        <div class="dayRow">
                                            <div class="col2">
                                                <div class="date">24</div>
                                                <div class="month">Feb'</div>
                                                <div class="year">24</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="time">
                                        8:30 <span>AM</span>
                                    </div>
                                </div>
                            </div>
                            <div class="filterWidget1">
                                <div class="filterWidget">
                                    <div class="filterTitle">
                                        <div class="titleIcon">
                                            <svg
                                                width="8"
                                                height="10"
                                                viewBox="0 0 8 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4.99986 4.99932V9.3765C5.01986 9.54315 4.96987 9.7209 4.85488 9.83755C4.80863 9.88905 4.75369 9.9299 4.69322 9.95778C4.63274 9.98565 4.5679 10 4.50243 10C4.43695 10 4.37212 9.98565 4.31164 9.95778C4.25117 9.9299 4.19623 9.88905 4.14998 9.83755L3.14512 8.72104C3.09059 8.66181 3.04913 8.58938 3.02398 8.5094C2.99883 8.42942 2.99067 8.34406 3.00014 8.25999V4.99932H2.98514L0.105539 0.899878C0.0243545 0.784077 -0.0122776 0.637279 0.00364727 0.491561C0.0195721 0.345843 0.0867593 0.213052 0.190527 0.122206C0.285514 0.0444384 0.3905 0 0.500485 0H7.49951C7.6095 0 7.71449 0.0444384 7.80947 0.122206C7.91324 0.213052 7.98043 0.345843 7.99635 0.491561C8.01228 0.637279 7.97565 0.784077 7.89446 0.899878L5.01486 4.99932H4.99986Z"
                                                    fill="#4D4D4D"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h3>Filters</h3>
                                        <a href="#" class="resetBtn">
                                            Reset all
                                        </a>
                                    </div>
                                    <div class="filterBody">
                                        <div class="filterList">
                                            <div class="colapsTitle">
                                                <div class="colapsText">Vehicle</div>
                                            </div>
                                            <div class="colapsBody">
                                                <div class="filterRow center">
                                                    <div class="radioCheck">
                                                        <input
                                                            type="checkbox"
                                                            name="transmission[]"
                                                            class="radioBtn transmission_filter"
                                                            id="transmission"
                                                            value="1"
                                                        />
                                                        <label for="transmission">Two Wheeler</label>
                                                    </div>
                                                    <div class="radioCheck">
                                                        <input
                                                            type="checkbox"
                                                            name="transmission[]"
                                                            class="radioBtn transmission_filter"
                                                            id="transmission"
                                                            value="2"
                                                        />
                                                        <label for="transmission">Four Wheeler</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tabList" id="filteredResults">
                            <div class="cardRow inv_list_wrap" data-filter-id="1">
                                {driverData.map((card) => (
                                    <div
                                        key={card._id}
                                        className="carCol"
                                        data-id="1"
                                        data-transmission="1"
                                        data-fuel="1"
                                    >
                                        <div className="cardTitle">
                                            <img src={discount} alt="" />
                                            <strong>{card.name}</strong>
                                        </div>
                                        <img className="w-30 h-30  rounded-full" src={image} alt="" />
                                        <div className="proType text-l font-bold">{card.typeOfVehicle}</div>
                                        <div className="cardBtm">
                                            <div className="priceDetails">
                                                
                                                <b>Deal!</b>
                                                <strong className="price">{card.price}</strong>
                                                <b>onwards</b>
                                            </div>
                                            <div className="cardCtrl">
                                                <button
                                                    onClick={() => handleSelect(card._id)}
                                                    className="selectBtn open-inv-popup"
                                                    data-id="31"
                                                >
                                                    Request
                                                    <svg
                                                        width="13"
                                                        height="13"
                                                        viewBox="0 0 11 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M2.005 0L10.005 8L2.005 16L0 14L6.005 8L0 2L2.005 0Z"
                                                            fill="white"
                                                        ></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DriverUser;