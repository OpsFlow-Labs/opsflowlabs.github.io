"use client";
import { useEffect } from "react";
import myItems from "./Items.json" assert { type: "json" };
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Responsive.module.scss";

export default function ResponsiveCarousel() {
  const { responsive } = myItems.items;

  useEffect(() => {
    $(document).ready(function () {
      $(".customer-logos").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      });
    });
  });

  return (
    <div className={styles.carouselContainer}>
      <div className="container">
        <section className="customer-logos slider">
          <div className="slide">
            <div className={styles.oneImageInSlider}>
              <img
                src="./images/Telus.svg"
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </div>

          <div className="slide">
            <div className={styles.oneImageInSlider}>
              <img
                src="./images/zone-tv.svg"
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </div>

          {/* <div className="slide">
            <div className={styles.oneImageSirius}>
              <img
                src="./images/Sirius-XM.svg"
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </div> */}
          <div className="slide">
            <div className={styles.oneImageInSlider}>
              <img
                src="./images/Teesnap.svg"
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </div>
          {/* <div className="slide">
            <div className={styles.oneImageEnd}>
              <img
                src="./images/Kodo.svg"
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </div> */}

          <div className="slide">
            <div className={styles.oneImageInSlider}>
              <img
                src="./images/Hash-Corp.svg"
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </div>
          <div className="slide">
            <div className={styles.oneImageInSlider}>
              <img
                src="./images/DivvyBet.svg"
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </div>
          <div className="slide">
            <div className={styles.oneImageInSlider}>
              <img
                src="./images/Telus.svg"
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </div>

          <div className="slide">
            <div className={styles.oneImageInSlider}>
              <img
                src="./images/zone-tv.svg"
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </div>

          {/* <div className="slide">
            <div className={styles.oneImageSirius}>
              <img
                src="./images/Sirius-XM.svg"
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </div> */}
          <div className="slide">
            <div className={styles.oneImageInSlider}>
              <img
                src="./images/Teesnap.svg"
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </div>
          {/* <div className="slide">
            <div className={styles.oneImageEnd}>
              <img
                src="./images/Kodo.svg"
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </div> */}

          <div className="slide">
            <div className={styles.oneImageInSlider}>
              <img
                src="./images/Hash-Corp.svg"
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </div>
          <div className="slide">
            <div className={styles.oneImageInSlider}>
              <img
                src="./images/DivvyBet.svg"
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
