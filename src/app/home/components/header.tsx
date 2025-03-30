"use client";

import Link from "next/link";
import * as React from "react";
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
    ChevronRight
} from "lucide-react";
import { ThemeModeToggle } from "./theme_mode_toggle";
import CategoryNavMenu from "./category-nav-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {
    Button
} from "@/components/ui/button";

const menuItems = [
    {
        href: "/account",
        icon: User,
        label: "Account",
        activeColor: "group-hover:text-indigo-500 group-hover:scale-110"
    },
    {
        href: "/wishlist",
        icon: Heart,
        label: "Wishlist",
        activeColor: "group-hover:text-rose-500 group-hover:scale-110"
    },
    {
        href: "/cart",
        icon: ShoppingBag,
        label: "Bag",
        activeColor: "group-hover:text-emerald-500 group-hover:scale-110"
    }
];

export default function Header() {
    const pathname = usePathname();

    return (
        <div className="fixed top-0 w-full z-50 bg-background shadow-sm">
            <div className="px-4 py-3 w-full max-w-screen-2xl mx-auto">
                <header className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {/* Mobile Menu Sheet */}
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
                                    {[
                                        { href: "/", icon: Home, label: "Home" },
                                        { href: "/charms", icon: Sparkles, label: "Charms" },
                                        { href: "/categories", icon: Grid3X3, label: "Categories" },
                                        { href: "/components", icon: Component, label: "Components" },
                                        { href: "/docs", icon: FileText, label: "Documentation" }
                                    ].map(({ href, icon: Icon, label }) => (
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

                    {/* Menu Items - Visible on both mobile and desktop */}
                    <div className="flex items-center gap-1 sm:gap-6">
                        {menuItems.map(({ href, icon: Icon, label, activeColor }) => (
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
                                        className={cn("transition-all duration-300", activeColor)}
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

                {/* Category Navigation */}
                <CategoryNavMenu />
            </div>
        </div>
    );
}