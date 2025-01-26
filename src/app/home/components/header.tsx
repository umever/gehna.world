import Link from "next/link";
import { useState } from "react";
import { MdOutlineShoppingBag , MdFavoriteBorder , MdOutlinePerson , MdOutlineMenu, MdOutlineClose  } from "react-icons/md";

export default function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 w-full bg-white z-50 shadow-sm">
            <div className="p-4 max-w-screen-2xl mx-auto">
                {/* Top Header */}
                <header className="flex items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <MdOutlineClose size={24} /> : <MdOutlineMenu size={24} />}
                    </button>

                    {/* Logo */}
                    <Link 
                        href="https://gehna.world" 
                        className="text-2xl font-bold"
                    >
                        Gehna.World
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex gap-8 font-medium">
                        <Link href="/account" className="flex flex-col items-center gap-1 hover:text-gray-600">
                            <MdOutlinePerson size={20} />
                            <span className="text-sm mt-0" >Account</span>
                        </Link>
                        <Link href="/wishlist" className="flex flex-col items-center gap-1 hover:text-gray-600">
                            <MdFavoriteBorder  size={20} />
                            <span className="text-sm mt-0" >Wishlist</span>
                        </Link>
                        <Link href="/cart" className="flex flex-col items-center gap-1 hover:text-gray-600">
                            <MdOutlineShoppingBag  size={20} />
                            <span className="text-sm mt-0" >Cart</span>
                        </Link>
                    </nav>
                </header>

                {/* Categories Navigation */}
                <nav className="hidden lg:flex justify-center gap-12 py-4 font-medium">
                    <Link href="/contemporary" className="hover:text-gray-600">Contemporary</Link>
                    <Link href="/gold" className="hover:text-gray-600">Gold</Link>
                    <Link href="/silver" className="hover:text-gray-600">Silver</Link>
                    <Link href="/diamond" className="hover:text-gray-600">Diamond</Link>
                    <Link href="/all" className="hover:text-gray-600">All Jewellery</Link>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden">
                        <nav className="flex flex-col gap-4 py-4 px-2">
                            <Link href="/account" className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded">
                                <MdOutlinePerson size={20} />
                                <span>Account</span>
                            </Link>
                            <Link href="/wishlist" className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded">
                                <MdFavoriteBorder  size={20} />
                                <span>Wishlist</span>
                            </Link>
                            <Link href="/cart" className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded">
                                <MdOutlineShoppingBag  size={20} />
                                <span>Cart</span>
                            </Link>
                            <hr className="my-2" />
                            <Link href="/contemporary" className="p-2 hover:bg-gray-100 rounded">Contemporary</Link>
                            <Link href="/gold" className="p-2 hover:bg-gray-100 rounded">Gold</Link>
                            <Link href="/silver" className="p-2 hover:bg-gray-100 rounded">Silver</Link>
                            <Link href="/diamond" className="p-2 hover:bg-gray-100 rounded">Diamond</Link>
                            <Link href="/all" className="p-2 hover:bg-gray-100 rounded">All Jewellery</Link>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
}