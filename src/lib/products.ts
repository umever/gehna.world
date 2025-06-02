import { supabase } from "./supabase"

export interface Product {
  id: number
  name: string
  description?: string
  price: number
  image: string
  hoverImage: string
  rating: number
  category: string
  in_stock: boolean
}

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*")

  if (error) {
    console.error("Error fetching products:", error)
    throw new Error("Failed to fetch products")
  }

  return data as Product[]
}

export async function getProductsByCategory(category: string) {
  const { data, error } = await supabase.from("products").select("*").eq("category", category)

  if (error) {
    console.error("Error fetching products by category:", error)
    throw new Error("Failed to fetch products by category")
  }

  return data as Product[]
}

export async function getProductById(id: number) {
  const { data, error } = await supabase.from("products").select("*").eq("id", id).single()

  if (error) {
    console.error("Error fetching product by id:", error)
    throw new Error("Failed to fetch product")
  }

  return data as Product
}
