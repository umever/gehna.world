"use client"
import Image from "next/image";
import Header from "./home/components/header";
import HeroAnimatedSlider from "./home/components/hero_animated_slider";
export default function Home() {
  return (
    <>
      <Header />
      <HeroAnimatedSlider />
    </>
  );
}
