import { useSwiper } from "swiper/react";
import styled from "styled-components";
import gsap from "gsap";
import { getNextImage, getPreviousImage } from "../helpers/swiperHelpers";

export const SwiperNavigation = () => {
  const swiper = useSwiper();

  swiper.on("slideChange", () => {
    const currentIndex = swiper.activeIndex;

    const previousImage = getPreviousImage(currentIndex);
    const nextImage = getNextImage(currentIndex);

    const prevButton = document
      .querySelector("#prev-button")
      ?.querySelector("img");
    const nextButton = document
      .querySelector("#next-button")
      ?.querySelector("img");

    gsap.fromTo(
      "#prev-button img",
      {
        y: 5,
        scale: 1.05,
        duration: 1.1,
        ease: "power2",
      },
      {
        y: 0,
        scale: 1,
        duration: 1.1,
        ease: "power2",
      },
    );

    gsap.fromTo(
      "#next-button img",
      {
        y: -5,
        scale: 1.05,
        duration: 1.1,
        ease: "power2",
      },
      {
        y: 0,
        scale: 1,
        duration: 1.1,
        ease: "power2",
      },
    );

    if (prevButton) {
      prevButton.src = previousImage;
    }

    if (nextButton) {
      nextButton.src = nextImage;
    }
  });

  return (
    <>
      <PrevButton onClick={() => swiper.slidePrev()} id="prev-button">
        <NextPrevImage
          src={getPreviousImage(swiper.activeIndex)}
          alt="Previous"
        />
      </PrevButton>
      <NextButton onClick={() => swiper.slideNext()} id="next-button">
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
