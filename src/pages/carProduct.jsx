// import Navbar from "../components/NavBar";
import discount from "../assets/images/discount.png";
import "../pagesCss/carsProduct.css";
import React, { useState } from "react";
const carProduct = () => {
  const cardData = [
    {
      id: 1,
      title: "MARUTI WAGON R Petrol MT",
      imageUrl: "https://evmwheels.com/uploads/inventory/WAGON%20R-P-MT.png",
      transmission: "Manual",
      fuel: "Petrol",
      space: "5 Seater",
      price: "₹2300",
    },
    {
      id: 2,
      title: "DATSUN REDI GO Petrol MT",
      imageUrl: "https://evmwheels.com/uploads/inventory/REDI%20GO-P-MT.png",
      transmission: "Manual",
      fuel: "Petrol",
      space: "4 Seater",
      price: "₹1200",
    },
    {
      id: 3,
      title: "NISSAN MICRA Petrol MT",
      imageUrl: "https://evmwheels.com/uploads/inventory/MICRA-P-MT.png",
      transmission: "Manual",
      fuel: "Petrol",
      space: "5 Seater",
      price: "₹2300",
    },
    {
      id: 4,
      title: "HYUNDAI CRETA Diesel AT",
      imageUrl: "https://evmwheels.com/uploads/inventory/CRETA-D-AT.png",
      transmission: "Automatic",
      fuel: "Petrol",
      space: "5 Seater",
      price: "₹4900",
    },
  ];
  const [transmissionFilters, setTransmissionFilters] = useState([]);
  const [fuelFilters, setFuelFilters] = useState([]);
  const [brandFilters, setBrandFilters] = useState([]);
  const handleTransmissionChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setTransmissionFilters([...transmissionFilters, value]);
    } else {
      setTransmissionFilters(
        transmissionFilters.filter((filter) => filter !== value)
      );
    }
  };

  const handleFuelChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFuelFilters([...fuelFilters, value]);
    } else {
      setFuelFilters(fuelFilters.filter((filter) => filter !== value));
    }
  };

  const handleBrandChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setBrandFilters([...brandFilters, value]);
    } else {
      setBrandFilters(brandFilters.filter((filter) => filter !== value));
    }
  };

  return (
    <>
      <header>
        {/* <Navbar /> */}
      </header>
      <section className="bookingWidget">
        <div className="templateContainer">
          <div className="templateRow">
            <div className="navWidget">
              <div class="timeList1">
                <div class="timeList">
                  <div class="tTitle">Duration:</div>
                  <div class="day">
                    <b>02 days</b>
                  </div>
                  <div class="hours">
                    <b>00 hrs</b>
                  </div>
                  <div class="mins">
                    <b>00 mins</b>
                  </div>
                </div>
              </div>
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
              <div class="timeList2">
                <div class="timeList">
                  <div class="tTitle">Duration:</div>
                  <div class="day">
                    <b>02 days</b>
                  </div>
                  <div class="hours">
                    <b>00 hrs</b>
                  </div>
                  <div class="mins">
                    <b>00 mins</b>
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
                        <div class="colapsText">Transmission</div>
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
                            <label for="transmission">Manual</label>
                          </div>
                          <div class="radioCheck">
                            <input
                              type="checkbox"
                              name="transmission[]"
                              class="radioBtn transmission_filter"
                              id="transmission"
                              value="2"
                            />
                            <label for="transmission">Automatic</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="filterList">
                      <div class="colapsTitle">
                        <div class="colapsText">Fuel Type</div>
                      </div>
                      <div class="colapsBody">
                        <div class="filterRow center">
                          <div class="radioCheck">
                            <input
                              type="checkbox"
                              name="fuel[]"
                              class="radioBtn fuel_filter"
                              id="transmission"
                              value="1"
                            />
                            <label for="transmission">Petrol</label>
                          </div>
                          <div class="radioCheck">
                            <input
                              type="checkbox"
                              name="fuel[]"
                              class="radioBtn fuel_filter"
                              id="transmission"
                              value="2"
                            />
                            <label for="transmission">Diesel</label>
                          </div>
                          <div class="radioCheck">
                            <input
                              type="checkbox"
                              name="fuel[]"
                              class="radioBtn fuel_filter"
                              id="transmission"
                              value="3"
                            />
                            <label for="transmission">Electric</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="filterList">
                      <div class="colapsTitle">
                        <div class="colapsText">Brands</div>
                      </div>
                      <div class="colapsBody">
                        <div class="brandContainer">
                          <div class="filterCol center">
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="4"
                              />
                              <label for="transmission">MG</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="5"
                              />
                              <label for="transmission">TATA</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="6"
                              />
                              <label for="transmission">TOYOTA</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="7"
                              />
                              <label for="transmission">ISUZU</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="8"
                              />
                              <label for="transmission">VW</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="9"
                              />
                              <label for="transmission">SKODA</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="10"
                              />
                              <label for="transmission">NISSAN</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="11"
                              />
                              <label for="transmission">DATSUN</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="12"
                              />
                              <label for="transmission">HYUNDAI</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="13"
                              />
                              <label for="transmission">MAHINDRA</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="14"
                              />
                              <label for="transmission">SUZUKI</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="15"
                              />
                              <label for="transmission">CITREON</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="26"
                              />
                              <label for="transmission">BMW</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tabWidget">
              <div className="navWidget">
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
                        <div class="colapsText">Transmission</div>
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
                            <label for="transmission">Manual</label>
                          </div>
                          <div class="radioCheck">
                            <input
                              type="checkbox"
                              name="transmission[]"
                              class="radioBtn transmission_filter"
                              id="transmission"
                              value="2"
                            />
                            <label for="transmission">Automatic</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="filterList">
                      <div class="colapsTitle">
                        <div class="colapsText">Fuel Type</div>
                      </div>
                      <div class="colapsBody">
                        <div class="filterRow center">
                          <div class="radioCheck">
                            <input
                              type="checkbox"
                              name="fuel[]"
                              class="radioBtn fuel_filter"
                              id="transmission"
                              value="1"
                            />
                            <label for="transmission">Petrol</label>
                          </div>
                          <div class="radioCheck">
                            <input
                              type="checkbox"
                              name="fuel[]"
                              class="radioBtn fuel_filter"
                              id="transmission"
                              value="2"
                            />
                            <label for="transmission">Diesel</label>
                          </div>
                          <div class="radioCheck">
                            <input
                              type="checkbox"
                              name="fuel[]"
                              class="radioBtn fuel_filter"
                              id="transmission"
                              value="3"
                            />
                            <label for="transmission">Electric</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="filterList">
                      <div class="colapsTitle">
                        <div class="colapsText">Brands</div>
                      </div>
                      <div class="colapsBody">
                        <div class="brandContainer">
                          <div class="filterCol center">
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="4"
                              />
                              <label for="transmission">MG</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="5"
                              />
                              <label for="transmission">TATA</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="6"
                              />
                              <label for="transmission">TOYOTA</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="7"
                              />
                              <label for="transmission">ISUZU</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="8"
                              />
                              <label for="transmission">VW</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="9"
                              />
                              <label for="transmission">SKODA</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="10"
                              />
                              <label for="transmission">NISSAN</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="11"
                              />
                              <label for="transmission">DATSUN</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="12"
                              />
                              <label for="transmission">HYUNDAI</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="13"
                              />
                              <label for="transmission">MAHINDRA</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="14"
                              />
                              <label for="transmission">SUZUKI</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="15"
                              />
                              <label for="transmission">CITREON</label>
                            </div>
                            <div class="radioCheck">
                              <input
                                type="checkbox"
                                name="brand[]"
                                class="checkBtn brand_filter"
                                id="transmission"
                                value="26"
                              />
                              <label for="transmission">BMW</label>
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
                        <figure>
                          <img src={card.imageUrl} alt="" />
                        </figure>
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
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M0.82442 7.85139C1.08282 7.35028 1.62944 7.01447 2.29113 7.09764C2.92614 7.17714 3.64485 7.29641 4.36774 7.47739C5.5431 7.77136 6.55473 8.36662 7.25147 8.86564L7.4607 9.01994L7.55694 9.09317L7.7327 9.23231L7.88491 9.35785L8.06642 9.51582C8.5079 9.90865 8.20765 10.5505 7.70864 10.5975L7.65005 10.6002H3.1542C2.78433 10.6001 2.41866 10.5217 2.08135 10.3699C1.74404 10.2182 1.44275 9.99659 1.19737 9.71982L1.11211 9.61834L1.0075 9.4881C0.603159 8.98228 0.569159 8.34622 0.82442 7.85139ZM2.1614 8.13542C1.95217 8.10927 1.81984 8.20395 1.75393 8.33105C1.71931 8.40097 1.70369 8.47876 1.70865 8.55662C1.7136 8.63448 1.73896 8.70966 1.78217 8.77462L1.82454 8.83477L1.92916 8.96554C2.06547 9.13584 2.23579 9.27585 2.42925 9.37663C2.62271 9.47741 2.83505 9.53675 3.05273 9.55087L3.1542 9.55401H6.40827C5.80673 9.14967 5.00799 8.71551 4.11405 8.49216C3.47082 8.33473 2.81879 8.21526 2.1614 8.13542ZM8.94885 0.138622C9.27316 0.138622 9.51064 0.315422 9.66024 0.506868C9.80304 0.688375 9.89562 0.914868 9.95996 1.13247C10.0907 1.57342 10.1519 2.14044 10.1755 2.70641C10.1948 3.18293 10.188 3.6877 10.1634 4.15847L10.1415 4.5037C10.1049 5.01004 10.0473 5.45308 9.98245 5.74444C9.70365 6.99878 9.21614 7.75671 8.67057 8.16994C8.14802 8.56539 7.5423 8.65117 7.14581 8.4524C6.97267 8.3661 6.80476 8.21074 6.66562 8.04964C6.49832 7.85316 6.35747 7.63563 6.24664 7.40259C6.00288 6.89259 5.85276 6.20318 6.0986 5.46564C6.25082 5.00899 6.54427 4.72444 6.80267 4.51154L6.96901 4.37764C7.2635 4.1433 7.5083 3.94244 7.69608 3.56634C7.74473 3.46905 7.7803 3.27342 7.78867 2.94127L7.79024 2.78278L7.78605 2.39256C7.78344 2.23564 7.78082 2.06982 7.78239 1.90924C7.78605 1.56924 7.8075 1.16647 7.93931 0.838499C8.00941 0.664314 8.12134 0.482283 8.3039 0.344191C8.49034 0.206441 8.71708 0.134171 8.94885 0.138622ZM8.89811 1.26324C8.8547 1.39505 8.83168 1.60847 8.82854 1.9197V2.06721L8.83325 2.42761C8.83587 2.60284 8.83848 2.78748 8.8343 2.96638C8.82593 3.30219 8.79454 3.70914 8.63187 4.03398C8.40433 4.4901 8.11245 4.78564 7.85248 5.0069L7.70079 5.13244L7.62076 5.19573C7.30953 5.44367 7.16621 5.57078 7.09141 5.79622C6.95331 6.20945 7.02864 6.61379 7.19079 6.95118C7.27082 7.12013 7.36864 7.26241 7.45913 7.36754C7.50097 7.41671 7.53707 7.45176 7.56322 7.4753L7.60245 7.50878L7.65214 7.50668C7.72171 7.50093 7.85824 7.47321 8.03922 7.33616C8.32534 7.11908 8.71713 6.61693 8.96141 5.51742C8.98337 5.41751 9.00534 5.28936 9.02574 5.14028L9.05504 4.90124C9.06027 4.85939 9.06445 4.81598 9.06864 4.77151L9.09322 4.49428L9.11362 4.19718L9.12199 4.04287L9.13402 3.72588C9.14405 3.40041 9.14283 3.07469 9.13036 2.7493C9.10787 2.2121 9.05085 1.74656 8.9567 1.42958C8.94049 1.37285 8.92092 1.31765 8.89811 1.26324Z"
                                  fill="#9C9C9C"
                                ></path>
                              </svg>
                            </div>
                            {card.space}
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
                          <a
                            href="https://evmwheels.com/choose-plan"
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
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default carProduct;