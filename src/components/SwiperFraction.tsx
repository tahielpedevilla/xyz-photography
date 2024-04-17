import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSwiper } from "swiper/react";

export const SwiperFraction = () => {
  const swiper = useSwiper();
  const [fractionText, setFractionText] = useState("");

  useEffect(() => {
    const updateFractionText = () => {
      if (swiper && swiper.slides) {
        const text = `${swiper.realIndex + 1} OF ${swiper.slides.length}`;
        setFractionText(text);
      }
    };

    swiper.on("slideChange", updateFractionText);
    updateFractionText();

    return () => {
      swiper.off("slideChange", updateFractionText);
    };
  }, [swiper]);

  return <FractionText>{fractionText}</FractionText>;
};

const FractionText = styled.span`
  position: absolute;
  z-index: 200;
  top: 75%;
  left: calc(50% - 35px);
  transform: translate(-50%, -50%);
  font-family: "Helvetica", sans-serif;
  font-size: 10px;
  line-height: 11.5px;
  letter-spacing: 1px;
`;
