import React from "react";
import "../Component/page.css"
import "../Component/page.css"

import one from "../Assets/one.jpg";
import two from "../Assets/two.jpg";
import three from "../Assets/three.jpg";
import five from "../Assets/five.jpg";
import four from "../Assets/four.jpg";

import six from "../Assets/six.jpg";
import seven from "../Assets/seven.jpg";
import eight from "../Assets/eight.jpg";


export default function () {
  return (
      <div className="cen">
          {/* <h1 className="cen">dd</h1> */}
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-4">
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="3000">
                <img src={one} class="d-inline w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src={two} class="d-inline w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src={three} class="d-inline w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src={four} class="d-inline w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src={five} class="d-inline w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src={six} class="dinlinek w-100" alt="..." />
              </div>

              <div class="carousel-item" data-bs-interval="3000">
                <img src={seven} class="d-inline w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src={eight} class="d-inline w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div></div>
  );
}
