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
