"use client"
import Image from "next/image";
import Header from "./home/components/header";
import HeroAnimatedSlider from "./home/components/hero_animated_slider";
export default function Home() {
  return (
    <>
      <Header />
      <HeroAnimatedSlider />
      <div>
        <h1>Welcome to Gehna World</h1>
        <p>
          Gehna World is a place where you can find and purchase every gehna.
        </p>
        <Image
          src="/necklace.jpg"
          alt="A necklace"
          width={500}
          height={500}
        />
      </div>
    </>
  );
}
