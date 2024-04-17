import styled from "styled-components";

import { type Slide } from "../types";

export const SliderContent = (props: Slide) => {
  return (
    <Content>
      <ImageWrapper>
        <FrontHeading>{props.title}</FrontHeading>
        <MainImage src={props.image} alt={props.title} />
      </ImageWrapper>
      <BackHeading>{props.title}</BackHeading>
    </Content>
  );
};

const Content = styled.div`
  position: absolute;
  z-index: 100;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImageWrapper = styled.div`
  width: 512px;
  height: 680px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  border: 1px solid #000000;
`;

const MainImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const HeroHeading = styled.span`
  font-family: "Tungsten";
  text-transform: uppercase;
  font-size: 220px;
  line-height: 176px;
  font-weight: 400;
  letter-spacing: 8px;
  text-align: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 11ch;
`;

const BackHeading = styled(HeroHeading)`
  z-index: 150;
  color: transparent;
  -webkit-text-stroke: 1px #ffffff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FrontHeading = styled(HeroHeading)`
  color: #ffffff;
  z-index: 150;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
