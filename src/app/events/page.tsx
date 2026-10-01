"use client"

import { motion } from 'framer-motion'
import { Calendar, Droplet, Music, Smile, Sun, CheckCircle } from 'lucide-react'

const eventCategories = [
    {
        title: 'Rituals Events',
        events: [
            { id: 1, title: 'Sandhi Puja', time: '11:45 PM - 12:30 AM', desc: 'The sacred transition from Ashtami to Navami, marked by lighting 108 diyas and offering 108 lotus flowers.', icon: Sun },
            { id: 2, title: 'Pushpanjali', time: '8:30 AM (Daily)', desc: 'Morning offering of flowers to Maa Durga by the entire family, accompanied by chanting of mantras.', icon: CheckCircle },
            { id: 3, title: 'Bhog Distribution', time: '1:30 PM (Daily)', desc: 'Community feast featuring traditional Khichuri, Labra, Chutney, and Payesh served to all guests.', icon: Droplet },
            { id: 5, title: 'Sindoor Khela', time: '4:00 PM (Dashami)', desc: 'Married women smear vermilion on each other, celebrating womanhood and praying for long married lives.', icon: Smile },
            { id: 6, title: 'Visarjan', time: '6:30 PM (Dashami)', desc: 'The emotional farewell as Maa Durga returns to Kailash, concluding with gathering at the ghats.', icon: Droplet },
        ]
    },
    {
        title: 'Games Events',
        extraContent: (
            <div className="bg-gradient-to-r from-puja-red/20 via-puja-gold/10 to-puja-red/20 border border-puja-gold/40 rounded-3xl p-8 md:p-12 mb-12 text-center backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-puja-gold to-transparent opacity-50" />
                <h3 className="text-3xl md:text-4xl font-heading text-puja-gold mb-4">দুর্গাপূজা ২০২৬: খেলাধুলায় অংশগ্রহণ</h3>
                <p className="text-lg md:text-xl text-puja-ivory/90 mb-6 leading-relaxed">
                    খেলাধুলায় অংশগ্রহণের জন্য নাম নথিভুক্ত করুন। <br className="hidden md:block" />
                    সময়কাল: সপ্তমী থেকে নবমী, ২০২৬ <br />
                    আপনার নাম লিখুন এবং যে যে খেলায় অংশগ্রহণ করতে চান, সেগুলি নির্বাচন করুন।<br />
                    <span className="text-puja-gold font-bold inline-block mt-2">👉 একাধিক খেলায় অংশগ্রহণ করা যাবে।</span>
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
                    <a href="https://bit.ly/4iH6anU" target="_blank" rel="noreferrer" className="inline-block bg-puja-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all border border-puja-gold/50 shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:shadow-[0_0_25px_rgba(220,38,38,0.7)] hover:-translate-y-1">
                        নিবন্ধনের জন্য এখানে ক্লিক করুন (Register)
                    </a>
                    <a href="https://bit.ly/4qO28f8" target="_blank" rel="noreferrer" className="inline-block bg-puja-gold text-puja-dark px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition-all shadow-[0_0_15px_rgba(255,215,0,0.5)] hover:shadow-[0_0_25px_rgba(255,215,0,0.7)] hover:-translate-y-1">
                        আমাদের ওয়েবসাইট (Website)
                    </a>
                </div>

                <div className="bg-black/20 p-6 rounded-2xl max-w-2xl mx-auto border border-white/5">
                    <p className="text-white/80 font-sans mb-4">
                        Website-এ পাবেন: পূজা সম্পর্কিত সকল তথ্য, অনুষ্ঠানের সময়সূচি, ছবি ও আপডেট, আরও অনেক কিছু...
                    </p>
                    <p className="text-2xl text-puja-gold font-serif italic mb-2">"এসো সবাই, আনন্দে মাতি, পূজা হোক জমজমাটি!"</p>
                    <p className="text-puja-ivory font-bold opacity-80">— আয়োজনে: আমাদের হালদার পরিবার</p>
                </div>
            </div>
        ),
        events: [
            { id: 7, title: 'মিউজিক্যাল চেয়ার', time: 'সপ্তমী (প্রথম দিন)', desc: 'A fun-filled musical chairs competition for all age groups.', icon: Music },
            { id: 8, title: 'বল পাসিং', time: 'সপ্তমী (প্রথম দিন)', desc: 'Classic passing the parcel game with a fun twist.', icon: Droplet },
            { id: 9, title: 'হাঁড়ি ভাঙা', time: 'সপ্তমী (প্রথম দিন)', desc: 'Blindfolded pot breaking game.', icon: CheckCircle },
            { id: 10, title: 'স্কিপিং', time: 'সপ্তমী (দ্বিতীয় দিন)', desc: 'Skipping rope competition.', icon: CheckCircle },
            { id: 11, title: 'বেলুন শুটিং', time: 'সপ্তমী (দ্বিতীয় দিন)', desc: 'Aim and pop the balloons.', icon: Droplet },
            { id: 12, title: 'বিস্কুট দৌড়', time: 'সপ্তমী (দ্বিতীয় দিন)', desc: 'Fun-filled biscuit eating race.', icon: Smile },
            { id: 13, title: 'মোমবাতি জ্বালানো', time: 'অষ্টমী', desc: 'Light the most candles in a given time.', icon: Sun },
            { id: 14, title: 'শঙ্খধ্বনি', time: 'অষ্টমী', desc: 'Traditional conch blowing competition.', icon: Music },
            { id: 15, title: 'হেডফোন রাউন্ড', time: 'অষ্টমী', desc: 'Guess the word while listening to loud music.', icon: Music },
            { id: 16, title: 'মণ্ডপের মহারথী: কুইজ', time: 'অষ্টমী', desc: 'Trivia and intelligence quiz competition.', icon: Smile },
            { id: 17, title: 'রূপ সজ্জা', time: 'নবমী', desc: 'Creative dressing up competition.', icon: Smile },
            { id: 18, title: 'মণ্ডপের মহারথী: কুইজ', time: 'নবমী', desc: 'Trivia and intelligence quiz competition.', icon: Smile },
        ]
    },
    {
        title: 'Cultural Events',
        events: [
            { id: 4, title: 'Cultural Program', time: '7:00 PM (Saptami & Ashtami)', desc: 'Evening entertainment featuring dance, music, and recitations performed by family members.', icon: Music },
            { id: 19, title: 'Dhunuchi Naach', time: '8:30 PM (Navami)', desc: 'Traditional dance with incense burners, celebrating the spirit of Durga Puja with rhythmic beats of the dhak.', icon: Sun },
        ]
    }
]

export default function EventsPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="font-heading text-5xl md:text-6xl text-puja-gold font-bold mb-6 text-glow">
                    Events
                </h1>
                <p className="font-sans text-xl text-white/70 max-w-2xl mx-auto">
                    Join us for the rituals, celebrations, and cultural moments that define our puja.
                </p>
            </motion.div>

            <div className="space-y-24">
                {eventCategories.map((category, catIndex) => (
                    <div key={category.title}>
                        <motion.h2 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-heading text-4xl text-puja-ivory font-semibold mb-8 border-b border-white/10 pb-4 inline-block"
                        >
                            {category.title}
                        </motion.h2>

                        {category.extraContent && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                {category.extraContent}
                            </motion.div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.events.map((event, index) => {
                                const Icon = event.icon
                                return (
                                    <motion.div
                                        key={event.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.1 * index }}
                                        className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-colors border border-white/5 hover:border-puja-gold/30 
                                    transform hover:-translate-y-2 duration-300 relative overflow-hidden group shadow-lg"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-puja-gold/5 blur-3xl group-hover:bg-puja-gold/10 transition-colors duration-500 rounded-full" />

                                        <div className="flex items-center gap-4 mb-6 relative z-10">
                                            <div className="w-12 h-12 rounded-full bg-puja-red/20 flex items-center justify-center border border-puja-red/50 text-puja-gold group-hover:scale-110 transition-transform duration-300">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-heading text-2xl font-semibold text-puja-ivory">{event.title}</h3>
                                                <div className="flex items-center gap-2 text-sm text-puja-gold-light mt-1">
                                                    <Calendar className="w-3 h-3" />
                                                    <span>{event.time}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="font-sans text-white/70 leading-relaxed relative z-10">
                                            {event.desc}
                                        </p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
