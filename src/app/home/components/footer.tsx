import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="px-4 py-12 md:px-6 md:py-16 lg:py-20">
        {/* 2 columns on mobile, 4 on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand & Social */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Gehna.World</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Premium fashion for every occasion. Quality products at affordable prices.
            </p>
            <div className="flex justify-center md:justify-start space-x-4" aria-label="Social media">
              <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Shop */}
          <nav aria-label="Shop" className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-muted-foreground hover:text-foreground">All Products</Link></li>
              <li><Link href="/categories/men" className="text-muted-foreground hover:text-foreground">Men</Link></li>
              <li><Link href="/categories/women" className="text-muted-foreground hover:text-foreground">Women</Link></li>
              <li><Link href="/categories/accessories" className="text-muted-foreground hover:text-foreground">Accessories</Link></li>
              <li><Link href="/sale" className="text-muted-foreground hover:text-foreground">Sale</Link></li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/sustainability" className="text-muted-foreground hover:text-foreground">Sustainability</Link></li>
              <li><Link href="/press" className="text-muted-foreground hover:text-foreground">Press</Link></li>
            </ul>
          </nav>

          {/* Customer Service */}
          <nav aria-label="Customer Service" className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
              <li><Link href="/shipping" className="text-muted-foreground hover:text-foreground">Shipping & Returns</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link href="/size-guide" className="text-muted-foreground hover:text-foreground">Size Guide</Link></li>
              <li><Link href="/track-order" className="text-muted-foreground hover:text-foreground">Track Order</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Gehna.World All rights reserved.
            </p>
            <nav className="flex flex-col gap-2 md:flex-row md:gap-4 text-sm text-muted-foreground" aria-label="Legal">
              <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
              <Link href="/cookies" className="hover:text-foreground">Cookie Policy</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}