import React from "react";
import "../pagesCss/ProductPageCss.css";

const product = () => {
  return (
    <>
        <div class="card">
                <img
                  class="card-img-top"
                  src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <p class="card-text">Wooden chair with legs</p>
                  <p>$90</p>
                  <span class="fa fa-circle" id="red"></span>
                  <span class="fa fa-circle" id="teal"></span>
                  <span class="fa fa-circle" id="blue"></span>
                </div>
              </div>
    </>
  );
};

export default product;
