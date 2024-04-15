import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Slide } from "./types"
import styled from "styled-components"
import Logo from "./components/Logo"
import SliderContent from "./components/SliderContent"

import "swiper/css"

import image01Small from "./assets/images/image01.jpg"
import image01Large from "./assets/images/image01@2x.jpg"
import image02Small from "./assets/images/image02.jpg"
import image02Large from "./assets/images/image02@2x.jpg"
import image03Small from "./assets/images/image03.jpg"
import image03Large from "./assets/images/image03@2x.jpg"
import image04Small from "./assets/images/image04.jpg"
import image04Large from "./assets/images/image04@2x.jpg"
import image05Small from "./assets/images/image05.jpg"
import image05Large from "./assets/images/image05@2x.jpg"

const SLIDES: Array<Slide> = [
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
]

const App = () => {
	return (
		<div>
			<Logo />
			<Swiper slidesPerView={1} navigation>
				{SLIDES.map((slide: Slide, index: number) => (
					<SwiperSlide key={index} style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
						<BlurredImage src={slide.bg} alt="image" />
						<SliderContent title={slide.title} image={slide.image} />
						<AboutBlock>
							<SmallText>
								{slide.author} <br /> for {slide.brand}
							</SmallText>
							<RightText>{slide.date}</RightText>
							<WhiteLink href={slide.href}>Have a look</WhiteLink>
						</AboutBlock>
					</SwiperSlide>
				))}
				<SwiperNavigations />
			</Swiper>
		</div>
	)
}
const SwiperNavigations = () => {
	const swiper = useSwiper()

	swiper.on("slideChange", () => {
		const currentIndex = swiper.activeIndex

		const previousImage = getPreviousImage(currentIndex)
		const nextImage = getNextImage(currentIndex)

		const prevButton = document.querySelector("#prevButton")?.querySelector("img")
		const nextButton = document.querySelector("#nextButton")?.querySelector("img")

		if (prevButton) {
			prevButton.src = previousImage
		}

		if (nextButton) {
			nextButton.src = nextImage
		}
	})

	return (
		<>
			<PrevButton onClick={() => swiper.slidePrev()} id="prevButton">
				<NextPrevImage src={getPreviousImage(swiper.activeIndex)} alt="Previous" />
			</PrevButton>
			<NextButton onClick={() => swiper.slideNext()} id="nextButton">
				<NextPrevImage src={getNextImage(swiper.activeIndex)} alt="Next" />
			</NextButton>
		</>
	)
}

const getPreviousImage = (currentIndex: number) => {
	const previousIndex = (currentIndex - 1 + SLIDES.length) % SLIDES.length
	return SLIDES[previousIndex].image
}

const getNextImage = (currentIndex: number) => {
	const nextIndex = (currentIndex + 1) % SLIDES.length
	return SLIDES[nextIndex].image
}

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
`

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
`

const NextPrevImage = styled.img`
	width: 248px;
	height: 330px;
	object-fit: cover;
`

const BlurredImage = styled.img`
	width: 100%;
	height: 100%;
	filter: blur(120px);
	position: absolute;
	z-index: 50;
	object-fit: cover;
	inset: 0;
`

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
`

const SmallText = styled.h2`
	text-transform: uppercase;
	font-size: 10px;
`

const RightText = styled(SmallText)`
	align-self: flex-end;
`

const WhiteLink = styled.a`
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
`

export default App
