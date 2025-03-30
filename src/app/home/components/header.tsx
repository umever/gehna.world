"use client"
import Link from "next/link";
import Image, { StaticImageData } from 'next/image'
import * as React from "react"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
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
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import ClipAndSpacer from "../../../../public/clip_n_spacer.webp"
import { ThemeModeToggle } from "./theme_mode_toggle";


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

const nav_charms: { [key: string]: { image: StaticImageData; title: string; href: string; }[] } = {
    "Categories": [
        {
            image: ClipAndSpacer,
            title: "Clips & Spacers",
            href: "/docs/primitives/alert-dialog"
        },
        {
            image: ClipAndSpacer,
            title: "Dangle Charms",
            href: "/docs/primitives/hover-card"
        },
        {
            image: ClipAndSpacer,
            title: "Engravable Charms",
            href: "/docs/primitives/progress"
        },
        {
            image: ClipAndSpacer,
            title: "Safety Chains",
            href: "/docs/primitives/scroll-area"
        },
    ],
    "Prices": [
        {
            image: ClipAndSpacer,
            title: "< 25K",
            href: "/docs/primitives/alert-dialog"
        },
        {
            image: ClipAndSpacer,
            title: "25K - 50K",
            href: "/docs/primitives/hover-card"
        },
        {
            image: ClipAndSpacer,
            title: "50K - 1L",
            href: "/docs/primitives/progress"
        },
        {
            image: ClipAndSpacer,
            title: "1L and above",
            href: "/docs/primitives/scroll-area"
        },
    ]
}
const components = [
    { title: "Alert Dialog", href: "/docs/primitives/alert-dialog", description: "A modal dialog that interrupts the user with important content and expects a response." },
    { title: "Hover Card", href: "/docs/primitives/hover-card", description: "For sighted users to preview content available behind a link." },
    { title: "Progress", href: "/docs/primitives/progress", description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar." },
    { title: "Scroll-area", href: "/docs/primitives/scroll-area", description: "Visually or semantically separates content." },
    { title: "Tabs", href: "/docs/primitives/tabs", description: "A set of layered sections of content—known as tab panels—that are displayed one at a time." },
    { title: "Tooltip", href: "/docs/primitives/tooltip", description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it." },
];

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [selectedSection, setSelectedSection] = React.useState<"Categories" | "Prices">("Categories");

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
                <div className="hidden w-full flex-col justify-center gap-6 lg:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-hidden focus:shadow-md"
                                                    href="/"
                                                >
                                                    <Icons.logo className="h-6 w-6" />
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        shadcn/ui
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Beautifully designed components built with Radix UI and
                                                        Tailwind CSS.
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href="/docs" title="New">
                                            Re-usable components built using Radix UI and Tailwind CSS.
                                        </ListItem>
                                        <ListItem href="/docs/installation" title="Featured">
                                            How to install dependencies and structure your app.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Charms</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid grid-cols-[200px_1fr_320px] gap-3 p-4 w-[1200px] min-h-[500px] rounded-lg">
                                        {/* Left Section - Categories */}
                                        <div className="border-r p-2">
                                            <div className="flex flex-col gap-2">
                                                {Object.keys(nav_charms).map((section) => (
                                                    <button
                                                        key={section}
                                                        onClick={() => setSelectedSection(section as "Categories" | "Prices")}
                                                        className={cn(
                                                            "block w-full text-left px-4 py-2 rounded-md transition-all duration-200",
                                                            selectedSection === section
                                                                ? "bg-primary/10 text-primary font-medium"
                                                                : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                                        )}
                                                    >
                                                        {section}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Middle Section - Items Grid */}
                                        <div className="p-4 overflow-y-auto max-h-[460px] scrollbar-thin">
                                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 content-start">
                                                {nav_charms[selectedSection].map(({ image, title, href }) => (
                                                    <NavigationMenuLink asChild key={title}>
                                                        <a
                                                            href={href}
                                                            className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200"
                                                        >
                                                            <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                                <Image
                                                                    src={image}
                                                                    alt={title}
                                                                    fill
                                                                    className="object-cover transition-transform group-hover:scale-110"
                                                                />
                                                            </div>
                                                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                                {title}
                                                            </span>
                                                        </a>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                            {/* Ad Banner at Bottom */}
                                            <div className="mt-6 w-full h-32 bg-gradient-to-r from-primary/10 to-primary/20 rounded-lg overflow-hidden">
                                                <div className="h-full flex items-center justify-between p-4">
                                                    <div className="space-y-2">
                                                        <h3 className="text-lg font-semibold text-primary">Special Offer!</h3>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                                            Get 20% off on selected charms collection
                                                        </p>
                                                        <button className="px-4 py-1 text-sm bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                                                            Shop Now
                                                        </button>
                                                    </div>
                                                    <div className="relative h-24 w-24">
                                                        <Image
                                                            src={ClipAndSpacer}
                                                            alt="Promo"
                                                            fill
                                                            className="object-cover rounded-lg"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Section - Featured Image */}
                                        <div className="flex flex-col items-center justify-between p-6 bg-gradient-to-r from-primary/10 to-primary/20 rounded-lg">
                                            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                                                <Image
                                                    src={ClipAndSpacer}
                                                    alt="Charms Collection"
                                                    fill
                                                    className="object-cover transition-all duration-300 hover:scale-105"
                                                />
                                            </div>
                                            <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                                                Explore our exquisite collection of charms, crafted to perfection.
                                            </p>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Documentation
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
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
