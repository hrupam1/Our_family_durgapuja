"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AboutUs() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })

    return (
        <section id="about-us" ref={containerRef} className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 relative">
            <div className="max-w-4xl mx-auto relative z-10 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="font-heading text-5xl md:text-7xl text-puja-ivory font-bold mb-8 text-glow">
                        About <span className="text-puja-gold">Us</span>
                    </h1>

                    <div className="space-y-6 text-left">
                        <p className="font-sans text-xl text-white/80 leading-relaxed font-light">
                            Hello everyone,
                        </p>

                        <p className="font-sans text-xl text-white/80 leading-relaxed font-light">
                            This Durga Puja is lovingly organized and celebrated by the <span className="font-semibold text-puja-gold tracking-wide">Haldar Family</span>. Our family belongs to <span className="text-white">Radhakantapur village, South 24 Parganas, West Bengal</span>.
                        </p>

                        <p className="font-sans text-xl text-white/80 leading-relaxed font-light">
                            This puja holds a very special place in our hearts, as it is dedicated to the cherished dream of our late grandfather, <span className="font-semibold text-puja-gold">Sadananda Haldar</span>. His wish was to one day see Durga Puja celebrated on this land with devotion and unity.
                        </p>

                        <p className="font-sans text-xl text-white/80 leading-relaxed font-light">
                            Today, with the blessings of Maa Durga, we are honored to fulfill that dream and continue this tradition with love, faith, and togetherness.
                        </p>


                    </div>
                </motion.div>
            </div>
        </section>
    )
}
