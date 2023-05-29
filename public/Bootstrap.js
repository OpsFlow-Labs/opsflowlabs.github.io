//carousels/Responsive.js
import { Carousel } from "react-responsive-carousel";
import myItems from "./Items.json" assert { type: "json" };
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Responsive.module.scss";

export default function ResponsiveCarousel() {
  const { responsive } = myItems.items;

  return (
    <div className={styles.container}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        className={styles.mySwiper}
      >
        {responsive.map((item) => (
          <div key={item.id} className={styles.swipItem}>
            <div className={styles.imgBox}>
              <img src={item.imageUrl} alt="slides" />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
