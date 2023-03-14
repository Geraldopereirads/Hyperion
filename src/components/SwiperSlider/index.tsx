import { useContext, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import SwiperCore from "swiper";

import { GameContext } from "../../Providers/GameContext/GameContext";

export function SwiperComp() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const { games, addProduct } = useContext(GameContext);
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {games.map((product) => (
          <SwiperSlide key={product.id + 123}>
            <img src={product.image} alt="Imagem do Produto" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {games.map((product) => (
          <SwiperSlide key={product.id + 12432}>
            <img src={product.image} alt="Imagem do Produto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
