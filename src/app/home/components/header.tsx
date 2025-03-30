"use client"
import Link from "next/link";
import * as React from "react"
import { cn } from "@/lib/utils"
import {
    User,
    Heart,
    ShoppingBag,
    Menu,
    X,
    Home,
    Sparkles,
    Grid3X3,
    Component,
    FileText,
    ChevronRight
} from "lucide-react"
import { ThemeModeToggle } from "./theme_mode_toggle";
import CategoryNavMenu from "./category-nav-menu";


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
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setIsMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative top-0 w-full z-50 shadow-xs">
            <div className="px-4 py-3 w-full max-w-screen-2xl mx-auto">
                <header className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
                    {/* Left: Menu Button + Logo */}
                    <div className="flex items-center gap-4">
                        <button
                            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? (
                                <X size={22} strokeWidth={1.5} />
                            ) : (
                                <Menu size={22} strokeWidth={1.5} />
                            )}
                        </button>
                        <Link href="/" className="text-2xl font-bold">
                            Gehna.World
                        </Link>
                    </div>

                    {/* Right: User Actions */}
                    <div className="flex items-center gap-4">
                        {menuItems.map(({ href, icon: Icon, label, activeColor }) => (
                            <Link
                                key={href}
                                href={href}
                                className="group flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                            >
                                <div className="p-2">
                                    <Icon
                                        size={20}
                                        className={cn(
                                            "transition-all duration-300",
                                            activeColor
                                        )}
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <span className="mt-1 text-xs font-medium opacity-80 group-hover:opacity-100">
                                    {label}
                                </span>
                            </Link>
                        ))}
                        <ThemeModeToggle />
                    </div>
                </header>

                {/* Categories Navigation Menu*/}
                <CategoryNavMenu/>
            </div>
            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu} />

            {/* Mobile Menu Drawer */}
            <nav
                className={cn(
                    "fixed top-0 left-0 bottom-0 z-50 w-[280px] bg-background p-6 shadow-xl transition-transform duration-300 ease-in-out lg:hidden",
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="text-xl font-bold">
                        Gehna.World
                    </Link>
                    <button
                        onClick={toggleMenu}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    >
                        <X size={22} strokeWidth={1.5} />
                    </button>
                </div>

                <div className="flex flex-col gap-2">
                    {[
                        { href: "/", icon: Home, label: "Home" },
                        { href: "/charms", icon: Sparkles, label: "Charms" },
                        { href: "/categories", icon: Grid3X3, label: "Categories" },
                        { href: "/components", icon: Component, label: "Components" },
                        { href: "/docs", icon: FileText, label: "Documentation" },
                    ].map(({ href, icon: Icon, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md group transition-colors"
                            onClick={toggleMenu}
                        >
                            <Icon size={18} strokeWidth={1.5} className="text-muted-foreground group-hover:text-primary" />
                            <span className="font-medium">{label}</span>
                            <ChevronRight
                                size={16}
                                className="ml-auto text-gray-400 group-hover:text-primary transition-colors"
                            />
                        </Link>
                    ))}
                </div>
            </nav>
        </div >
    );
}
