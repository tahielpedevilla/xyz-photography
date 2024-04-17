import { type Slide } from "./types";

import image01Small from "./assets/images/image01.jpg";
import image01Large from "./assets/images/image01@2x.jpg";
import image02Small from "./assets/images/image02.jpg";
import image02Large from "./assets/images/image02@2x.jpg";
import image03Small from "./assets/images/image03.jpg";
import image03Large from "./assets/images/image03@2x.jpg";
import image04Small from "./assets/images/image04.jpg";
import image04Large from "./assets/images/image04@2x.jpg";
import image05Small from "./assets/images/image05.jpg";
import image05Large from "./assets/images/image05@2x.jpg";

export const SLIDES: Array<Slide> = [
  {
    title: "Everyday flowers",
    bg: image01Large,
    image: image01Small,
    href: "#",
    author: "Johanna Hobel",
    brand: "Vouge",
    date: "Jun 2019",
  },
  {
    title: "The wilder night",
    bg: image02Large,
    image: image02Small,
    href: "#",
    author: "Johanna Hobel",
    brand: "Wild",
    date: "Dec 2019",
  },
  {
    title: "Smooth memories",
    bg: image03Large,
    image: image03Small,
    href: "#",
    author: "Johanna Hobel",
    brand: "Chanel",
    date: "Feb 2020",
  },
  {
    title: "The future universe",
    bg: image04Large,
    image: image04Small,
    href: "#",
    author: "Johanna Hobel",
    brand: "On",
    date: "Apr 2020",
  },
  {
    title: "She was born urban",
    bg: image05Large,
    image: image05Small,
    href: "#",
    author: "Johanna Hobel",
    brand: "Si",
    date: "Dec 2021",
  },
];
