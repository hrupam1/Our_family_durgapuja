"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const slides = [
    {
        id: 1,
        image: '/slider/2020.jpg',
        caption: '2020',
    },
    {
        id: 2,
        image: '/slider/2021.jpg',
        caption: '2021',
    },
    {
        id: 3,
        image: '/slider/2022.jpg',
        caption: '2022',
    },
    {
        id: 4,
        image: '/slider/2023.jpg',
        caption: '2023',
    },
    {
        id: 5,
        image: '/slider/2024.jpg',
        caption: '2024',
    },
    {
        id: 6,
        image: '/slider/2025.jpg',
        caption: '2025',
    }
]

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    // Framer motion variants for letter stagger
    const containerVars = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.2 }
        },
        exit: { opacity: 0 }
    }

    const letterVars = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }

    return (
        <section className="relative w-full h-[80vh] md:h-screen bg-gradient-to-br from-[#D9252B] to-[#FF7A7F] overflow-hidden">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                    {/* Ambient Blurred Background */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <Image
                            src={slides[currentIndex].image}
                            alt=""
                            fill
                            className="object-cover w-full h-full scale-125 blur-3xl opacity-80 mix-blend-screen"
                            quality={10}
                        />
                        <div className="absolute inset-0 bg-[#A41B1F] opacity-30" />
                    </div>

                    {/* Main Image */}
                    <div className="absolute inset-x-0 inset-y-8 md:inset-x-8 md:inset-y-0 z-10">
                        <Image
                            src={slides[currentIndex].image}
                            alt={slides[currentIndex].caption}
                            fill
                            className="object-contain w-full h-full"
                            priority
                            quality={100}
                        />
                        {/* Subtle bottom gradient only for text contrast if needed */}
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-puja-dark/50 to-transparent z-10 pointer-events-none" />
                    </div>

                    {/* Text Overlay */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                        <motion.h2
                            className="font-heading text-6xl md:text-8xl lg:text-9xl text-puja-gold text-glow font-bold text-center px-6 drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] flex flex-wrap justify-center overflow-hidden tracking-wider"
                            variants={containerVars}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {slides[currentIndex].caption.split('').map((char, index) => (
                                <motion.span
                                    key={`${currentIndex}-${index}`}
                                    variants={letterVars}
                                    className="inline-block"
                                >
                                    {char === ' ' ? '\u00A0' : char}
                                </motion.span>
                            ))}
                        </motion.h2>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Progress Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className="p-3 outline-none"
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <div
                            className={`transition-all duration-500 rounded-full ${index === currentIndex
                                ? 'w-8 h-2 bg-puja-gold'
                                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                                }`}
                        />
                    </button>
                ))}
            </div>
        </section>
    )
}
