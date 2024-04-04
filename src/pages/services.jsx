import React from 'react'
import "../assets/animate.css/animate.min.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/bootstrap-icons/bootstrap-icons.css";
import "../assets/swiper/swiper-bundle.min.css";
import "../pagesCss/homeCss.css";
import "../assets/swiper/swiper-bundle.min.js"
import "../assets/bootstrap/js/bootstrap.bundle.min.js"
import Navbar from '../components/navBar.jsx';
import Footer from '../components/footer.jsx';

const Services=()=> {
  return (
    <>
      <header>
      <Navbar/>
      </header>
      {/* <h1 className='text-3xl font-bold mb-6'>Services</h1> */}
      
      <section class="section-services section-t8">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-wrap d-flex justify-content-between">
              <div class="title-box">
                <h2 class="title-a">Our Services</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card-box-c foo">
              <div class="card-header-c d-flex">
                <div class="card-box-ico">
                  <span class="bi bi-cart"></span>
                </div>
                <div class="card-title-c align-self-center">
                  <h2 class="title-c">Car Rent</h2>
                </div>
              </div>
              <div class="card-body-c">
                <p class="content-c">
                  Car Rent Description
                </p>
              </div>
              <div class="card-footer-c">
                <a href="#" class="link-c link-icon">Go for Car Rent
                  <span class="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card-box-c foo">
              <div class="card-header-c d-flex">
                <div class="card-box-ico">
                  <span class="bi bi-calendar4-week"></span>
                </div>
                <div class="card-title-c align-self-center">
                  <h2 class="title-c">Driver</h2>
                </div>
              </div>
              <div class="card-body-c">
                <p class="content-c">
                  Driver Description
                </p>
              </div>
              <div class="card-footer-c">
                <a href="#" class="link-c link-icon">Go for Driver
                  <span class="bi bi-calendar4-week"></span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card-box-c foo">
              <div class="card-header-c d-flex">
                <div class="card-box-ico">
                  <span class="bi bi-card-checklist"></span>
                </div>
                <div class="card-title-c align-self-center">
                  <h2 class="title-c">Sell</h2>
                </div>
              </div>
              <div class="card-body-c">
                <p class="content-c">
                  Sell Description
                </p>
              </div>
              <div class="card-footer-c">
                <a href="#" class="link-c link-icon">Go for Sell
                  <span class="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <Footer/>
    </>
  )
}

export default Services