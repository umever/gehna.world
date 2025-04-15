"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

export default function NewsletterSubscribe() {
//   const { toast } = Toaster()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast("Subscription successful!",{
      description: "Thank you for subscribing to our newsletter.",
      action:{
        label: "OK",
        onClick: () => {
          console.log("Subscription successful!")
        },
      }}
    )

    setEmail("")
    setIsLoading(false)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Subscribe to Our Newsletter</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Stay updated with our latest products, trends, and exclusive offers.
            </p>
          </div>
          <div className="w-full max-w-md space-y-2">
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}