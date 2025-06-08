"use client"
import Link from "next/link";
import Image, { StaticImageData } from 'next/image'
import * as React from "react"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import ClipAndSpacer from "../../../../public/clip_n_spacer.webp"

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
            title: "Letter Charms",
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
    ],
    "Materials": [
        {
            image: ClipAndSpacer,
            title: "Gold",
            href: "/docs/primitives/alert-dialog"
        },
        {
            image: ClipAndSpacer,
            title: "Rose Gold",
            href: "/docs/primitives/hover-card"
        },
        {
            image: ClipAndSpacer,
            title: "Gold - Plated",
            href: "/docs/primitives/alert-dialog"
        },
        {
            image: ClipAndSpacer,
            title: "Rose Gold - Plated",
            href: "/docs/primitives/hover-card"
        },
        {
            image: ClipAndSpacer,
            title: "Sterling Silver",
            href: "/docs/primitives/progress"
        }
    ]
}

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

export default function CategoryNavMenu() {
    const [selectedSection, setSelectedSection] = React.useState<"Categories" | "Prices" | "Materials">("Categories");

    return (
        <div className="hidden w-full flex-col justify-center gap-6 lg:flex">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/shop/discover"><NavigationMenuTrigger>Discover</NavigationMenuTrigger></Link>
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
                                <ListItem href="/shop/discover/new" title="New">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                                <ListItem href="/shop/discover/featured" title="Featured">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem href="/discover/new" title="Gifts">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                                <ListItem href="/discover/featured" title="Occasions">
                                    How to install dependencies and structure your app.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/shop/charms"><NavigationMenuTrigger>Charms</NavigationMenuTrigger></Link>
                        <NavigationMenuContent>
                            <div className="grid lg:grid-cols-[150px_1fr_240px] xl:grid-cols-[200px_1fr_320px] gap-3 p-4 lg:w-[950px] lg:min-h-[400px] xl:w-[1200px] xl:min-h-[450px] rounded-lg">
                                {/* Left Section - Categories */}
                                <div className="border-r p-2">
                                    <div className="flex flex-col gap-2">
                                        {Object.keys(nav_charms).map((section) => (
                                            <button
                                                key={section}
                                                onClick={() => setSelectedSection(section as "Categories" | "Prices" | "Materials")}
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
                                    {/* Categories Grid */}
                                    <div className={selectedSection === "Categories" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Categories"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>

                                    {/* Prices Grid */}
                                    <div className={selectedSection === "Prices" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Prices"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>

                                    {/* Materials Grid */}
                                    <div className={selectedSection === "Materials" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Materials"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
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
                        <Link href="/charms"><NavigationMenuTrigger>Neclaces</NavigationMenuTrigger></Link>
                        <NavigationMenuContent>
                            <div className="grid lg:grid-cols-[150px_1fr_240px] xl:grid-cols-[200px_1fr_320px] gap-3 p-4 lg:w-[950px] lg:min-h-[400px] xl:w-[1200px] xl:min-h-[450px] rounded-lg">
                                {/* Left Section - Categories */}
                                <div className="border-r p-2">
                                    <div className="flex flex-col gap-2">
                                        {Object.keys(nav_charms).map((section) => (
                                            <button
                                                key={section}
                                                onClick={() => setSelectedSection(section as "Categories" | "Prices" | "Materials")}
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
                                    {/* Categories Grid */}
                                    <div className={selectedSection === "Categories" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Categories"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>

                                    {/* Prices Grid */}
                                    <div className={selectedSection === "Prices" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Prices"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>

                                    {/* Materials Grid */}
                                    <div className={selectedSection === "Materials" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Materials"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
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
                        <Link href="/charms"><NavigationMenuTrigger>Bracelets</NavigationMenuTrigger></Link>
                        <NavigationMenuContent>
                            <div className="grid lg:grid-cols-[150px_1fr_240px] xl:grid-cols-[200px_1fr_320px] gap-3 p-4 lg:w-[950px] lg:min-h-[400px] xl:w-[1200px] xl:min-h-[450px] rounded-lg">
                                {/* Left Section - Categories */}
                                <div className="border-r p-2">
                                    <div className="flex flex-col gap-2">
                                        {Object.keys(nav_charms).map((section) => (
                                            <button
                                                key={section}
                                                onClick={() => setSelectedSection(section as "Categories" | "Prices" | "Materials")}
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
                                    {/* Categories Grid */}
                                    <div className={selectedSection === "Categories" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Categories"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>

                                    {/* Prices Grid */}
                                    <div className={selectedSection === "Prices" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Prices"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>

                                    {/* Materials Grid */}
                                    <div className={selectedSection === "Materials" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Materials"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
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
                        <Link href="/charms"><NavigationMenuTrigger>Rings</NavigationMenuTrigger></Link>
                        <NavigationMenuContent>
                            <div className="grid lg:grid-cols-[150px_1fr_240px] xl:grid-cols-[200px_1fr_320px] gap-3 p-4 lg:w-[950px] lg:min-h-[400px] xl:w-[1200px] xl:min-h-[450px] rounded-lg">
                                {/* Left Section - Categories */}
                                <div className="border-r p-2">
                                    <div className="flex flex-col gap-2">
                                        {Object.keys(nav_charms).map((section) => (
                                            <button
                                                key={section}
                                                onClick={() => setSelectedSection(section as "Categories" | "Prices" | "Materials")}
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
                                    {/* Categories Grid */}
                                    <div className={selectedSection === "Categories" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Categories"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>

                                    {/* Prices Grid */}
                                    <div className={selectedSection === "Prices" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Prices"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>

                                    {/* Materials Grid */}
                                    <div className={selectedSection === "Materials" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Materials"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
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
                        <Link href="/charms"><NavigationMenuTrigger>Earrings</NavigationMenuTrigger></Link>
                        <NavigationMenuContent>
                            <div className="grid lg:grid-cols-[150px_1fr_240px] xl:grid-cols-[200px_1fr_320px] gap-3 p-4 lg:w-[950px] lg:min-h-[400px] xl:w-[1200px] xl:min-h-[450px] rounded-lg">
                                {/* Left Section - Categories */}
                                <div className="border-r p-2">
                                    <div className="flex flex-col gap-2">
                                        {Object.keys(nav_charms).map((section) => (
                                            <button
                                                key={section}
                                                onClick={() => setSelectedSection(section as "Categories" | "Prices" | "Materials")}
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
                                    {/* Categories Grid */}
                                    <div className={selectedSection === "Categories" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Categories"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>

                                    {/* Prices Grid */}
                                    <div className={selectedSection === "Prices" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Prices"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>

                                    {/* Materials Grid */}
                                    <div className={selectedSection === "Materials" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Materials"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
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
                        <Link href="/charms"><NavigationMenuTrigger>Diamonds</NavigationMenuTrigger></Link>
                        <NavigationMenuContent>
                            <div className="grid lg:grid-cols-[150px_1fr_240px] xl:grid-cols-[200px_1fr_320px] gap-3 p-4 lg:w-[950px] lg:min-h-[400px] xl:w-[1200px] xl:min-h-[450px] rounded-lg">
                                {/* Left Section - Categories */}
                                <div className="border-r p-2">
                                    <div className="flex flex-col gap-2">
                                        {Object.keys(nav_charms).map((section) => (
                                            <button
                                                key={section}
                                                onClick={() => setSelectedSection(section as "Categories" | "Prices" | "Materials")}
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
                                    {/* Categories Grid */}
                                    <div className={selectedSection === "Categories" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Categories"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>

                                    {/* Prices Grid */}
                                    <div className={selectedSection === "Prices" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Prices"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>

                                    {/* Materials Grid */}
                                    <div className={selectedSection === "Materials" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Materials"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
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
                        <Link href="/charms"><NavigationMenuTrigger>Engravings</NavigationMenuTrigger></Link>
                        <NavigationMenuContent>
                            <div className="grid lg:grid-cols-[150px_1fr_240px] xl:grid-cols-[200px_1fr_320px] gap-3 p-4 lg:w-[950px] lg:min-h-[400px] xl:w-[1200px] xl:min-h-[450px] rounded-lg">
                                {/* Left Section - Categories */}
                                <div className="border-r p-2">
                                    <div className="flex flex-col gap-2">
                                        {Object.keys(nav_charms).map((section) => (
                                            <button
                                                key={section}
                                                onClick={() => setSelectedSection(section as "Categories" | "Prices" | "Materials")}
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
                                    {/* Categories Grid */}
                                    <div className={selectedSection === "Categories" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Categories"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>

                                    {/* Prices Grid */}
                                    <div className={selectedSection === "Prices" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Prices"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>

                                    {/* Materials Grid */}
                                    <div className={selectedSection === "Materials" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 content-start" : "hidden"}>
                                        {nav_charms["Materials"].map(({ image, title, href }) => (
                                            <NavigationMenuLink asChild key={title}>
                                                <Link href={href} className="group flex items-center gap-3 p-2 rounded-md transition-colors duration-200">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
                                                </Link>
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
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
