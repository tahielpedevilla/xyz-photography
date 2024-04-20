import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import styled from "styled-components";
import gsap from "gsap";
import { useRef } from "react";
import { type Slide } from "../types";
import { SLIDES } from "../slidesData";
import { SliderContent } from "./SliderContent";
import { SwiperNavigation } from "./SwiperNavigation";
import { SwiperFraction } from "./SwiperFraction";

export const ImageGallery = () => {
  const swiperRef: any = useRef();

  const currentSlide = document.querySelector("#currentSlide") as HTMLElement;

  if (swiperRef.current && swiperRef.current.slides) {
    currentSlide.textContent =
      swiperRef.current.activeIndex +
      1 +
      " / " +
      swiperRef.current.slides.length;
  }

  const animateOnSlideChange = () => {
    const currentSlide = document.querySelector("#currentSlide") as HTMLElement;
    currentSlide.textContent =
      swiperRef.current.activeIndex +
      1 +
      " / " +
      swiperRef.current.slides.length;

    gsap.to(swiperRef.current.slides[swiperRef.current.activeIndex], {
      scale: 1,
      opacity: 1,
    });

    // animate the front heading
    gsap.from(
      swiperRef.current.slides[swiperRef.current.activeIndex].querySelector(
        ".front-heading",
      ),
      {
        scale: 0.8,
        x: 100,
        ease: "power3.inOut",
      },
    );
    // animate the back heading
    gsap.from(
      swiperRef.current.slides[swiperRef.current.activeIndex].querySelector(
        ".back-heading",
      ),
      {
        x: 100,
        scale: 0.8,
        ease: "power3.inOut",
      },
    );
    // animate the about text
    gsap.from(
      swiperRef.current.slides[swiperRef.current.activeIndex].querySelectorAll(
        "h2",
      ),
      {
        scale: 0.8,
        opacity: 0.5,
        ease: "power3.inOut",
      },
    );

    //scale the slide down on exit
    const prev = swiperRef.current.slides[swiperRef.current.previousIndex];
    gsap.to(prev, { opacity: 0.3, scale: 0.8 });
  };

  return (
    <Swiper
      pagination
      modules={[Pagination]}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={animateOnSlideChange}
    >
      {SLIDES.map((slide: Slide, index: number) => (
        <SwiperSlide
          key={index}
          style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
        >
          <BlurredImage
            className="blurred-img"
            src={slide.bg}
            alt={"blurred" + slide.title + "by" + slide.author}
          />
          <SliderContent title={slide.title} image={slide.image} />
          <AboutBlock>
            <SmallText>
              {slide.author} <br /> for {slide.brand}
            </SmallText>
            <RightText>{slide.date}</RightText>
            <ButtonWhite href={slide.href}>Have a look</ButtonWhite>
          </AboutBlock>
        </SwiperSlide>
      ))}
      <SwiperNavigation />
      <SwiperFraction />
    </Swiper>
  );
};

const BlurredImage = styled.img`
  width: 100%;
  height: 100%;
  filter: blur(120px);
  position: absolute;
  z-index: 50;
  object-fit: cover;
  inset: 0;
`;

const ButtonWhite = styled.a`
  background-color: #ffffff;
  border: none;
  border-radius: 24px;
  height: 29px;
  padding: 9px 16px;
  width: 100%;
  line-height: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: bold;
  color: #202020;
  font-size: 10px;
  text-decoration: none;
`;

const AboutBlock = styled.aside`
  font-family: "Helvetica";
  position: absolute;
  z-index: 200;
  right: 155px;
  bottom: 93px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  width: 109px;
`;

const SmallText = styled.h2`
  text-transform: uppercase;
  font-size: 10px;
`;

const RightText = styled(SmallText)`
  align-self: flex-end;
`;
