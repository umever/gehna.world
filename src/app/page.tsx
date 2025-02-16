"use client"
import EmblaCarousel from "./home/components/embla_carousel/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import Header from "./home/components/header";
import HeroAnimatedSlider from "./home/components/hero_animated_slider_components/HeroAnimatedSlider";

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


export default function Home() {
  return (
    <>
      <Header />
      <HeroAnimatedSlider />
      <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
    </>
  );
}
