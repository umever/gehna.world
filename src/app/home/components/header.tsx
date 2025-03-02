import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { 
  MdOutlineShoppingBag, 
  MdFavoriteBorder, 
  MdOutlinePersonOutline, 
  MdOutlineMenu, 
  MdOutlineClose 
} from "react-icons/md";
import { ThemeModeToggle } from "./theme_mode_toggle";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setIsMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="fixed top-0 w-full bg-white z-50 shadow-sm">
            <div className="p-4 max-w-screen-2xl mx-auto">
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
                            <Link key={href} href={href} className="flex flex-col items-center hover:text-gray-600">
                                {icon}
                                <span className="text-s">{label}</span>
                            </Link>
                        ))}
                        <ThemeModeToggle />
                    </div>
                </header>

                {/* Categories Navigation */}
                <nav className="hidden lg:flex justify-center gap-12 py-4 font-medium">
                    {["Contemporary", "Gold", "Silver", "Diamond", "All Jewellery"].map(category => (
                        <Link key={category} href={`/${category.toLowerCase()}`} className="hover:text-gray-600">
                            {category}
                        </Link>
                    ))}
                </nav>

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
        </div>
    );
}
