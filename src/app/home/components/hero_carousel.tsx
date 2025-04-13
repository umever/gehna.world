import * as React from "react"
import Image from 'next/image'
import Slide1 from "../../../../public/hero_slider_1.jpg"
import Slide2 from "../../../../public/hero_slider_2.jpg"
import Slide3 from "../../../../public/hero_slider_3.webp"
import Slide4 from "../../../../public/hero_slider_4.jpg"
import Slide5 from "../../../../public/hero_slider_5.jpg"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [, setCurrent] = React.useState(0)
  const [, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const hero_carousel_images = [Slide1, Slide2, Slide3, Slide4, Slide5]; // Hero Carousel Images

  return (
    <section className="relative mx-auto justify-center w-full h-[40vh] md:h-[50vh] lg:h-[75vh]">
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="h-full w-full  ">
        <CarouselContent className="h-full w-full ml-0">
          {hero_carousel_images.map((image, index) => (
            <CarouselItem key={index} className="h-[40vh] md:h-[50vh] lg:h-[75vh] w-full p-0 ">
              <Card className="h-full w-full overflow-hidden border-0 p-0">
                <CardContent className="relative h-full w-full">
                  <Image src={image} fill alt={`Slide ${index + 1}`} className="object-cover"
                  ></Image>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2" />
      </Carousel>
    </section>
  )
}
