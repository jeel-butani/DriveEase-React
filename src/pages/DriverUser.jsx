import discount from "../assets/images/discount.png";
import Navbar from "../components/navBar";
import "../pagesCss/carsProduct.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "../assets/images/driver.png";
const DriverUser = () => {
    const [driverData, setDriverData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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

    const handleSelect = (id) => {
        const encodedId = btoa(id);
        window.location.href = `/confirmCarBook/${encodedId}`;
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
                                                    onClick={() => handleSelect(card.id)}
                                                    className="selectBtn open-inv-popup"
                                                    data-id="31"
                                                >
                                                    Select
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