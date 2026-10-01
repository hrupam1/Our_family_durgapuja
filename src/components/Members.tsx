"use client"

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const memberCategories = [
    { id: 'all-members', name: 'All Members', description: 'Meet all the wonderful members of our family who make this Puja possible.' },
    { id: 'puja-management', name: 'Puja Management', description: 'The dedicated team responsible for organizing and managing the core Puja activities.' },
    { id: 'theme-design', name: 'Theme and Design', description: 'The creative minds behind our beautiful pandal, decorations, and artistic vision.' },
    { id: 'game-entertainment', name: 'Game and Entertainment', description: 'The energetic group planning fun activities, cultural programs, and games for everyone.' },
]

export default function Members() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })
    const [activeTab, setActiveTab] = useState(memberCategories[0].id)

    return (
        <section id="members" ref={containerRef} className="min-h-screen pt-32 pb-24 px-6 relative flex flex-col items-center">
            <div className="max-w-6xl mx-auto relative z-10 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16"
                >
                    <h1 className="font-heading text-5xl md:text-7xl text-puja-ivory font-bold mb-6 text-glow">
                        Our <span className="text-puja-gold">Members</span>
                    </h1>
                    <p className="font-sans text-xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
                        The heartbeat of our Durga Puja. Explore the different teams and family members who come together to create magic every year.
                    </p>
                </motion.div>

                {/* Tabs Navigation */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-wrap justify-center gap-3 mb-16"
                >
                    {memberCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={cn(
                                "px-6 py-3 rounded-full text-sm sm:text-base font-sans tracking-wide transition-all duration-300 border",
                                activeTab === category.id
                                    ? "bg-puja-gold text-puja-dark border-puja-gold font-semibold shadow-[0_0_15px_rgba(255,215,0,0.4)]"
                                    : "bg-white/5 text-puja-ivory border-white/10 hover:bg-white/10 hover:border-white/30"
                            )}
                        >
                            {category.name}
                        </button>
                    ))}
                </motion.div>

                {/* Tab Content Area */}
                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {memberCategories.map((category) => (
                            activeTab === category.id && (
                                <motion.div
                                    key={category.id}
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="absolute inset-0 w-full"
                                >
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                                        <h2 className="text-3xl md:text-4xl font-heading text-puja-gold mb-4">
                                            {category.name}
                                        </h2>
                                        <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
                                            {category.description}
                                        </p>
                                        
                                        {/* Placeholder for Member Cards */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                                <div 
                                                    key={i} 
                                                    className="bg-puja-dark/50 border border-white/10 rounded-xl p-6 flex flex-col items-center hover:border-puja-gold/50 transition-colors group"
                                                >
                                                    <div className="w-24 h-24 rounded-full bg-white/10 mb-4 border-2 border-transparent group-hover:border-puja-gold transition-colors overflow-hidden relative">
                                                        {/* Avatar Placeholder */}
                                                        <div className="absolute inset-0 bg-gradient-to-br from-puja-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                    <h3 className="text-xl font-heading text-puja-ivory mb-1">Member Name</h3>
                                                    <p className="text-sm text-puja-gold/80 font-sans">Role / Position</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
