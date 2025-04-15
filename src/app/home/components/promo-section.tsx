"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FiftyPercentSale from "../../../../public/50percentsale.jpg"

export default function PromoSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 promo-gradient text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white">Limited Time Offer</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Summer Sale Up To 50% Off</h2>
            <p className="text-white/80 md:text-xl">
              Discover our summer collection and enjoy exclusive discounts on selected items. Don&apos;t miss out on these
              amazing deals!
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/sale">
                <Button size="lg" variant="secondary">
                  Shop the Sale
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <Image
                              src={FiftyPercentSale}
                              alt="Summer Sale"
                              width={500}
                              height={400}
                              className="rounded-lg object-cover"
                            />
              <div className="absolute top-4 right-4 bg-white text-primary rounded-full px-4 py-2 font-bold text-lg">
                50% OFF
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}