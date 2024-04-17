import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import styled from "styled-components";
import { type Slide } from "../types";
import { SLIDES } from "../slidesData";
import { SliderContent } from "./SliderContent";
import { SwiperNavigation } from "./SwiperNavigation";
import { SwiperFraction } from "./SwiperFraction";

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
