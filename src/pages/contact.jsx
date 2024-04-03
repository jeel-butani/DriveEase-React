import React from "react";


import "../assets/animate.css/animate.min.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/bootstrap-icons/bootstrap-icons.css";
import "../assets/swiper/swiper-bundle.min.css";
import "../pagesCss/homeCss.css";
import "../assets/swiper/swiper-bundle.min.js";
import "../assets/bootstrap/js/bootstrap.bundle.min.js";
import Navbar from "../components/navBar";
import Footer from "../components/footer.jsx";

const Contact = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <section class="intro-single">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="title-single-box">
                <h1 class="title-single">Contact US</h1>
                <span class="color-text-a">DriveEase Car Rental Company</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      <section class="contact">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                class="php-email-form"
              >
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <div class="form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control form-control-lg form-control-a"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group">
                      <input
                        name="email"
                        type="email"
                        class="form-control form-control-lg form-control-a"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-12 mb-3">
                    <div class="form-group">
                      <input
                        type="text"
                        name="subject"
                        class="form-control form-control-lg form-control-a"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea
                        name="message"
                        class="form-control"
                        cols="45"
                        rows="8"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-12 my-3">
                    <div class="mb-3">
                      <div class="loading">Loading</div>
                      <div class="error-message"></div>
                      <div class="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12 text-center">
                    <button type="submit" class="btn btn-a">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-5 section-md-t3">
              <div class="icon-box section-b2">
                <div class="icon-box-icon">
                  <span class="bi bi-envelope"></span>
                </div>
                <div class="icon-box-content table-cell">
                  <div class="icon-box-title">
                    <h4 class="icon-title">Say Hello</h4>
                  </div>
                  <div class="icon-box-content">
                    <p class="mb-1">
                      Email :
                      <span class="color-a">driveease@gmsil.com</span>
                    </p>
                    <p class="mb-1">
                      Phone :
                      <span class="color-a">+91 9090909090</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="icon-box section-b2">
                  <div class="icon-box-icon">
                    <span class="bi bi-geo-alt"></span>
                  </div>
                  <div class="icon-box-content table-cell">
                    <div class="icon-box-title">
                      <h4 class="icon-title">Find us in</h4>
                    </div>
                    <div class="icon-box-content">
                      <p class="mb-1">
                        Rajkot, Gujarat
                        <br/> India
                      </p>
                    </div>
                  </div>
                </div>

                <div class="icon-box">
                  <div class="icon-box-icon">
                    <span class="bi bi-share"></span>
                  </div>
                  <div class="icon-box-content table-cell">
                    <div class="icon-box-title">
                      <h4 class="icon-title">Social networks</h4>
                    </div>
                    <div class="icon-box-content">
                      <div class="socials-footer">
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <a href="#" class="link-one">
                              <i class="bi bi-facebook" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#" class="link-one">
                              <i class="bi bi-twitter" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#" class="link-one">
                              <i class="bi bi-instagram" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#" class="link-one">
                              <i class="bi bi-linkedin" aria-hidden="true"></i>
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
      <Footer/>
    </>
  );
};

export default Contact;
