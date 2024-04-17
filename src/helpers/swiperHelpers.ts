import { SLIDES } from "../slidesData";

export const getPreviousImage = (currentIndex: number) => {
  const previousIndex = (currentIndex - 1 + SLIDES.length) % SLIDES.length;
  return SLIDES[previousIndex].image;
};

export const getNextImage = (currentIndex: number) => {
  const nextIndex = (currentIndex + 1) % SLIDES.length;
  return SLIDES[nextIndex].image;
};
