"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMemoriesOpen, setIsMemoriesOpen] = useState(false)
    const pathname = usePathname()

    const years = ['2026', '2025', '2024', '2023', '2022', '2021', '2020']

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Our Story', href: '/our-story' },
        { name: 'About Us', href: '/about-us' },
        { name: 'Events', href: '/events' },
    ]

    const NavLink = ({ item, isMobile = false }: { item: any, isMobile?: boolean }) => {
        const isActive = pathname === item.href && !item.isScroll

        return (
            <Link
                href={item.href}
                className={cn(
                    "relative group font-sans text-sm tracking-wide transition-colors",
                    isActive ? "text-puja-gold" : "text-puja-ivory hover:text-puja-gold",
                    isMobile ? "block w-full py-4 text-xl border-b border-white/10" : "px-3 py-2"
                )}
                onClick={() => isMobile && setIsMobileMenuOpen(false)}
            >
                {item.name}
                {!isMobile && (
                    <span className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-puja-gold transition-all duration-300 ease-out",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                )}
            </Link>
        )
    }

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out",
                isScrolled
                    ? "bg-puja-dark/90 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
                    : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="group flex items-center gap-3 z-50 relative">
                    <div className="relative w-14 h-14 rounded-full border-2 border-puja-gold overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,215,0,0.3)] bg-white flex items-center justify-center p-1">
                        <Image
                            src="/logo.png"
                            alt="Durga Puja Logo"
                            fill
                            sizes="56px"
                            className="object-contain p-[2px]"
                        />
                    </div>
                    <span className="font-heading font-semibold text-xl tracking-wider text-puja-ivory hidden sm:block">Our Puja</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((item) => (
                        <NavLink key={item.name} item={item} />
                    ))}

                    {/* Memories Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsMemoriesOpen(true)}
                        onMouseLeave={() => setIsMemoriesOpen(false)}
                    >
                        <button className={cn(
                            "flex items-center gap-1 px-3 py-2 text-sm tracking-wide font-sans transition-colors hover:text-puja-gold",
                            pathname.includes('/memories') ? "text-puja-gold" : "text-puja-ivory"
                        )}>
                            Memories
                            <ChevronDown className={cn(
                                "w-4 h-4 transition-transform duration-300",
                                isMemoriesOpen ? "rotate-180" : ""
                            )} />
                        </button>
                        <span className={cn(
                            "absolute -bottom-1 left-0 h-0.5 bg-puja-gold transition-all duration-300 ease-out",
                            pathname.includes('/memories') ? "w-full" : "w-0 group-hover:w-full"
                        )} />

                        <AnimatePresence>
                            {isMemoriesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-full right-0 mt-4 w-48 bg-puja-dark/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden py-2"
                                >
                                    {years.map((year) => (
                                        <Link
                                            key={year}
                                            href={`/memories/${year}`}
                                            className="block px-4 py-2 text-sm text-puja-ivory hover:text-puja-dark hover:bg-puja-gold transition-colors"
                                            onClick={() => setIsMemoriesOpen(false)}
                                        >
                                            {year} Celebration
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden relative z-50 text-puja-ivory min-w-[44px] min-h-[44px] flex items-center justify-center p-2"
                    aria-label="Toggle mobile menu"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
                        animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
                        exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 min-h-screen bg-puja-dark/95 backdrop-blur-xl z-40 flex flex-col pt-24 px-6 overflow-y-auto"
                    >
                        {navLinks.map((item) => (
                            <NavLink key={item.name} item={item} isMobile />
                        ))}

                        <div className="py-4 border-b border-white/10">
                            <div className="text-xl text-puja-ivory mb-4 font-sans tracking-wide">Memories</div>
                            <div className="grid grid-cols-2 gap-3 pl-4">
                                {years.map((year) => (
                                    <Link
                                        key={year}
                                        href={`/memories/${year}`}
                                        className="text-lg text-white/70 hover:text-puja-gold transition-colors flex items-center gap-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-puja-red mt-1" />
                                        {year}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto py-8 text-center text-sm text-white/50">
                            © {new Date().getFullYear()} Our Family Durga Puja
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
