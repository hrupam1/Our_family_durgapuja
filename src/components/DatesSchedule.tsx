"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Sunrise, Heart, Star, CloudSun, Sunset, Sun, Clock } from 'lucide-react' // Added Clock import

const scheduleData = [
    { day: "Mahalaya", tithi: "Prathama / Amavasya", date: "October 10, 2026 (Saturday)", icon: Sunrise },
    { day: "Maha Panchami", tithi: "Panchami", date: "October 15, 2026 (Thursday)", icon: Star },
    { day: "Maha Shashti", tithi: "Shashti", date: "October 16, 2026 (Friday)", icon: CloudSun },
    { day: "Maha Saptami", tithi: "Saptami", date: "October 17 & 18, 2026 (Sat & Sun)", icon: Sun },
    { day: "Maha Ashtami", tithi: "Ashtami", date: "October 19, 2026 (Monday)", icon: Sparkles },
    { day: "Maha Navami", tithi: "Navami", date: "October 20, 2026 (Tuesday)", icon: Heart },
    { day: "Vijaya Dashami", tithi: "Dashami", date: "October 21, 2026 (Wednesday)", icon: Sunset },
]

export default function DatesSchedule() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    }

    return (
        <section ref={containerRef} className="py-24 bg-gradient-to-br from-[#D9252B] to-[#FF7A7F] relative border-t border-b border-white/5 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-4xl md:text-5xl text-puja-ivory mb-4 font-bold">
                        Durga Puja 2026 Schedule
                    </h2>
                    <p className="font-sans text-puja-gold/90 max-w-2xl mx-auto font-medium">
                        Join us as we celebrate the triumph of good over evil.
                        Mark your calendars for these auspicious days.
                    </p>
                </motion.div>

                {/* Horizontal Scrolling Container for Mobile, Grid for Desktop */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex overflow-x-auto pb-8 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 no-scrollbar"
                >
                    {scheduleData.map((item, index) => {
                        return (
                            <motion.div
                                key={item.day}
                                variants={cardVariants}
                                className="min-w-[300px] md:min-w-0 flex-shrink-0 snap-start p-8 rounded-3xl backdrop-blur-md bg-white/40 border border-white/60
                                transition-all duration-300 hover:-translate-y-4 hover:bg-white/60 group shadow-xl"
                            >
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center mb-6 text-[#d14b64] group-hover:scale-110 group-hover:bg-[#d14b64] group-hover:text-white transition-all duration-300">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold text-puja-dark mb-1">
                                        {item.day}
                                    </h3>
                                    <p className="text-sm font-sans text-puja-dark/70 tracking-wider mb-4 uppercase font-bold">
                                        {item.tithi}
                                    </p>
                                    <div className="pt-4 border-t border-black/10">
                                        <p className="font-sans text-puja-dark/90 font-semibold">
                                            {item.date}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section >
    )
}
