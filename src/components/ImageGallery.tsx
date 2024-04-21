import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styled from "styled-components";
import gsap from "gsap";
import { type Slide } from "../types";
import { SLIDES } from "../slidesData";
import { SliderContent } from "./SliderContent";
import { SwiperNavigation } from "./SwiperNavigation";
import { SwiperFraction } from "./SwiperFraction";
import { CustomCursor } from "./CustomCursor";
import "swiper/css";

export const ImageGallery = () => {
  const swiperRef: any = useRef();
  const [slideProgress, setSlideProgress] = useState(0);

  const animateOnSlideChange = () => {
    // animate the blurred img
    gsap.from(
      swiperRef.current.slides[swiperRef.current.activeIndex].querySelector(
        ".blurred-img",
      ),
      {
        scale: 0.8,
        filter: "blur(80px)",
        x: 100,
        ease: "power3.inOut",
        duration: 0.9,
      },
    );
    // animate the front heading
    gsap.from(
      swiperRef.current.slides[swiperRef.current.activeIndex].querySelector(
        ".front-heading",
      ),
      {
        scale: 0.8,
        x: 100,
        ease: "power3.inOut",
        duration: 1.2,
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
        duration: 1.2,
      },
    );
    // animate the about text
    gsap.from(
      swiperRef.current.slides[swiperRef.current.activeIndex].querySelectorAll(
        "h2",
      ),
      {
        x: -50,
        scale: 0.8,
        opacity: 0.5,
        ease: "power3.inOut",
        duration: 1.2,
      },
    );
    // animate the about link
    gsap.from(
      swiperRef.current.slides[swiperRef.current.activeIndex].querySelectorAll(
        ".about-link",
      ),
      {
        scale: 0.7,
        opacity: 0.3,
        ease: "power3.inOut",
        duration: 1.3,
      },
    );
  };

  const updateSlideProgress = () => {
    const progress =
      (swiperRef.current.activeIndex / (SLIDES.length - 1)) * 100;
    setSlideProgress(progress);
  };

  return (
    <Swiper
      speed={800}
      pagination
      modules={[Pagination]}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={() => {
        animateOnSlideChange();
        updateSlideProgress();
      }}
    >
      <CustomCursor progress={slideProgress} />
      {SLIDES.map((slide: Slide, index: number) => (
        <SwiperSlide key={index} style={{ height: "100vh", width: "100vw" }}>
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
            <ButtonWhite className="about-link" href={slide.href}>
              Have a look
            </ButtonWhite>
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
  transition: scale ease-out 400ms;
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
