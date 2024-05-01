import discount from "../assets/images/discount.png";
import Navbar from "../components/navBar";
import "../pagesCss/carsProduct.css";
import React, { useState } from "react";
const DriverUser = () => {
  const cardData = [
    {
      id: 1,
      title: "Driver Name",
      transmission: "4Wheeler",
      fuel: "Petrol",
      price: "₹2300",
      companyName: "abc",
      totalCar: 5,
      availableCar: 1,
    },
    {
      id: 2,
      title: "Driver Name",
      transmission: "2Wheeler",
      fuel: "Electric",
      space: "4 Seater",
      price: "₹1200",
      companyName: "abc",
      totalCar: 5,
      availableCar: 4,
    },
  ];
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
                {cardData.map((card) => (
                  <div
                    key={card.id}
                    className="carCol"
                    data-id="1"
                    data-transmission="1"
                    data-fuel="1"
                  >
                    <div className="cardTitle">
                      <img src={discount} alt="" />
                      <strong>{card.title}</strong>
                    </div>
                    <div className="cardContainer">
                      {/* <figure>
                        <img src={card.imageUrl} alt="" />
                      </figure> */}
                      <div className="specifications">
                        <a href="#" class="speList">
                          <div class="icon">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 9 7"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.1001 0.949951V6.04995M4.5001 0.949951V6.04995M1.1001 3.49995H5.3501C6.1423 3.49995 6.5384 3.49995 6.85035 3.37075C7.05674 3.28531 7.24428 3.16004 7.40223 3.00209C7.56019 2.84413 7.68546 2.6566 7.7709 2.4502C7.9001 2.13825 7.9001 1.74215 7.9001 0.949951"
                                stroke="#9C9C9C"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </div>
                          {card.transmission}
                        </a>
                        <a href="#" class="speList">
                          <div class="icon">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 9 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.5074 4.32316C7.36867 4.32316 7.23563 4.26805 7.13753 4.16995C7.03944 4.07186 6.98433 3.93881 6.98433 3.80008C6.98433 3.66135 7.03944 3.52831 7.13753 3.43021C7.23563 3.33212 7.36867 3.27701 7.5074 3.27701C7.64613 3.27701 7.77918 3.33212 7.87727 3.43021C7.97537 3.52831 8.03048 3.66135 8.03048 3.80008C8.03048 3.93881 7.97537 4.07186 7.87727 4.16995C7.77918 4.26805 7.64613 4.32316 7.5074 4.32316ZM4.36894 4.32316H1.23048V1.70777H4.36894M8.43325 2.87424L8.43848 2.86901L6.49263 0.92316L5.93817 1.47762L7.04187 2.58131C6.55017 2.75393 6.19971 3.24039 6.19971 3.80008C6.19971 3.97181 6.23354 4.14186 6.29925 4.30052C6.36497 4.45917 6.46129 4.60333 6.58273 4.72476C6.82797 4.97 7.16058 5.10778 7.5074 5.10778C7.69571 5.10778 7.86833 5.06593 8.03048 4.99793V8.76931C8.03048 8.90804 7.97537 9.04109 7.87727 9.13919C7.77918 9.23728 7.64613 9.29239 7.5074 9.29239C7.36867 9.29239 7.23563 9.23728 7.13753 9.13919C7.03944 9.04109 6.98433 8.90804 6.98433 8.76931V6.41547C6.98433 6.13801 6.87411 5.87192 6.67792 5.67573C6.48172 5.47953 6.21563 5.36931 5.93817 5.36931H5.4151V1.70777C5.4151 1.43032 5.30488 1.16422 5.10868 0.968032C4.91249 0.771841 4.6464 0.661621 4.36894 0.661621H1.23048C0.649865 0.661621 0.184326 1.12716 0.184326 1.70777V10.077H5.4151V6.15393H6.19971V8.76931C6.19971 9.11614 6.33749 9.44875 6.58273 9.69399C6.82797 9.93923 7.16058 10.077 7.5074 10.077C7.67913 10.077 7.84918 10.0432 8.00784 9.97746C8.16649 9.91175 8.31065 9.81542 8.43208 9.69399C8.55351 9.57256 8.64984 9.4284 8.71555 9.26975C8.78127 9.11109 8.8151 8.94104 8.8151 8.76931V3.80008C8.8151 3.43916 8.66863 3.10962 8.43325 2.87424Z"
                                fill="#9C9C9C"
                              ></path>
                            </svg>
                          </div>
                          {card.fuel}
                        </a>
                        <a href="#" class="speList">
                          <div class="icon">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 11 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            ></svg>
                          </div>
                        </a>
                      </div>
                    </div>
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
