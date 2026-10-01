"use client"

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Flower2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Poem {
    id: string
    title: string
    content: string[]
}

// Categories (Days of Puja)
const pujaDays = [
    { id: 'shashthi', name: 'ষষ্ঠী' },
    { id: 'saptami', name: 'সপ্তমী' },
    { id: 'ashtami', name: 'অষ্টমী' },
    { id: 'navami', name: 'নবমী' },
    { id: 'dashami', name: 'দশমী' },
]

// Data structure: mapping day id to an array of poems
const poemsData: Record<string, Poem[]> = {
    'shashthi': [
        {
            id: 'poem-1',
            title: 'পুজো মানেই...',
            content: [
                'পুজো মানেই পুজোর কদিন সব কাজ বন্ধ,',
                'পুজো মানেই সাতসকালে শিউলি ফুলের গন্ধ,',
                'পুজো মানেই সন্ধ্যেবেলায় ঠাকুর দেখার ভিড়,',
                'হৈচৈ আর উৎসবেতে চারিদিক অস্থির!',
                'পুজো মানেই পাঠশালাতে বাজলো ছুটির ঘন্টা,',
                'পুজো এলেই ছেলেবেলায় পালিয়ে ফেরে মনটা !!'
            ]
        },
        {
            id: 'poem-2',
            title: 'জগৎ জননী',
            content: [
                'মা গো তুমি জগৎ জননী,',
                'করো সবার ভালো,',
                'সকলের মনের কষ্ট নিয়ে,',
                'দিও খুশির আলো।',
                'হ্যাপি দুর্গা পূজা।'
            ]
        },
        {
            id: 'poem-3',
            title: 'ঢাকে পড়লো কাঠি',
            content: [
                'ঢাকে পড়লো কাঠি',
                'পুজোর মজা জমজমাটি',
                'রোল - ফুচকার স্বাদে',
                'প্যান্ডেলে প্যান্ডেলে হেঁটে',
                'পুজোর দিনগুলো হবে ফাটাফাটি'
            ]
        },
        {
            id: 'poem-4',
            title: 'শারদ বেলা',
            content: [
                'নীল আকাশে মেঘের ভেলা,',
                'পদ্ম ফুলের পাপড়ি মেলা।',
                'ঢাকের তালে কাশের খেলা,',
                'আনন্দে কাটুক শারদ বেলা।',
                'শুভ দুর্গাপূজা'
            ]
        },
        {
            id: 'poem-6',
            title: 'পূজা সবার ভালো কাটুক',
            content: [
                'ষষ্ঠীতে থাক নতুন ছোঁয়া',
                'সপ্তমীতে হোক শিশির ধোয়া',
                'অঞ্জলী দাও অষ্টমীতে',
                'আড্ডা জমুক নবমীতে',
                'দশমীতে হোক মিষ্টি মুখ',
                'পূজা সবার ভালো কাটুক ॥'
            ]
        }
    ],
    'saptami': [
        {
            id: 'poem-5',
            title: 'মায়ের আগমন',
            content: [
                'আনন্দে ভরে উঠুক',
                'সকলের মন,',
                'মা দুর্গার মর্ত্যধামে',
                'হলো আগমন।',
                'নতুন জামায়',
                'সেজে উঠুক সবাই,',
                'দুর্গা পূজার',
                'অনেক শুভেচ্ছা জানাই।'
            ]
        },
        {
            id: 'poem-7',
            title: 'শুভ মহা সপ্তমী',
            content: [
                'সপ্তমীতে বলবো মাকে',
                'মনের সব দুঃখ লাজ,',
                'অষ্টমীতে অঞ্জলী আর',
                'দেখবো মায়ের সাজ...',
                'দিনের শেষে নবমীতে',
                'মনটা উদাস উদাস,',
                'পরের দিনই যাবেন মা',
                'সকলকে ছেড়ে...',
                'শুভ মহা সপ্তমী'
            ]
        },
        {
            id: 'poem-8',
            title: 'দেবী মহামায়া',
            content: [
                'দুর্গা রূপে মা এসেছেন ঘরে',
                'গ্রাম থেকে সুখের অমৃত',
                'ঝরে,',
                'মহা সপ্তমীতে দেবী',
                'মহামায়া',
                'মায়েতে মোহিত আজ সারা',
                'দুনিয়া!!',
                'শুভ মহা সপ্তমী'
            ]
        },
        {
            id: 'poem-9',
            title: 'মহাসপ্তমীর বার্তা',
            content: [
                'মহাসপ্তমী শুধুমাত্র ধর্মীয় আচার নয়,',
                'এটি এক আত্মার জাগরণের সময়,',
                'যেখানে আমরা আমাদের অন্তরের সকল',
                'বাধাকে কাটিয়ে উঠতে শিখি এবং',
                'দেবী দুর্গার প্রতি ভক্তি প্রদর্শন করি।',
                'মা দুর্গার কৃপায় আপনার জীবনে সমস্ত দুঃখ',
                'এবং কষ্ট দূর হয়ে গিয়ে আসুক নতুন সুখ এবং শান্তির বার্তা।',
                'মহাসপ্তমী আমাদের সকলকে নতুন প্রেরণার উৎস দান করে,',
                'যা আমাদের জীবনের প্রতিটি পদক্ষেপকে সফল করে তোলে।'
            ]
        },
        {
            id: 'poem-10',
            title: 'খুশির শরৎ',
            content: [
                'এলো খুশির শরৎ,',
                'একটু হিমেল হাওয়া।',
                'পুজোর ভোরে ঢাকের আওয়াজ,',
                'মায়ের কাছে যাওয়া।',
                'অনেক খুশি অনেক আলো,',
                'পূজো সবার কাটুক ভালো।   শুভ মহা সপ্তমী'
            ]
        }
    ],
    'ashtami': [
        {
            id: 'poem-11',
            title: 'দেবীর আগমনে',
            content: [
                'দেবীীর আগমনে - আনন্দ উচ্ছ্বাসে',
                'নতুন জামায় আর পাড়ার প্যান্ডেলে',
                'অবিরাম হাসি তে',
                'পুজো কাটুক সানন্দে'
            ]
        },
        {
            id: 'poem-12',
            title: 'অঞ্জলি',
            content: [
                'অঞ্জলি হাতে মায়ের কাছে,',
                'শান্তি চাই সকলের মাঝে,',
                'মায়ের আশীর্বাদ থাকুক সাথে,',
                'হাসি ফুটুক প্রতিটি ঘরে।'
            ]
        },
        {
            id: 'poem-13',
            title: 'মহাষ্টমীর আলো',
            content: [
                'ঢাকের তালে জাগুক প্রাণ,',
                'ফুলের গন্ধে ভরুক মন,',
                'মহাষ্টমীর পবিত্র আলোয়,',
                'দূর হোক জীবনের সব অন্ধকার।'
            ]
        },
        {
            id: 'poem-14',
            title: 'মায়ের মহাষ্টমী',
            content: [
                'ঢাকের তালে ভোরের হাওয়া,',
                'কাশফুল দোলে নদীর পাড়ে,',
                'আজ যে মায়ের মহাষ্টমী,',
                'আনন্দ নামে ঘরে ঘরে।'
            ]
        },
        {
            id: 'poem-15',
            title: 'অষ্টমীর শুভক্ষণে',
            content: [
                'শিউলির গন্ধ, ঢাকের তান,',
                'মায়ের আগমনে ভরে প্রাণ,',
                'অষ্টমীর এই শুভক্ষণে,',
                'আলো ফুটুক সবার মনে।'
            ]
        },
        {
            id: 'poem-16',
            title: 'পবিত্র দিন',
            content: [
                'ধূপের গন্ধ, প্রদীপের আলো,',
                'মায়ের মুখে মধুর হাসি,',
                'অষ্টমীর এই পবিত্র দিনে,',
                'ভালো থাকুক পৃথিবীর সবাই।'
            ]
        },
        {
            id: 'poem-24',
            title: 'শারদীয়ার শুভেচ্ছা',
            content: [
                'এলো খুশির শরৎ,',
                'একটু হিমেল হাওয়া।',
                'পুজোর ভোরে ঢাকের আওয়াজ,',
                'মায়ের কাছে যাওয়া।',
                'অনেক খুশি অনেক আলো,',
                'পুজো কাটুক সবার ভালো।',
                'শারদীয়ার শুভেচ্ছা জানাই'
            ]
        }
    ],
    'navami': [
        {
            id: 'poem-17',
            title: 'শুভ মহা নবমী',
            content: [
                'নতুন রূপে নতুন সাজে সাজবে সবার মন,',
                'পূজার দিনে হাসিখুশিতে কাটবে সারাচ্ছণ,',
                'কদিন পরেই চলে যাবে মা ভাসিয়ে চোখের জলে,',
                'ঠাই দিও মাগো তুমি মোদের তোমার চরণ তলে।',
                'সকলকে জানাই শুভ মহা নবমী !'
            ]
        },
        {
            id: 'poem-18',
            title: 'নবমীর আলো',
            content: [
                'নবমীর আলোয় মুছে যাক দুঃখ,',
                'মায়ের কৃপায় ভরে উঠুক প্রাণ,',
                'শক্তি, শান্তি আর ভালোবাসায়,',
                'সুন্দর হোক সবার জীবন।'
            ]
        },
        {
            id: 'poem-19',
            title: 'নবমীর ক্ষণ',
            content: [
                'কাশফুল দোলে, শিউলি ঝরে, নবমীর এই ক্ষণে,',
                'মায়ের ছোঁয়ায় স্বপ্ন জাগে প্রতিটি মানুষের মনে।',
                'বিদায়ের সুর আসুক না আজ, থাকুক মায়ের আলো,',
                'তাঁর আশিসে পৃথিবী হোক আরও একটু ভালো।'
            ]
        },
        {
            id: 'poem-20',
            title: 'নবমীর রাত',
            content: [
                'ধূপের ধোঁয়ায় ভাসে প্রার্থনা, ঢাকে ওঠে সুর,',
                'মায়ের চরণ ছুঁয়ে আজ দূরে যাক সব দুঃখ-দুর।',
                'নবমীর এই পবিত্র রাতে একটাই হোক গান—',
                'মায়ের আশিসে ভালোবাসায় ভরে উঠুক প্রাণ।'
            ]
        },
        {
            id: 'poem-21',
            title: 'মহানবমীর আশীর্বাদ',
            content: [
                'আজ মহানবমী… 🌺',
                '',
                'ঢাকের প্রতিটি শব্দে যেন মা বলেন—',
                '“ভয় পেও না, আমি আছি।”',
                '',
                'অন্ধকার যতই গভীর হোক,',
                'মায়ের আশীর্বাদে আলো তার পথ খুঁজে নেবেই। ✨',
                '',
                'বিদায়ের আগে শুধু এটুকুই চাওয়া—',
                'মা, ভালোবাসা আর আশীর্বাদটুকু রেখে যেও।'
            ]
        }
    ],
    'dashami': [
        {
            id: 'poem-22',
            title: 'মায়ের করুণা',
            content: [
                'মাগো তোমার করুনা',
                'শুভধারা বাহিনী',
                'মা তোমার চরণবিনা',
                'আর বেশি চাইনি',
                'তুিমত শক্তি মাগো',
                'দাও সকলের মুক্তি',
                'থাকো মা আরও কদিন',
                'করি তোমার ভক্তি'
            ]
        },
        {
            id: 'poem-23',
            title: 'বিদায় সুর',
            content: [
                'ঢাকের কাঠির বিদায় সুরে',
                'উদাস করে মন',
                'চললেন মা মহামায়া',
                'আজকে বিসর্জন   শুভ বিজয়া'
            ]
        },
        {
            id: 'poem-25',
            title: 'শুভ বিজয়া',
            content: [
                'দশমীর এই সন্ধে বেলা',
                'সাঙ্গ হলো সিঁদুর খেলা,',
                'মা এর ঘরে ফেরার পালা,',
                'চোখের জল-এ বিদায় বলা ,',
                'মা-এর হলো সময় যাবার',
                'আসছে বছর আসবে আবার.   শুভ বিজয়া'
            ]
        },
        {
            id: 'poem-26',
            title: 'বিসর্জনের ঢাক',
            content: [
                'কুর-কুরা-কুর বাজে ঢাক,',
                'কৈলাস যে দিলো ডাক।',
                'শুরু হবে সিঁদুর খেলা',
                'দেবীীর যে আজ যাওয়ার',
                'পালা,',
                'বোধন থেকে বিসর্জন,',
                'ভালো রেখো মা সবার মন।',
                'শুভ বিজয়া দশমী'
            ]
        },
        {
            id: 'poem-27',
            title: 'আগামী পুজোর আশা',
            content: [
                'সপ্তমী, অষ্টমীন, নবমী গেল',
                'এলো পুজোর শেষ',
                'মনে তবু রয়েই গেল আনন্দেরই রেশ',
                'দশমী আবার দিয়ে গেল',
                'আগামী পুজোর আশা',
                'শুভ বিজয়ার সঙ্গে জানাই প্রীতি ও ভালোবাসা'
            ]
        },
        {
            id: 'poem-28',
            title: 'বিজয়ার আশীর্বাদ',
            content: [
                'বিজয়া দশমীর এই শুভ',
                'মুহূর্তে',
                'সকলকে জানাই',
                'অনেক অনেক',
                'শুভেচ্ছা,',
                'কামনা করি মা দুর্গার',
                'আশীর্বাদে',
                'সবার জীবন আনন্দে',
                'ভরে উঠুক।'
            ]
        }
    ],
}

export default function Scripts() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })
    const [activeSection, setActiveSection] = useState<'poems' | 'announcements'>('poems')
    const [activeDay, setActiveDay] = useState(pujaDays[0].id)

    return (
        <section id="scripts" ref={containerRef} className="min-h-screen pt-32 pb-24 px-6 relative flex flex-col items-center">
            
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 flex justify-between">
                 <div className="w-[300px] h-[300px] bg-puja-red/30 rounded-full blur-[100px] -top-20 -left-20" />
                 <div className="w-[300px] h-[300px] bg-puja-gold/30 rounded-full blur-[100px] top-1/2 -right-20" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12"
                >
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <Flower2 className="w-8 h-8 text-puja-red animate-[spin_10s_linear_infinite]" />
                        <h1 className="font-heading text-5xl md:text-7xl text-puja-ivory font-bold text-glow">
                            Puja <span className="text-puja-gold">Scripts</span>
                        </h1>
                        <Flower2 className="w-8 h-8 text-puja-red animate-[spin_10s_linear_infinite]" />
                    </div>
                    <p className="font-sans text-xl text-white/80 leading-relaxed font-light max-w-2xl mx-auto mt-4">
                        Beautiful Bengali poems and verses celebrating the essence, joy, and divine presence of Maa Durga.
                    </p>
                </motion.div>

                {/* Section Toggle */}
                <div className="flex justify-center gap-4 mb-16">
                    <button
                        onClick={() => setActiveSection('poems')}
                        className={cn(
                            "px-8 py-3 rounded-full text-lg font-heading tracking-wider transition-all duration-300 border-2",
                            activeSection === 'poems'
                                ? "bg-puja-gold text-puja-dark border-puja-gold font-bold shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                                : "bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-white/40"
                        )}
                    >
                        Poems
                    </button>
                    <button
                        onClick={() => setActiveSection('announcements')}
                        className={cn(
                            "px-8 py-3 rounded-full text-lg font-heading tracking-wider transition-all duration-300 border-2",
                            activeSection === 'announcements'
                                ? "bg-puja-gold text-puja-dark border-puja-gold font-bold shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                                : "bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-white/40"
                        )}
                    >
                        Announcements
                    </button>
                </div>

                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {activeSection === 'poems' ? (
                            <motion.div
                                key="poems-section"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4 }}
                                className="w-full"
                            >
                                {/* Tabs Navigation */}
                                <div className="flex flex-wrap justify-center gap-3 mb-12">
                                    {pujaDays.map((day) => (
                                        <button
                                            key={day.id}
                                            onClick={() => setActiveDay(day.id)}
                                            className={cn(
                                                "px-6 py-3 rounded-full text-lg sm:text-xl font-heading tracking-wide transition-all duration-300 border",
                                                activeDay === day.id
                                                    ? "bg-puja-gold text-puja-dark border-puja-gold font-bold shadow-[0_0_15px_rgba(255,215,0,0.4)]"
                                                    : "bg-white/5 text-puja-ivory border-white/10 hover:bg-white/10 hover:border-white/30"
                                            )}
                                        >
                                            {day.name}
                                        </button>
                                    ))}
                                </div>

                                {/* Poems Container */}
                                <div className="w-full space-y-12">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeDay}
                                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                            className="w-full space-y-12"
                                        >
                                            {poemsData[activeDay].length === 0 ? (
                                                <div className="bg-white/5 border border-puja-gold/30 rounded-3xl p-12 backdrop-blur-sm relative overflow-hidden">
                                                    <div className="absolute -inset-1 bg-gradient-to-r from-puja-gold/0 via-puja-gold/20 to-puja-gold/0 opacity-50 blur-lg animate-pulse" />
                                                    <p className="text-puja-gold/80 text-xl italic font-serif relative z-10">
                                                        এই দিনের জন্য এখনও কোনো কবিতা যুক্ত করা হয়নি... ✨
                                                    </p>
                                                </div>
                                            ) : (
                                                poemsData[activeDay].map((poem, index) => (
                                                    <div key={poem.id} className="relative group text-left">
                                                        {/* Decorative Border Card */}
                                                        <div className="absolute inset-0 bg-gradient-to-br from-puja-gold/20 via-transparent to-puja-red/20 rounded-2xl transform group-hover:scale-[1.01] transition-transform duration-500" />
                                                        
                                                        <div className="relative bg-puja-dark/80 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-md flex flex-col items-center text-center">
                                                            {/* Corner Motifs */}
                                                            <div className="absolute top-4 left-4 text-puja-gold/40">❧</div>
                                                            <div className="absolute top-4 right-4 text-puja-gold/40 rotate-90">❧</div>
                                                            <div className="absolute bottom-4 right-4 text-puja-gold/40 rotate-180">❧</div>
                                                            <div className="absolute bottom-4 left-4 text-puja-gold/40 -rotate-90">❧</div>

                                                            <h2 className="text-3xl font-heading text-puja-gold mb-8">
                                                                {poem.title}
                                                            </h2>
                                                            
                                                            <div className="space-y-4 font-serif text-lg md:text-xl text-puja-ivory/90 leading-loose">
                                                                {poem.content.map((line, i) => (
                                                                    <p key={i}>{line}</p>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="announcements-section"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="w-full"
                            >
                                <div className="bg-white/5 border border-puja-red/30 rounded-3xl p-12 backdrop-blur-sm relative overflow-hidden">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-puja-red/0 via-puja-red/20 to-puja-red/0 opacity-50 blur-lg animate-pulse" />
                                    <p className="text-puja-red/80 text-xl font-serif relative z-10">
                                        No announcements at the moment. Stay tuned for updates! 📢
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
