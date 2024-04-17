import styled from "styled-components";
import { Logo } from "./components/Logo";
import { ImageGallery } from "./components/ImageGallery";

export const App = () => {
  return (
    <AppWrapper>
      <Logo />
      <ImageGallery />
    </AppWrapper>
  );
};

const AppWrapper = styled.main`
  width: 100%;
  height: 100vh;
`;
