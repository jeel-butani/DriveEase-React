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
      <main id="main">
        <section className="section-agents section-t8">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-wrap d-flex justify-content-between">
                  <div className="title-box">
                    <h2 className="title-a">Meet Our Team</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card-box-d">
                  <div className="card-img-d">
                    <img src={car3} alt="" className="img-d img-fluid" />
                  </div>
                  <div className="card-overlay card-overlay-hover">
                    <div className="card-header-d">
                      <div className="card-title-d align-self-center">
                        <h3 className="title-d">
                          <a href="agent-single.html" className="link-two">
                            Hitesh Jethava
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="card-body-d">
                      <p className="content-d color-text-a">
                        Sed porttitor lectus nibh, Cras ultricies ligula sed
                        magna dictum porta two.
                      </p>
                      <div className="info-agents color-a">
                        <p>
                          <strong>Phone: </strong> +91 9090909090
                        </p>
                        <p>
                          <strong>Email: </strong> hitesh@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="card-footer-d">
                      <div className="socials-footer d-flex justify-content-center">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-facebook"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card-box-d">
                  <div className="card-img-d">
                    <img src={car3} alt="" className="img-d img-fluid" />
                  </div>
                  <div className="card-overlay card-overlay-hover">
                    <div className="card-header-d">
                      <div className="card-title-d align-self-center">
                        <h3 className="title-d">
                          <a href="agent-single.html" className="link-two">
                            Jeel Butani
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="card-body-d">
                      <p className="content-d color-text-a">
                        Sed porttitor lectus nibh, Cras ultricies ligula sed
                        magna dictum porta two.
                      </p>
                      <div className="info-agents color-a">
                        <p>
                          <strong>Phone: </strong> +91 9090909090
                        </p>
                        <p>
                          <strong>Email: </strong> jeel@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="card-footer-d">
                      <div className="socials-footer d-flex justify-content-center">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-facebook"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
