import React from "react";
import Navbar from "../components/NavBar";

import "../assets/animate.css/animate.min.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/bootstrap-icons/bootstrap-icons.css";
import "../assets/swiper/swiper-bundle.min.css";
import "../pagesCss/homeCss.css";
import "../assets/swiper/swiper-bundle.min.js"
import "../assets/bootstrap/js/bootstrap.bundle.min.js"

import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "images/1.jpg" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];

import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Footer/>
      <Footer/>
    </>
  );
};

export default Home;
