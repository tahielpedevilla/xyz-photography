import styled from "styled-components";

export const Logo = () => {
  return <LogoText>XYZ Photography</LogoText>;
};

const LogoText = styled.h1`
  font-family: "Tungsten";
  text-transform: uppercase;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1px;
  position: fixed;
  z-index: 50;
  top: 16px;
  left: 16px;
`;
