"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, X, Play } from 'lucide-react'

// Dummy images for masonry
const getImages = (year: string) => {
    if (year === '2020') {
        return [
            { id: 1, src: '/puja2020/WhatsApp Image 2021-09-25 at 1.39.14 PM.jpeg' },
            { id: 2, src: '/puja2020/IMG_20201025_002217.jpg' },
            { id: 3, src: '/puja2020/WhatsApp Image 2021-09-25 at 11.15.56 AM.jpeg' },
            { id: 4, src: '/puja2020/IMG_20201028_161232.jpg' },
            { id: 5, src: '/puja2020/WhatsApp Image 2021-09-25 at 1.39.17 PM.jpeg' },
            { id: 6, src: '/puja2020/IMG20201116093411.jpg' },
            { id: 7, src: '/puja2020/WhatsApp Image 2021-09-25 at 1.39.14 PM (1).jpeg' },
        ]
    }
    if (year === '2021') {
        return [
            { id: 1, src: '/puja2021/20879.jpg' },
            { id: 2, src: '/puja2021/20909.jpg' },
            { id: 3, src: '/puja2021/20938.jpg' },
            { id: 4, src: '/puja2021/20977.jpg' },
            { id: 5, src: '/puja2021/21262.jpg' },
            { id: 6, src: '/puja2021/DSC_0073.JPG' },
            { id: 7, src: '/puja2021/DSC_0082.JPG' },
            { id: 8, src: '/puja2021/DSC_0104.JPG' },
            { id: 9, src: '/puja2021/DSC_0105.JPG' },
            { id: 10, src: '/puja2021/DSC_0114.JPG' },
            { id: 11, src: '/puja2021/DSC_0115.JPG' },
            { id: 12, src: '/puja2021/DSC_0117.JPG' },
            { id: 13, src: '/puja2021/DSC_0137.JPG' },
            { id: 14, src: '/puja2021/DSC_0150.JPG' },
            { id: 15, src: '/puja2021/DSC_0158.JPG' },
            { id: 16, src: '/puja2021/DSC_0182.JPG' },
            { id: 17, src: '/puja2021/IMG20210228134756.jpg' },
            { id: 18, src: '/puja2021/IMG20211012213618.jpg' },
            { id: 19, src: '/puja2021/IMG20211012215158.jpg' },
            { id: 20, src: '/puja2021/IMG20211012215208.jpg' },
            { id: 21, src: '/puja2021/IMG20211013113540.jpg' },
            { id: 22, src: '/puja2021/IMG20211013113919.jpg' },
            { id: 23, src: '/puja2021/IMG20211013131605.jpg' },
            { id: 24, src: '/puja2021/IMG20211013132205.jpg' },
            { id: 25, src: '/puja2021/IMG20211013132342.jpg' },
            { id: 26, src: '/puja2021/IMG20211013133137.jpg' },
            { id: 27, src: '/puja2021/IMG20211014154614.jpg' },
            { id: 28, src: '/puja2021/IMG20211014155644.jpg' },
            { id: 29, src: '/puja2021/IMG20211014164951.jpg' },
            { id: 30, src: '/puja2021/IMG20211014190632.jpg' },
            { id: 31, src: '/puja2021/IMG20211014210646.jpg' },
            { id: 32, src: '/puja2021/IMG20211015160154.jpg' },
            { id: 33, src: '/puja2021/IMG20211015161142.jpg' },
            { id: 34, src: '/puja2021/IMG20211015193528.jpg' },
            { id: 35, src: '/puja2021/IMG20211015201451.jpg' },
        ]
    }
    if (year === '2022') {
        return [
            { id: 1, src: '/puja2022/1698482391056.jpg' },
            { id: 2, src: '/puja2022/1698482403328.jpg' },
            { id: 3, src: '/puja2022/1698482409707.jpg' },
            { id: 4, src: '/puja2022/1698482419188.jpg' },
            { id: 5, src: '/puja2022/1698482427990.jpg' },
            { id: 6, src: '/puja2022/1698482436721.jpg' },
            { id: 7, src: '/puja2022/IMG20221001131332.jpg' },
            { id: 8, src: '/puja2022/IMG20221001200203.jpg' },
            { id: 9, src: '/puja2022/IMG20221001211652.jpg' },
            { id: 10, src: '/puja2022/IMG20221003114553.jpg' },
            { id: 11, src: '/puja2022/IMG20221003194059.jpg' },
            { id: 12, src: '/puja2022/IMG20221004164542.jpg' },
            { id: 13, src: '/puja2022/IMG20221004165130.jpg' },
            { id: 14, src: '/puja2022/IMG20221004165323.jpg' },
            { id: 15, src: '/puja2022/IMG20221005113304.jpg' },
            { id: 16, src: '/puja2022/IMG20221005114906.jpg' },
            { id: 17, src: '/puja2022/IMG20221011012005.jpg' },
        ]
    }
    if (year === '2023') {
        return [
            { id: 1, src: '/puja2023/68c56d68ee3743c0b4aed31f94a42f09.jpg' },
            { id: 2, src: '/puja2023/IMG-20231024-WA0000.jpg' },
            { id: 3, src: '/puja2023/IMG-20231024-WA0001.jpg' },
            { id: 4, src: '/puja2023/IMG-20231024-WA0005.jpg' },
            { id: 5, src: '/puja2023/IMG-20231024-WA0006.jpg' },
            { id: 6, src: '/puja2023/IMG-20231024-WA0007.jpg' },
            { id: 7, src: '/puja2023/IMG-20231024-WA0008.jpg' },
            { id: 8, src: '/puja2023/IMG-20231024-WA0009.jpg' },
            { id: 9, src: '/puja2023/IMG-20231024-WA0010.jpg' },
            { id: 10, src: '/puja2023/IMG-20231024-WA0013.jpg' },
            { id: 11, src: '/puja2023/IMG-20231024-WA0014.jpg' },
            { id: 12, src: '/puja2023/IMG-20231024-WA0017.jpg' },
            { id: 13, src: '/puja2023/IMG-20231024-WA0021.jpg' },
            { id: 14, src: '/puja2023/IMG-20231024-WA0022.jpg' },
            { id: 15, src: '/puja2023/IMG-20231024-WA0025.jpg' },
            { id: 16, src: '/puja2023/IMG-20231025-WA0014.jpg' },
            { id: 17, src: '/puja2023/IMG-20231025-WA0015.jpg' },
            { id: 18, src: '/puja2023/IMG-20231028-WA0000.jpg' },
            { id: 19, src: '/puja2023/IMG-20231028-WA0110.jpg' },
            { id: 20, src: '/puja2023/IMG-20231028-WA0102.jpg' },
            { id: 21, src: '/puja2023/IMG-20231028-WA0094.jpg' },
            { id: 22, src: '/puja2023/IMG-20231028-WA0092.jpg' },
            { id: 23, src: '/puja2023/IMG-20231028-WA0080.jpg' },
            { id: 24, src: '/puja2023/IMG-20231028-WA0074.jpg' },
            { id: 25, src: '/puja2023/IMG-20231028-WA0072.jpg' },
            { id: 26, src: '/puja2023/IMG-20231028-WA0056.jpg' },
            { id: 27, src: '/puja2023/IMG-20231028-WA0054.jpg' },
            { id: 28, src: '/puja2023/IMG-20231028-WA0052.jpg' },
            { id: 29, src: '/puja2023/IMG-20231028-WA0051.jpg' },
            { id: 30, src: '/puja2023/IMG-20231028-WA0038.jpg' },
            { id: 31, src: '/puja2023/IMG-20231028-WA0030.jpg' },
            { id: 32, src: '/puja2023/IMG-20231028-WA0016.jpg' },
            { id: 33, src: '/puja2023/IMG_20231021_181246.jpg' },
            { id: 34, src: '/puja2023/IMG_20231021_181254_1.jpg' },
            { id: 35, src: '/puja2023/IMG_20231022_162010.jpg' },
            { id: 36, src: '/puja2023/IMG_20231022_162310.jpg' },
            { id: 37, src: '/puja2023/IMG_20231022_164042.jpg' },
            { id: 38, src: '/puja2023/IMG_20231025_093146.jpg' },
            { id: 39, src: '/puja2023/IMG_20231025_093215_1.jpg' },
            { id: 40, src: '/puja2023/IMG_20231025_093430_1.jpg' },
        ]
    }
    if (year === '2024') {
        return [
            { id: 1, src: '/puja2024/DSC_0922.JPG' },
            { id: 2, src: '/puja2024/DSC_0926.JPG' },
            { id: 3, src: '/puja2024/DSC_0927.JPG' },
            { id: 4, src: '/puja2024/DSC_0935.JPG' },
            { id: 5, src: '/puja2024/DSC_0936.JPG' },
            { id: 6, src: '/puja2024/DSC_0938.JPG' },
            { id: 7, src: '/puja2024/DSC_0944.JPG' },
            { id: 8, src: '/puja2024/DSC_0946.JPG' },
            { id: 9, src: '/puja2024/DSC_0948.JPG' },
            { id: 10, src: '/puja2024/DSC_0950.JPG' },
            { id: 11, src: '/puja2024/DSC_0951.JPG' },
            { id: 12, src: '/puja2024/DSC_0953.JPG' },
            { id: 13, src: '/puja2024/DSC_0963.JPG' },
            { id: 14, src: '/puja2024/DSC_0971.JPG' },
            { id: 15, src: '/puja2024/DSC_0973.JPG' },
            { id: 16, src: '/puja2024/DSC_0976.JPG' },
            { id: 17, src: '/puja2024/DSC_0978.JPG' },
            { id: 18, src: '/puja2024/DSC_0982.JPG' },
            { id: 19, src: '/puja2024/DSC_0986.JPG' },
            { id: 20, src: '/puja2024/DSC_0993.JPG' },
            { id: 21, src: '/puja2024/DSC_0996.JPG' },
            { id: 22, src: '/puja2024/DSC_0998.JPG' },
            { id: 23, src: '/puja2024/DSC_1000.JPG' },
            { id: 24, src: '/puja2024/DSC_1014.JPG' },
            { id: 25, src: '/puja2024/DSC_1022.JPG' },
            { id: 26, src: '/puja2024/DSC_1025.JPG' },
            { id: 27, src: '/puja2024/DSC_1028.JPG' },
            { id: 28, src: '/puja2024/DSC_1029.JPG' },
            { id: 29, src: '/puja2024/DSC_1030.JPG' },
            { id: 30, src: '/puja2024/DSC_1033.JPG' },
            { id: 31, src: '/puja2024/DSC_1034.JPG' },
            { id: 32, src: '/puja2024/DSC_1035.JPG' },
            { id: 33, src: '/puja2024/DSC_1037.JPG' },
            { id: 34, src: '/puja2024/DSC_1048.JPG' },
            { id: 35, src: '/puja2024/DSC_1056.JPG' },
            { id: 36, src: '/puja2024/DSC_1062.JPG' },
            { id: 37, src: '/puja2024/DSC_1065.JPG' },
            { id: 38, src: '/puja2024/DSC_1067.JPG' },
            { id: 39, src: '/puja2024/DSC_1069.JPG' },
            { id: 40, src: '/puja2024/DSC_1098.JPG' },
            { id: 41, src: '/puja2024/DSC_1099.JPG' },
            { id: 42, src: '/puja2024/DSC_1103.JPG' },
            { id: 43, src: '/puja2024/DSC_1105.JPG' },
            { id: 44, src: '/puja2024/DSC_1106.JPG' },
            { id: 45, src: '/puja2024/DSC_1107.JPG' },
            { id: 46, src: '/puja2024/DSC_1112.JPG' },
            { id: 47, src: '/puja2024/DSC_1113.JPG' },
            { id: 48, src: '/puja2024/DSC_1118.JPG' },
            { id: 49, src: '/puja2024/DSC_1120.JPG' },
            { id: 50, src: '/puja2024/DSC_1138.JPG' },
        ]
    }
    if (year === '2025') {
        return [
            { id: 1, src: '/puja2025/0astarting_of_durga.png' },
            { id: 2, src: '/puja2025/1000014566.jpg' },
            { id: 3, src: '/puja2025/1000014579.jpg' },
            { id: 4, src: '/puja2025/1000014590.jpg' },
            { id: 5, src: '/puja2025/1000014598.jpg' },
            { id: 6, src: '/puja2025/1000014626.jpg' },
            { id: 7, src: '/puja2025/1000014838.jpg' },
            { id: 8, src: '/puja2025/1000014843.jpg' },
            { id: 9, src: '/puja2025/1000014972.jpg' },
            { id: 10, src: '/puja2025/1000014987.jpg' },
            { id: 11, src: '/puja2025/1000015003.jpg' },
            { id: 12, src: '/puja2025/1000015019.jpg' },
            { id: 13, src: '/puja2025/1000015025.jpg' },
            { id: 14, src: '/puja2025/1000015028.jpg' },
            { id: 15, src: '/puja2025/1000015034.jpg' },
            { id: 16, src: '/puja2025/1000015043.jpg' },
            { id: 17, src: '/puja2025/1000015046.jpg' },
            { id: 18, src: '/puja2025/1000015049.jpg' },
            { id: 19, src: '/puja2025/1000015055.jpg' },
            { id: 20, src: '/puja2025/1000015058.jpg' },
            { id: 21, src: '/puja2025/1000015061.jpg' },
            { id: 22, src: '/puja2025/1000015064.jpg' },
            { id: 23, src: '/puja2025/1000015067.jpg' },
            { id: 24, src: '/puja2025/1000015078.jpg' },
            { id: 25, src: '/puja2025/1000015105.jpg' },
            { id: 26, src: '/puja2025/1000015106.jpg' },
            { id: 27, src: '/puja2025/1000015114.jpg' },
            { id: 28, src: '/puja2025/1000015146.jpg' },
            { id: 29, src: '/puja2025/1000015148.jpg' },
            { id: 30, src: '/puja2025/1000015188.jpg' },
            { id: 31, src: '/puja2025/1000015194.jpg' },
            { id: 32, src: '/puja2025/1000015218.jpg' },
            { id: 33, src: '/puja2025/1000015305.jpg' },
            { id: 34, src: '/puja2025/1000015326.jpg' },
            { id: 35, src: '/puja2025/1000015377.jpg' },
            { id: 36, src: '/puja2025/1000015395.jpg' },
            { id: 37, src: '/puja2025/1000015397.jpg' },
            { id: 38, src: '/puja2025/1000015403.jpg' },
            { id: 39, src: '/puja2025/1000015405.jpg' },
            { id: 40, src: '/puja2025/1000015413.jpg' },
            { id: 41, src: '/puja2025/1000015417.jpg' },
            { id: 42, src: '/puja2025/1000015439.jpg' },
            { id: 43, src: '/puja2025/1000015445.jpg' },
            { id: 44, src: '/puja2025/1000015461.jpg' },
            { id: 45, src: '/puja2025/1000015469.jpg' },
            { id: 46, src: '/puja2025/1000015475.jpg' },
            { id: 47, src: '/puja2025/1000015477.jpg' },
            { id: 48, src: '/puja2025/1000015480.jpg' },
            { id: 49, src: '/puja2025/1000015485.jpg' },
            { id: 50, src: '/puja2025/1000015489.jpg' },
        ]
    }
    return [
        { id: 1, src: 'https://images.unsplash.com/photo-1541701391482-42173fec72ff?q=80&w=800&auto=format&fit=crop' },
        { id: 2, src: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?q=80&w=800&auto=format&fit=crop' },
        { id: 3, src: 'https://images.unsplash.com/photo-1571408103348-1dbde1fe9b78?q=80&w=800&auto=format&fit=crop' },
        { id: 4, src: 'https://images.unsplash.com/photo-1541701391482-42173fec72ff?q=80&w=800&auto=format&fit=crop' },
        { id: 5, src: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?q=80&w=800&auto=format&fit=crop' },
        { id: 6, src: 'https://images.unsplash.com/photo-1571408103348-1dbde1fe9b78?q=80&w=800&auto=format&fit=crop' },
    ]
}

export default function YearMemoriesPage() {
    const params = useParams()
    const year = params.year as string
    const isUpcoming = year === '2026'
    const hideBanner = year === '2020' || year === '2021' || year === '2022' || year === '2023' || year === '2024' || year === '2025'
    const images = getImages(year)

    const [selectedImg, setSelectedImg] = useState<string | null>(null)

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <Link href="/memories" className="inline-flex items-center gap-2 text-puja-gold hover:text-white transition-colors mb-10 group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to all memories
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <h1 className="font-heading text-5xl md:text-6xl text-puja-ivory font-bold mb-4 text-glow">
                    Our <span className="text-puja-gold">{year}</span> Celebration
                </h1>
                <p className="font-sans text-xl text-white/70 max-w-3xl">
                    {isUpcoming
                        ? "Get ready for the most awaited event of the year. We are preparing something special for the 2026 Durga Puja!"
                        : `Witness the devotion, joy, and key highlights of our grand Durga Puja from ${year}.`
                    }
                </p>
            </motion.div>

            {isUpcoming ? (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass-effect p-12 rounded-3xl text-center border border-puja-gold/20 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-puja-gold/5 animate-pulse" />
                    <div className="relative z-10">
                        <div className="w-24 h-24 bg-puja-gold/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-puja-gold/40 shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                            <span className="text-4xl">⏳</span>
                        </div>
                        <h2 className="font-heading text-4xl text-puja-gold font-bold mb-6">Coming Soon</h2>
                        <p className="font-sans text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                            The 2026 Durga Puja celebration is currently in the planning phase.
                            We will be sharing memories and highlights right here as the celebration unfolds.
                            Stay tuned for updates!
                        </p>
                        <div className="mt-10 flex justify-center gap-4">
                            <div className="h-1 w-12 bg-puja-gold rounded-full" />
                            <div className="h-1 w-12 bg-puja-gold/30 rounded-full" />
                            <div className="h-1 w-12 bg-puja-gold/30 rounded-full" />
                        </div>
                    </div>
                </motion.div>
            ) : (
                <>
                    {/* Video Highlight Banner placeholder - Hidden for 2020 and 2021 as requested */}
                    {!hideBanner && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-16 group cursor-pointer border border-white/10"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?q=80&w=2070&auto=format&fit=crop"
                                alt={`${year} Video Highlight`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="w-20 h-20 bg-puja-gold/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-puja-gold/40 transition-all duration-300">
                                    <Play className="w-8 h-8 text-puja-gold ml-1" fill="currentColor" />
                                </div>
                                <span className="text-puja-ivory font-sans font-semibold tracking-wider uppercase drop-shadow-md">
                                    Watch Highlights
                                </span>
                            </div>
                        </motion.div>
                    )}

                    {/* Masonry Grid - Preserving original forms */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {images.map((img, index) => (
                            <motion.div
                                key={img.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                                className="relative w-full rounded-xl overflow-hidden cursor-pointer group break-inside-avoid shadow-lg border border-white/5"
                                onClick={() => setSelectedImg(img.src)}
                            >
                                <Image
                                    src={img.src}
                                    alt={`Memory ${img.id}`}
                                    width={800}
                                    height={600}
                                    quality={70}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-puja-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Lightbox */}
                    <AnimatePresence>
                        {selectedImg && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                                onClick={() => setSelectedImg(null)}
                            >
                                <button className="absolute top-6 right-6 text-white hover:text-puja-gold p-2 bg-white/5 rounded-full backdrop-blur-md transition-colors z-50">
                                    <X className="w-8 h-8" />
                                </button>
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    className="relative w-full h-full max-w-6xl max-h-[90vh] rounded-lg overflow-hidden cursor-default pointer-events-none"
                                    onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
                                >
                                    <Image
                                        src={selectedImg}
                                        alt="Enlarged Memory"
                                        fill
                                        className="object-contain"
                                        sizes="100vw"
                                        quality={85}
                                    />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}

        </div>
    )
}
