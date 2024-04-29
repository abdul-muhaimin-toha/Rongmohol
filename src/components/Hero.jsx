import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["EXPRESSION", "INSPIRATION", "CREATION"],
    loop: 0,
  });

  return (
    <section className="relative z-30">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-hero-slider-1 bg-cover bg-center bg-no-repeat">
            <div className="min-h-[calc(100vh-64px)] w-full bg-gradient-to-b from-[#130e0e] to-[#130e0e] opacity-70"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-hero-slider-2 bg-cover bg-center bg-no-repeat">
            <div className="min-h-[calc(100vh-64px)] w-full bg-gradient-to-b from-[#130e0e] to-[#130e0e] opacity-70"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-hero-slider-3 bg-cover bg-center bg-no-repeat">
            <div className="min-h-[calc(100vh-64px)] w-full bg-gradient-to-b from-[#130e0e] to-[#130e0e] opacity-70"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-hero-slider-4 bg-cover bg-center bg-no-repeat">
            <div className="min-h-[calc(100vh-64px)] w-full bg-gradient-to-b from-[#130e0e] to-[#130e0e] opacity-70"></div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute left-1/2 top-1/2 z-50 flex w-full -translate-x-1/2 -translate-y-1/2  justify-center p-10">
        <div className="flex max-w-full flex-col  text-center md:max-w-3xl">
          <h1 className="mb-8 text-4xl font-semibold uppercase text-white md:text-5xl">
            Your Premier Destination for Artistic {text}
          </h1>
          <p className="font-semibolod mb-8 text-sm text-white md:text-base">
            Embark on a Journey of Self-Expression with Our Vast Selection of
            Painting, Crafted to Inspire Your Imagination and Bring Your Vision
            to Life
          </p>
          <Link
            to="/add-art"
            className="self-center rounded-md bg-gradient-bg px-5 py-3 font-semibold uppercase text-black transition duration-150 hover:text-white dark:bg-gradient-bg-2"
          >
            Post Your Art
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
