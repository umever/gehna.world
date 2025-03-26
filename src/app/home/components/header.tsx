"use client"
import Link from "next/link";
import Image, { StaticImageData } from 'next/image'
import * as React from "react"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
    MdOutlineShoppingBag,
    MdFavoriteBorder,
    MdOutlinePersonOutline,
    MdOutlineMenu,
    MdOutlineClose
} from "react-icons/md";
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
const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

const ListItem = React.forwardRef<
    React.ComponentRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [selectedSection, setSelectedSection] = React.useState<"Categories" | "Prices">("Categories");

    const toggleMenu = React.useCallback(() => setIsMenuOpen(prev => !prev), []);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setIsMenuOpen(false);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [setIsMenuOpen]);

    return (
        <div className="Relative top-0 w-full z-50 shadow-xs">
            <div className="p-4 max-w-(--breakpoint-2xl) mx-auto">
                <header className="flex items-center justify-between">
                    {/* Left: Menu Button + Logo */}
                    <div className="flex items-center gap-4">
                        <button
                            className="lg:hidden"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <MdOutlineClose size={24} /> : <MdOutlineMenu size={24} />}
                        </button>
                        <Link href="/" className="text-2xl font-bold">
                            Gehna.World
                        </Link>
                    </div>

                    {/* Right: User Actions */}
                    <div className="flex items-center gap-4">
                        {[
                            { href: "/account", icon: <MdOutlinePersonOutline size={24} />, label: "Account" },
                            { href: "/wishlist", icon: <MdFavoriteBorder size={24} />, label: "Wishlist" },
                            { href: "/cart", icon: <MdOutlineShoppingBag size={24} />, label: "Bag" },
                        ].map(({ href, icon, label }) => (
                            <Link key={href} href={href} className="flex flex-col items-center hover:text-gray-600 ">
                                {icon}
                                <span className="text-s">{label}</span>
                            </Link>
                        ))}
                        <ThemeModeToggle />
                    </div>
                </header>

                {/* Categories Navigation Menu*/}
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

                {/* Mobile Menu */}
                <>
                    {/* Overlay */}
                    <div
                        className={`
                            fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300
                            ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
                            lg:hidden z-40
                        `}
                        onClick={toggleMenu}
                    />

                    {/* Sliding Menu */}
                    <div className={`
                        fixed top-0 left-0 h-full w-64 bg-white shadow-lg
                        transform transition-transform duration-300 ease-in-out
                        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
                        lg:hidden z-50
                    `}>
                        <nav className="flex flex-col gap-4 p-4">
                            <button
                                className="self-end p-2"
                                onClick={toggleMenu}
                                aria-label="Close Menu"
                            >
                                <MdOutlineClose size={24} />
                            </button>

                            {["Contemporary", "Gold", "Silver", "Diamond", "All Jewellery"].map(category => (
                                <Link
                                    key={category}
                                    href={`/${category.toLowerCase()}`}
                                    className="p-2 hover:bg-gray-100 rounded"
                                >
                                    {category}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </>
            </div>
        </div >
    );
}
