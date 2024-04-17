import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import styled from "styled-components";
import { type Slide } from "../types";
import { SLIDES } from "../slidesData";
import { getNextImage, getPreviousImage } from "../helpers/swiperHelpers";
import { SliderContent } from "./SliderContent";

export const ImageGallery = () => {
  return (
    <Swiper pagination modules={[Pagination]}>
      {SLIDES.map((slide: Slide, index: number) => (
        <SwiperSlide
          key={index}
          style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
        >
          <BlurredImage src={slide.bg} alt="image" />
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
      <SwiperFraction id="fraction" />
    </Swiper>
  );
};

const SwiperNavigation = () => {
  const swiper = useSwiper();

  const fraction = document.getElementById("fraction") as HTMLDivElement;

  if (fraction) {
    fraction.textContent = `${swiper.realIndex + 1} OF ${swiper.slides.length}`;
  }

  swiper.on("slideChange", () => {
    const currentIndex = swiper.activeIndex;
    fraction.textContent = `${swiper.realIndex + 1} OF ${swiper.slides.length}`;

    const previousImage = getPreviousImage(currentIndex);
    const nextImage = getNextImage(currentIndex);

    const prevButton = document
      .querySelector("#prevButton")
      ?.querySelector("img");
    const nextButton = document
      .querySelector("#nextButton")
      ?.querySelector("img");

    if (prevButton) {
      prevButton.src = previousImage;
    }

    if (nextButton) {
      nextButton.src = nextImage;
    }
  });

  return (
    <>
      <PrevButton onClick={() => swiper.slidePrev()} id="prevButton">
        <NextPrevImage
          src={getPreviousImage(swiper.activeIndex)}
          alt="Previous"
        />
      </PrevButton>
      <NextButton onClick={() => swiper.slideNext()} id="nextButton">
        <NextPrevImage src={getNextImage(swiper.activeIndex)} alt="Next" />
      </NextButton>
    </>
  );
};

const NextButton = styled.button`
  border: none;
  position: absolute;
  z-index: 200;
  cursor: pointer;
  padding: 0;
  right: 16px;
  top: 16px;
  border: 1px solid #000000;
  border-radius: 10px;
  overflow: hidden;
`;

const PrevButton = styled.button`
  border: none;
  position: absolute;
  z-index: 200;
  cursor: pointer;
  padding: 0;
  left: 16px;
  bottom: 16px;
  border: 1px solid #000000;
  border-radius: 10px;
  overflow: hidden;
`;

const NextPrevImage = styled.img`
  width: 248px;
  height: 330px;
  object-fit: cover;
`;

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

const SwiperFraction = styled.div`
  position: absolute;
  z-index: 200;
  top: 75%;
  left: calc(50% - 35px);
  transform: translate(-50%, -50%);
  font-family: "Helvetica";
  font-size: 10px;
  line-height: 11.5;
  letter-spacing: 1px;
`;
