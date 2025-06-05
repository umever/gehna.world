"use client"

import { useEffect, useState } from "react"
import { ChevronRight, Filter, Star } from "lucide-react"
import { supabase } from "@/lib/supabase"
import Image from "next/image"

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
import { toast } from "sonner"

// Define product type
interface Product {
  id: number
  name: string
  price: number
  image: string
  hover_image: string
  rating: number
  category: string
  in_stock: boolean
}

// Categories for filtering
const categories = [
  { id: "clothing", label: "Clothing" },
  { id: "accessories", label: "Accessories" },
  { id: "electronics", label: "Electronics" },
  { id: "footwear", label: "Footwear" },
]

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [openMobileFilters, setOpenMobileFilters] = useState(false)

  // Filter states
  const [priceRange, setPriceRange] = useState([0, 200])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [minRating, setMinRating] = useState<number | null>(null)
  const [stockFilter, setStockFilter] = useState<string | null>(null)

  // Fetch products from Supabase
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)

        const { data, error } = await supabase.from("products").select("*")

        if (error) {
          throw error
        }

        if (data) {
          setProducts(data)
          setFilteredProducts(data)

          // Find max price for price range slider
          const maxPrice = Math.max(...data.map((product: Product) => product.price))
          setPriceRange([0, maxPrice > 0 ? maxPrice : 200])
        }
      } catch (error) {
        console.error("Error fetching products:", error)
        toast.error("Failed to load products. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
    // eslint-disable-next-line
  }, [])

  // Apply filters whenever filter states change
  useEffect(() => {
    if (products.length === 0) return

    let filtered = [...products]

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) => selectedCategories.includes(product.category.toLowerCase()))
    }

    // Filter by price range
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Filter by rating
    if (minRating !== null) {
      filtered = filtered.filter((product) => product.rating >= minRating)
    }

    // Filter by stock
    if (stockFilter === "in-stock") {
      filtered = filtered.filter((product) => product.in_stock)
    } else if (stockFilter === "out-of-stock") {
      filtered = filtered.filter((product) => !product.in_stock)
    }

    setFilteredProducts(filtered)
  }, [products, selectedCategories, priceRange, minRating, stockFilter])

  // Handle category selection
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, category])
    } else {
      setSelectedCategories((prev) => prev.filter((c) => c !== category))
    }
  }

  // Handle rating selection
  const handleRatingChange = (value: string) => {
    if (value === "all") {
      setMinRating(null)
    } else if (value === "4plus") {
      setMinRating(4)
    } else if (value === "3plus") {
      setMinRating(3)
    }
  }

  // Handle stock filter
  const handleStockChange = (id: string, checked: boolean) => {
    if (id === "in-stock" && checked) {
      setStockFilter("in-stock")
    } else if (id === "out-of-stock" && checked) {
      setStockFilter("out-of-stock")
    } else {
      setStockFilter(null)
    }
  }

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategories([])
    setPriceRange([0, Math.max(...products.map((product) => product.price), 200)])
    setMinRating(null)
    setStockFilter(null)
  }

  return (
    <div className="w-full px-4 py-6 md:px-6 md:py-8">
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
                <FiltersSidebar
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  selectedCategories={selectedCategories}
                  handleCategoryChange={handleCategoryChange}
                  handleRatingChange={handleRatingChange}
                  handleStockChange={handleStockChange}
                  resetFilters={resetFilters}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop sidebar */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <FiltersSidebar
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedCategories={selectedCategories}
            handleCategoryChange={handleCategoryChange}
            handleRatingChange={handleRatingChange}
            handleStockChange={handleStockChange}
            resetFilters={resetFilters}
          />
        </div>

        {/* Products grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">All Products</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{filteredProducts.length} products</span>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-7 gap-4">
              {[...Array(8)].map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="aspect-square bg-muted animate-pulse" />
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="h-4 bg-muted animate-pulse rounded mb-2" />
                    <div className="h-4 w-1/2 bg-muted animate-pulse rounded" />
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <div className="h-4 w-1/4 bg-muted animate-pulse rounded" />
                    <div className="h-8 w-1/3 bg-muted animate-pulse rounded" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-7 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No products found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your filters</p>
              <Button onClick={resetFilters} variant="outline" className="mt-4">
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function FiltersSidebar({
  priceRange,
  setPriceRange,
  selectedCategories,
  handleCategoryChange,
  handleRatingChange,
  handleStockChange,
  resetFilters,
}: {
  priceRange: number[]
  setPriceRange: (value: number[]) => void
  selectedCategories: string[]
  handleCategoryChange: (category: string, checked: boolean) => void
  handleRatingChange: (value: string) => void
  handleStockChange: (id: string, checked: boolean) => void
  resetFilters: () => void
}) {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => handleCategoryChange(category.id, checked === true)}
              />
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
          max={Math.max(200, priceRange[1])}
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
              onChange={(e) => setPriceRange([Number.parseInt(e.target.value) || 0, priceRange[1]])}
              className="h-8 w-16"
            />
          </div>
          <span className="text-sm">to</span>
          <div className="flex items-center space-x-2">
            <span className="text-sm">$</span>
            <Input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value) || 0])}
              className="h-8 w-16"
            />
          </div>
        </div>
      </div>

      <Separator />

      {/* Rating */}
      <div>
        <h3 className="font-medium mb-3">Rating</h3>
        <RadioGroup defaultValue="all" onValueChange={handleRatingChange}>
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
      <Collapsible className="w-full" defaultOpen>
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
            <Checkbox id="in-stock" onCheckedChange={(checked) => handleStockChange("in-stock", checked === true)} />
            <Label htmlFor="in-stock" className="text-sm font-normal cursor-pointer">
              In stock
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="out-of-stock"
              onCheckedChange={(checked) => handleStockChange("out-of-stock", checked === true)}
            />
            <Label htmlFor="out-of-stock" className="text-sm font-normal cursor-pointer">
              Out of stock
            </Label>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Separator />

      {/* Reset filters button */}
      <Button variant="outline" className="w-full" onClick={resetFilters}>
        Reset Filters
      </Button>
    </div>
  )
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
          {/* Primary image */}
          <Image
            src={product.image || "/placeholder.svg"}
            alt={`${product.name} - primary view`}
            fill
            className={`absolute inset-0 object-cover transition-opacity duration-300 ${isHovering ? "opacity-0" : "opacity-100"
              }`}
            priority={product.id === 1}
          />

          {/* Hover image */}
          <Image
            src={product.hover_image || "/placeholder.svg"}
            alt={`${product.name} - alternate view`}
            fill
            className={`absolute inset-0 object-cover transition-opacity duration-300 ${isHovering ? "opacity-100" : "opacity-0"
              }`}
          />

          {/* Stock badge */}
          {!product.in_stock && (
            <div className="absolute top-2 right-2">
              <Badge variant="destructive">Out of Stock</Badge>
            </div>
          )}
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
        <Button size="sm" disabled={!product.in_stock}>
          {product.in_stock ? "Add to Cart" : "Sold Out"}
        </Button>
      </CardFooter>
    </Card>
  )
}