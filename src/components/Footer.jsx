import React from "react";
import "../assets/animate.css/animate.min.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/bootstrap-icons/bootstrap-icons.css";
import "../assets/swiper/swiper-bundle.min.css";
import "../pagesCss/homeCss.css";
import "../assets/swiper/swiper-bundle.min.js";
import "../assets/bootstrap/js/bootstrap.bundle.min.js";
const Footer = () => {
  return (
    // <div>Footer</div>
    <>
      <section class="section-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <div class="widget-a">
                <div class="w-header-a">
                  <h3 class="w-title-a text-brand">DriveEase</h3>
                </div>
                <div class="w-body-a">
                  <p class="w-text-a color-text-a">
                    It is for easy booking of vehivle on rent.
                  </p>
                </div>
                <div class="w-footer-a">
                  <ul class="list-unstyled">
                    <li class="color-a">
                      <span class="color-text-a">Phone :</span> +91 9090909090
                    </li>
                    <li class="color-a">
                      <span class="color-text-a">Email : </span>{" "}
                      driveease@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 section-md-t3">
              <div class="widget-a">
                <div class="w-header-a">
                  <h3 class="w-title-a text-brand">The Company</h3>
                </div>
                <div class="w-body-a">
                  <div class="w-body-a">
                    <ul class="list-unstyled">
                      <li class="item-list-a">
                        <i class="bi bi-chevron-right"></i> <a href="#">Map</a>
                      </li>
                      <li class="item-list-a">
                        <i class="bi bi-chevron-right"></i>{" "}
                        <a href="#">Legal</a>
                      </li>
                      <li class="item-list-a">
                        <i class="bi bi-chevron-right"></i>{" "}
                        <a href="#">Admin</a>
                      </li>
                      <li class="item-list-a">
                        <i class="bi bi-chevron-right"></i>{" "}
                        <a href="#">Careers</a>
                      </li>
                      <li class="item-list-a">
                        <i class="bi bi-chevron-right"></i>{" "}
                        <a href="#">Affiliate</a>
                      </li>
                      <li class="item-list-a">
                        <i class="bi bi-chevron-right"></i>{" "}
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 section-md-t3">
              <div class="widget-a">
                <div class="w-header-a">
                  <h3 class="w-title-a text-brand">Locations</h3>
                </div>
                <div class="w-body-a">
                  <ul class="list-unstyled">
                    <li class="item-list-a">
                      <i class="bi bi-chevron-right"></i> <a href="#">Rajkot</a>
                    </li>
                    <li class="item-list-a">
                      <i class="bi bi-chevron-right"></i>{" "}
                      <a href="#">Ahmedabad</a>
                    </li>
                    <li class="item-list-a">
                      <i class="bi bi-chevron-right"></i> <a href="#">Surat</a>
                    </li>
                    <li class="item-list-a">
                      <i class="bi bi-chevron-right"></i> <a href="#">Barode</a>
                    </li>
                    <li class="item-list-a">
                      <i class="bi bi-chevron-right"></i>{" "}
                      <a href="#">Gandhinagar</a>
                    </li>
                    <li class="item-list-a">
                      <i class="bi bi-chevron-right"></i>{" "}
                      <a href="#">Bangluru</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <nav class="nav-footer">
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">About</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">Services</a>
                  </li>

                  <li class="list-inline-item">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
              <div class="socials-a">
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="bi bi-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="bi bi-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="bi bi-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="bi bi-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="copyright-footer">
                <p class="copyright color-text-a">
                  &copy; Copyright
                  <span class="color-a">DriveEase</span> All Rights Reserved.
                </p>
              </div>
              <div class="credits">
                Designed by <a href="#">DriveEase</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
