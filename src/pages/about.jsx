import React from "react";
import Navbar from "../components/navBar";
import "../pagesCss/homeCss.css";
import car3 from "../assets/images/car3.jpg";
import Footer from "../components/footer";
const About = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="templateWidget">
        <div className="templateContainer">

          <h2 className="text-3xl font-bold">About Us</h2>
          <div className="templateRow" style={{ padding: 0 }}>
            <div className="wbanner-row">
              <img src="https://evmwheels.com/front-theme/images/about_us_banner.png" alt="" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
            </div>
            <div className="wContent-row">
              <ul>
                <li>
                  <b>EVM Wheels - Your Perfect Travel Companion to Explore Spectacular Kerala</b>
                  <p>Kerala, blessed by nature and culture, beckons you with its palm-fringed beaches, serene backwaters, lush hill stations and rich heritage. To experience the magic of this tropical paradise at your own pace, EVM Wheels offers the perfect travel companion - our wide range of self-drive rental cars.
                    <br /><br />
                    EVM Wheels brings the legacy of EVM Group, trusted automotive partners in Kerala for over 6 decades. We inherit their heritage of excellence in vehicle retail and service to make your travel experiences more memorable.
                    <br /><br />
                    Our hatchbacks, sedans, MUVs and SUVs cater to solo travelers, couples, families and groups of all sizes. Rent for a few days for local drives or take weekly/monthly rentals for leisurely vacations. EVM Wheels rentals will be your flexible travel buddy across Kerala!

                    Budget-Friendly Packages for All

                    We understand traveling can be expensive, so our self-drive rentals are light on your pockets. Our transparent rates along with flexible daily, weekly and monthly packages fit every budget and trip plan. Long term rentals come with great discounts!
                    <br /><br />
                    Service You Can Count On
                    <br /><br />
                    Customer delight is our top priority. Our team offers exceptional service through your rental journey - from booking to delivery to returns and beyond. Contact us 24x7 for instant resolution of all queries. We aim to make self-drive vacations in Kerala smooth and memorable for you.
                    <br /><br />
                    You Drive Safely, We Take Care of the Rest
                    <br /><br />
                    As an EVM Group company, we maintain stringent standards in safety and maintenance for our rental fleet. Our cars are regularly serviced, sanitized and inspected by experts to ensure your peace of mind always. Comprehensive insurance further protects you on the road. You can trust EVM Wheels to be your satisfying, safe and stress-free travel companion across magical Kerala!
                    <br /><br />
                    So unlock the freedom of self-driven holidays with EVM Wheels as your perfect travel buddy. Our cars, services and reliability will make your Kerala trip comfortable while our affordable prices delight your pocket. Visit www.evmwheels.com to book your preferred self-drive rental today. Let's hit the open roads!</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
