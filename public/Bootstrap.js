"use client";
import { Carousel } from "react-responsive-carousel";
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
    // <div className={styles.container}>
    //   <Carousel
    //     showThumbs={false}
    //     showStatus={false}
    //     showArrows={true}
    //     showIndicators={true}
    //     infiniteLoop={true}
    //     dynamicHeight={false}
    //     className={styles.mySwiper}
    //     autoPlay={true}
    //   >
    //     {responsive.map((item) => (
    //       <div key={item.id} className={styles.swipItem}>
    //         <div className={styles.imgBox}>
    //           <img src={item.imageUrl} alt="slides" />
    //         </div>
    //       </div>
    //     ))}
    //   </Carousel>
    // </div>

    <div className="container">
      <section className="customer-logos slider">
        <div className="slide">
          <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image1.png" />
        </div>
        <div className="slide">
          <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png" />
        </div>
        <div className="slide">
          <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png" />
        </div>
        <div className="slide">
          <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png" />
        </div>
        <div className="slide">
          <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image5.png" />
        </div>
        <div className="slide">
          <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png" />
        </div>
        <div className="slide">
          <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image7.png" />
        </div>
        <div className="slide">
          <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png" />
        </div>
      </section>
    </div>
  );
}
