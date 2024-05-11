import Navbar from "../components/navBar";
import discount from "../assets/images/discount.png";
import "../pagesCss/carsProduct.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

const companyCars = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [carData, setCarData] = useState([]);

  const fetchData = async () => {
    const getCarResponse = await axios.get(`http://localhost:3000/api/company/${ids}/cars`);
    setCarData(getCarResponse.data.allCars);
  }
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

  const checkToken = () => {
    const companyTokenMatch = document.cookie.match(
      /(?:(?:^|.*;\s*)companytoken\s*=\s*([^;]*).*$)|^.*$/
    );
    const companyToken = companyTokenMatch ? companyTokenMatch[1] : null;

    console.log("Company Token:", companyToken);
    setIsLoggedIn(!!companyToken);
  };

  useEffect(() => {
    checkToken();
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setTimeout(() => {
        window.location.href = '/companyLoginSignup';
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);


  const handleSelect = (id) => {
    const encodedId = btoa(id);
    const compoanyId = getEncodedIdFromUrl();
    window.location.href = `/editCar/${compoanyId}/${encodedId}`;
  };

  const handleCarDriver = () => {
    const compoanyId = getEncodedIdFromUrl();
    window.location.href = `/carDriverInput/${compoanyId}`;
  }
  const handleDriver = () => {
    const compoanyId = getEncodedIdFromUrl();
    window.location.href = `/driversList/${compoanyId}`;
  }

  const handleBike = () => {
    const compoanyId = getEncodedIdFromUrl();
    window.location.href = `/companyBike/${compoanyId}`;
  }
  const deleteItem = () => {
    console.log("first")
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  }
  return (
    <>
      <header>
        <Navbar />
      </header>
      {isLoggedIn ? (<section className="bookingWidget">
        <div className="templateContainer">
          <div className="templateRow1">

            <div className="tabWidget">
              <div className="flex justify-between items-center">
                <div className="head text-3xl font-bold">
                  Your Cars
                </div>
                <button className="button text-xl font-bold" onClick={handleBike}>Bikes</button>
                <button className="button text-xl font-bold" onClick={handleDriver}>Drivers</button>
                <button className="button  text-xl font-bold" onClick={handleCarDriver}>Add</button>
              </div>
              <div class="tabList" id="filteredResults">
                <div class="cardRow inv_list_wrap" data-filter-id="1">
                  {carData.length === 0 ? (
                    <p className="text-center text-xl font-bold mt-4">OOPs!! There are no cars added 😔😔</p>
                  ) : (
                    carData.map((car) => (
                      <div
                        key={car.hexId}
                        className="carCol"
                        data-id="1"
                        data-transmission="1"
                        data-fuel="1"
                      >
                        <div className="cardTitle">
                          <img src={discount} alt="" />
                          <strong>{car.car.carName}</strong>
                        </div>
                        <div className="cardContainer">
                          <figure>
                            <img src={"http://localhost:5173/@fs/D:/Sem_6/drive-ease-backend/assets/carsImage/" + car.car.imageUrl} alt="" />
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
                              {car.car.transmissionType}
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
                              {car.car.fuelType}
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
                              {car.car.seats}
                            </a>
                          </div>
                        </div>
                        <div className="cardBtm">
                          <div className="priceDetails">
                            <b>Deal!</b>
                            <strong className="price">{car.car.amount}</strong>
                            <b>onwards</b>
                          </div>
                          <div className="cardCtrl">
                            <button
                              onClick={() => handleSelect(car.hexId)}
                              className="selectBtn open-inv-popup mb-3"
                              data-id="31"
                            >
                              Edit
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
                            <button onClick={deleteItem} class="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                              <span class="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                              Delete                            </button>
                          </div>


                        </div>
                        <div className="totalCars text-xl font-bold">
                          Total Cars: {car.car.totalCount}
                        </div>
                        <div className="totalCars text-l font-bold">
                          Available Cars: {car.car.availableCount}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>) : null}
    </>
  )
}

export default companyCars