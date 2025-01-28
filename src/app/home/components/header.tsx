import Link from "next/link";
import { useState } from "react";
import { MdOutlineShoppingBag, MdFavoriteBorder, MdOutlinePersonOutline, MdOutlineMenu, MdOutlineClose } from "react-icons/md";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 w-full bg-white z-50 shadow-sm">
            <div className="p-4 max-w-screen-2xl mx-auto">
                <header className="flex items-center justify-between">
                    {/* Left: Menu Button + Logo */}
                    <div className="flex items-center gap-4">
                        <button 
                            className="lg:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <MdOutlineClose size={24} /> : <MdOutlineMenu size={24} />}
                        </button>
                        <Link href="/" className="text-2xl font-bold">
                            Gehna.World
                        </Link>
                    </div>

                    {/* Right: User Actions */}
                    <div className="flex items-center gap-4">
                        <Link href="/account" className="flex flex-col items-center hover:text-gray-600">
                            <MdOutlinePersonOutline size={24} />
                            <span className="text-s">Account</span>
                        </Link>
                        <Link href="/wishlist" className="flex flex-col items-center hover:text-gray-600">
                            <MdFavoriteBorder size={24} />
                            <span className="text-s">Wishlist</span>
                        </Link>
                        <Link href="/cart" className="flex flex-col items-center hover:text-gray-600">
                            <MdOutlineShoppingBag size={24} />
                            <span className="text-s">Bag</span>
                        </Link>
                    </div>
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
                <>
                    {/* Overlay */}
                    <div 
                        className={`
                            fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300
                            ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                            lg:hidden z-40
                        `}
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Sliding Menu */}
                    <div className={`
                        fixed top-0 left-0 h-full w-64 bg-white shadow-lg
                        transform transition-transform duration-300 ease-in-out
                        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                        lg:hidden z-50
                    `}>
                        <nav className="flex flex-col gap-4 p-4">
                            <button 
                                className="self-end p-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <MdOutlineClose size={24} />
                            </button>
                            
                            <Link href="/contemporary" className="p-2 hover:bg-gray-100 rounded">Contemporary</Link>
                            <Link href="/gold" className="p-2 hover:bg-gray-100 rounded">Gold</Link>
                            <Link href="/silver" className="p-2 hover:bg-gray-100 rounded">Silver</Link>
                            <Link href="/diamond" className="p-2 hover:bg-gray-100 rounded">Diamond</Link>
                            <Link href="/all" className="p-2 hover:bg-gray-100 rounded">All Jewellery</Link>
                        </nav>
                    </div>
                </>
            </div>
        </div>
    );
}