import styled from "styled-components";

export const SwiperFraction = () => {
  return <FractionText id="currentSlide"></FractionText>;
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
