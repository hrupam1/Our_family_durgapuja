"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

const samagriItems = [
    { title: 'নবপত্রিকা স্নান', slug: 'nabapatrika-snan' },
    { title: 'মহাস্নান দ্রব্যাদি', slug: 'mahasnan-drabyadi' },
    { title: 'নবপত্রিকা বন্ধন দ্রব্য', slug: 'nabapatrika-bandhan-drabya' },
    { title: 'ভোগ', slug: 'bhog' },
    { title: 'নৈবেদ্য', slug: 'naivedya' },
    { title: 'পূজা আরতি', slug: 'puja-aarti' },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

export default function PujaSamagri() {
    return (
        <section className="min-h-screen pt-32 pb-16 px-6 md:px-12 relative overflow-hidden bg-puja-dark flex flex-col items-center justify-center">
            {/* Background embellishments */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-puja-red/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-puja-gold/5 blur-[120px]" />
            </div>

            <div className="max-w-5xl w-full mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-puja-gold mb-6 tracking-wider drop-shadow-sm">
                        পূজা সামগ্রী
                    </h1>
                    <div className="h-1 w-24 bg-puja-red mx-auto rounded-full mb-6 opacity-80" />
                    <p className="text-white/70 font-sans text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Sacred items and offerings required for the various rituals during our Durga Puja celebration.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {samagriItems.map((item, index) => (
                        <Link href={`/puja-samagri/${item.slug}`} key={index} className="block group h-full">
                            <motion.div
                                variants={cardVariants}
                                whileHover={{ scale: 1.02, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                className="h-full relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-puja-gold/30 group-hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-puja-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <h3 className="font-heading text-2xl md:text-3xl text-puja-ivory group-hover:text-puja-gold transition-colors duration-300 relative z-10 leading-tight">
                                    {item.title}
                                </h3>
                                
                                <div className="mt-6 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 relative z-10 text-puja-gold-light font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
                                    View Details
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
