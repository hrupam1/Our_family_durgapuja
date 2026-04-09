"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

// Register ScrollTrigger inside component if necessary, but it's already registered in SmoothScrolling.
// Still good practice in case it gets rendered independently in some context.
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const bgRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("all", () => {
            // 1. Text Animation Word-by-Word
            const titleWords = titleRef.current?.querySelectorAll('.word')
            if (titleWords) {
                gsap.fromTo(titleWords,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.15,
                        duration: 1,
                        ease: "power3.out",
                        delay: 0.2
                    }
                )
            }

            // 2. Subtitle Fade In
            if (subtitleRef.current) {
                gsap.fromTo(subtitleRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, delay: 1, ease: "power2.out" }
                )
            }

            // 3. CTA Buttons Slide Up
            if (ctaRef.current) {
                const buttons = ctaRef.current.children
                gsap.fromTo(buttons,
                    { y: 40, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, delay: 1.2, ease: "power2.out" }
                )
            }
        });

        mm.add("(min-width: 768px)", () => {
            // 4. Parallax Background on Scroll (Desktop Only to save mobile CPU/GPU)
            if (bgRef.current && containerRef.current) {
                gsap.to(bgRef.current, {
                    yPercent: 30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    }
                })
            }
        });

        return () => mm.revert()
    }, [])

    const titleText = "Welcome to Our Family Durga Puja"

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background w/ Parallax */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0 h-[130%]"
            >
                {/* Background image from uploaded family photo */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-bg.jpg"
                        alt="Hero Background"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 100vw"
                        className="object-cover object-[center_10%]"
                        quality={80}
                    />
                </div>
                {/* Lighter top-to-bottom gradient so image is visible */}
                <div className="absolute inset-0 bg-gradient-to-b from-puja-dark/40 via-transparent to-puja-dark z-10" />
                {/* Subtle Mandala/Particles overlay simulation, reduced opacity */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-puja-gold/5 via-transparent to-transparent opacity-40 z-20 mix-blend-overlay" />
            </div>

            {/* Content */}
            <div className="relative z-30 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-20">
                <h1
                    ref={titleRef}
                    className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-puja-ivory mb-6 leading-tight flex flex-wrap justify-center overflow-hidden"
                >
                    {titleText.split(' ').map((word, i) => (
                        <span key={i} className="inline-block overflow-hidden pb-2 mr-4 last:mr-0">
                            <span className="word inline-block">{word}</span>
                        </span>
                    ))}
                </h1>

                <p
                    ref={subtitleRef}
                    className="font-sans text-xl md:text-2xl text-white/80 mb-12 max-w-2xl font-light tracking-wide"
                >
                    Celebrating devotion, tradition, and togetherness
                </p>

                <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6">
                    <Link
                        href="/memories"
                        className="group relative px-8 py-4 bg-puja-gold text-puja-dark font-sans font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Explore Memories
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </Link>

                    <Link
                        href="/events"
                        className="group px-8 py-4 border border-puja-gold/50 text-puja-gold font-sans font-semibold rounded-full hover:bg-puja-gold/10 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        View Events
                    </Link>
                </div>
            </div>
        </section>
    )
}
