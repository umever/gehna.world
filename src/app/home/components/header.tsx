"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  User,
  Heart,
  ShoppingBag,
  Menu,
  Home,
  Sparkles,
  Grid3X3,
  Component,
  FileText,
  ChevronRight,
} from "lucide-react";

import { ThemeModeToggle } from "./theme_mode_toggle";
import CategoryNavMenu from "./category-nav-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const menuItems = [
  { href: "/account", icon: User, label: "Account", color: "group-hover:text-indigo-500" },
  { href: "/wishlist", icon: Heart, label: "Wishlist", color: "group-hover:text-rose-500" },
  { href: "/cart", icon: ShoppingBag, label: "Bag", color: "group-hover:text-emerald-500" },
];

const navLinks = [
  { href: "/shop/discover", icon: Home, label: "Discover" },
  { href: "/shop/charms", icon: Sparkles, label: "Charms" },
  { href: "/shop/neclaces", icon: Grid3X3, label: "Neclaces" },
  { href: "/shop/bracelets", icon: Component, label: "Bracelets" },
  { href: "/shop/rings", icon: FileText, label: "Rings" },
  { href: "/shop/earrings", icon: Grid3X3, label: "Earrings" },
  { href: "/shop/diamonds", icon: Component, label: "Diamonds" },
  { href: "/shop/engravings", icon: FileText, label: "Engravings" },
];

export default function Header() {
    const pathname = usePathname();
  
    return (
      <div className="w-full bg-background">
        <div className="px-4 py-4">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="sm:hidden" aria-label="Open menu">
                    <Menu size={20} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>
                      <Link href="/" className="text-xl font-bold">
                        Gehna.World
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-2">
                    {navLinks.map(({ href, icon: Icon, label }) => (
                      <Link
                        key={href}
                        href={href}
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-md transition-colors hover:bg-muted",
                          pathname === href && "bg-muted"
                        )}
                      >
                        <Icon size={18} />
                        <span className="text-sm font-medium">{label}</span>
                        <ChevronRight className="ml-auto h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
  
              {/* Logo */}
              <Link href="/" className="text-xl sm:text-2xl font-bold">
                Gehna.World
              </Link>
            </div>
  
            {/* Desktop Menu Items */}
            <div className="flex items-center gap-1 sm:gap-6">
              {menuItems.map(({ href, icon: Icon, label, color }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "group flex flex-col items-center p-1 sm:p-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300",
                    pathname === href && "text-primary"
                  )}
                >
                  <div className="p-1 sm:p-2">
                    <Icon
                      size={20}
                      className={cn("transition-all duration-300", color)}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="hidden sm:block text-xs font-medium opacity-80 group-hover:opacity-100">
                    {label}
                  </span>
                </Link>
              ))}
              <ThemeModeToggle />
            </div>
          </header>
  
          <CategoryNavMenu />
        </div>
      </div>
    );
  }