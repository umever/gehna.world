"use client"

import { useState } from "react"
import { ChevronRight, Filter, Star } from "lucide-react"
import Image, { StaticImageData } from 'next/image'
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"

import Graduation2025HeartCharm from "../../public/Graduation2025HeartCharm.jpg"
import Graduation2025HeartCharmModel from "../../public/Graduation2025HeartCharmModel.jpg"

// Sample product data with primary and hover images
const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 24.99,
    image: Graduation2025HeartCharm,
    hoverImage: Graduation2025HeartCharmModel,
    rating: 4.5,
    category: "Clothing",
  },
  {
    id: 2,
    name: "Leather Crossbody Bag",
    price: 89.99,
    image: Graduation2025HeartCharm,
    hoverImage: Graduation2025HeartCharmModel,
    rating: 4.8,
    category: "Accessories",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 129.99,
    image: Graduation2025HeartCharm,
    hoverImage: Graduation2025HeartCharmModel,
    rating: 4.7,
    category: "Electronics",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 79.99,
    image: Graduation2025HeartCharm,
    hoverImage: Graduation2025HeartCharmModel,
    rating: 4.6,
    category: "Footwear",
  },
  {
    id: 5,
    name: "Denim Jacket",
    price: 69.99,
    image: Graduation2025HeartCharm,
    hoverImage: Graduation2025HeartCharmModel,
    rating: 4.4,
    category: "Clothing",
  },
  {
    id: 6,
    name: "Smart Watch",
    price: 199.99,
    image: Graduation2025HeartCharm,
    hoverImage: Graduation2025HeartCharmModel,
    rating: 4.9,
    category: "Electronics",
  },
  {
    id: 7,
    name: "Sunglasses",
    price: 49.99,
    image: Graduation2025HeartCharm,
    hoverImage: Graduation2025HeartCharmModel,
    rating: 4.3,
    category: "Accessories",
  },
  {
    id: 8,
    name: "Casual Sneakers",
    price: 59.99,
    image: Graduation2025HeartCharm,
    hoverImage: Graduation2025HeartCharmModel,
    rating: 4.5,
    category: "Footwear",
  },
]

// Categories for filtering
const categories = [
  { id: "clothing", label: "Clothing" },
  { id: "accessories", label: "Accessories" },
  { id: "electronics", label: "Electronics" },
  { id: "footwear", label: "Footwear" },
]

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([0, 200])
  const [openMobileFilters, setOpenMobileFilters] = useState(false)

  return (
    <div className="container px-4 py-6 md:px-6 md:py-8">
      {/* Breadcrumbs */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/charms">Charms</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Mobile filter button */}
        <div className="flex md:hidden mb-4">
          <Sheet open={openMobileFilters} onOpenChange={setOpenMobileFilters}>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <div className="py-4">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                {/* Mobile filters content - same as desktop sidebar */}
                <FiltersSidebar priceRange={priceRange} setPriceRange={setPriceRange} />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop sidebar */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <FiltersSidebar priceRange={priceRange} setPriceRange={setPriceRange} />
        </div>

        {/* Products grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">All Products</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{products.length} products</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mx-1">
              1
            </Button>
            <Button variant="outline" className="mx-1">
              2
            </Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="ghost" className="mx-1">
              ...
            </Button>
            <Button variant="outline" className="mx-1">
              10
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FiltersSidebar({ priceRange, setPriceRange }: { priceRange: number[]; setPriceRange: (value: number[]) => void }) {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={`category-${category.id}`} />
              <Label htmlFor={`category-${category.id}`} className="text-sm font-normal cursor-pointer">
                {category.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div>
        <h3 className="font-medium mb-3">Price Range</h3>
        <Slider
          defaultValue={priceRange}
          min={0}
          max={200}
          step={1}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-4"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm">$</span>
            <Input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
              className="h-8 w-16"
            />
          </div>
          <span className="text-sm">to</span>
          <div className="flex items-center space-x-2">
            <span className="text-sm">$</span>
            <Input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
              className="h-8 w-16"
            />
          </div>
        </div>
      </div>

      <Separator />

      {/* Rating */}
      <div>
        <h3 className="font-medium mb-3">Rating</h3>
        <RadioGroup defaultValue="all">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="rating-all" />
            <Label htmlFor="rating-all" className="text-sm font-normal cursor-pointer">
              All ratings
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4plus" id="rating-4plus" />
            <Label htmlFor="rating-4plus" className="text-sm font-normal cursor-pointer flex items-center">
              <span>4+</span>
              <Star className="h-3 w-3 ml-1 fill-current text-yellow-400" />
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3plus" id="rating-3plus" />
            <Label htmlFor="rating-3plus" className="text-sm font-normal cursor-pointer flex items-center">
              <span>3+</span>
              <Star className="h-3 w-3 ml-1 fill-current text-yellow-400" />
            </Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      {/* Availability */}
      <Collapsible className="w-full">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Availability</h3>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2 pt-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="in-stock" />
            <Label htmlFor="in-stock" className="text-sm font-normal cursor-pointer">
              In stock
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="out-of-stock" />
            <Label htmlFor="out-of-stock" className="text-sm font-normal cursor-pointer">
              Out of stock
            </Label>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Separator />

      {/* Apply filters button */}
      <Button className="w-full">Apply Filters</Button>
    </div>
  )
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
  hoverImage: StaticImageData;
  rating: number;
  category: string;
}

function ProductCard({ product }: { product: Product }) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Card className="overflow-hidden py-0">
      <CardHeader className="p-0">
        <div
          className="aspect-square relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative w-full h-full">
            {/* Primary image */}
            <Image
              src={product.image}
              alt={`${product.name} - primary view`}
              fill
              className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ${
                isHovering ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Hover image */}
            <Image
              src={product.hoverImage}
              alt={`${product.name} - alternate view`}
              fill
              className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ${
                isHovering ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
            <Badge variant="outline" className="mt-2">
              {product.category}
            </Badge>
          </div>
          <div className="flex items-center">
            <Star className="h-3 w-3 fill-current text-yellow-400" />
            <span className="text-xs ml-1">{product.rating}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="font-semibold">${product.price.toFixed(2)}</span>
        <Button size="sm">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}
