"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Countdown() {
    // Target date: October 16, 2026 (Maha Panchami)
    const targetDate = new Date('2026-10-16T00:00:00').getTime()

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        const updateCountdown = () => {
            const now = new Date().getTime()
            const difference = targetDate - now

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                })
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }

        updateCountdown()
        const interval = setInterval(updateCountdown, 1000)

        return () => clearInterval(interval)
    }, [targetDate])

    // Prevent hydration mismatch by optionally not showing the time until mounted,
    // but returning the layout first.
    if (!isMounted) {
        return (
            <section className="bg-puja-dark py-16 border-y border-puja-gold/20 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-0">
                        {/* Placeholder space to prevent layout shift */}
                        <div className="h-[120px]"></div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="bg-puja-dark py-16 border-y border-puja-gold/20 relative overflow-hidden">
            {/* Background embellishments */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-3xl md:text-5xl text-puja-ivory font-bold mb-4 drop-shadow-md"
                    >
                        Waiting for Maa Durga
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-puja-gold/90 font-sans tracking-wide font-medium"
                    >
                        The countdown to Maha Panchami has begun
                    </motion.p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {[
                        { label: 'Days', value: timeLeft.days },
                        { label: 'Hours', value: timeLeft.hours },
                        { label: 'Minutes', value: timeLeft.minutes },
                        { label: 'Seconds', value: timeLeft.seconds },
                    ].map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 min-w-[100px] md:min-w-[140px] text-center shadow-2xl relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="font-heading text-4xl md:text-6xl text-[#FFD700] text-puja-gold font-bold tabular-nums tracking-tighter mb-2 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                                {item.value.toString().padStart(2, '0')}
                            </div>
                            <div className="font-sans text-xs md:text-sm text-white/70 uppercase tracking-widest font-semibold">
                                {item.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
