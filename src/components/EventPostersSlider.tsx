"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const slides = [
    {
        id: 1,
        image: '/events-posters/main-poster.png',
        caption: 'Durga Puja 2026',
    },
    {
        id: 2,
        image: '/events-posters/children.png',
        caption: 'Children Events',
    },
    {
        id: 3,
        image: '/events-posters/clothing-service.png',
        caption: 'Clothing Service',
    }
]

export default function EventPostersSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative w-full h-[80vh] md:h-[90vh] bg-gradient-to-b from-puja-dark via-[#1a0505] to-puja-dark overflow-hidden py-12 flex flex-col justify-center border-y border-white/5">
            
            <div className="text-center mb-8 relative z-30 shrink-0">
                <h2 className="font-heading text-4xl md:text-5xl text-puja-gold font-bold text-glow">Durga Puja 2026 Events</h2>
                <div className="w-24 h-1 bg-puja-red mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
            </div>

            <div className="relative w-full flex-1 max-w-3xl mx-auto px-4 md:px-8 pb-16">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        className="absolute inset-0 px-4 md:px-8 pb-16"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(217,37,43,0.1)] border border-puja-gold/20 bg-black/60 backdrop-blur-sm">
                            <Image
                                src={slides[currentIndex].image}
                                alt={slides[currentIndex].caption}
                                fill
                                sizes="(max-width: 768px) 100vw, 800px"
                                className="object-contain p-2"
                                priority
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className="p-3 outline-none group"
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <div
                            className={`transition-all duration-500 rounded-full ${index === currentIndex
                                ? 'w-10 h-2 bg-puja-gold shadow-[0_0_10px_rgba(255,215,0,0.8)]'
                                : 'w-2 h-2 bg-white/30 group-hover:bg-white/60'
                                }`}
                        />
                    </button>
                ))}
            </div>
        </section>
    )
}
