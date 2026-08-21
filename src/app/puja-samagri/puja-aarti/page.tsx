import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
    title: 'পূজা আরতি (Puja Aarti) | Puja Samagri',
    description: 'Rules and items for Puja Aarti.',
}

export default function PujaAartiPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-6 md:px-12 relative overflow-hidden bg-puja-dark">
            {/* Background embellishments */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-puja-red/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-puja-gold/5 blur-[120px]" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <Link href="/puja-samagri" className="inline-flex items-center gap-2 text-white/50 hover:text-puja-gold transition-colors font-sans text-sm tracking-wide mb-10 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Puja Samagri
                </Link>

                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-puja-gold mb-6 tracking-wider drop-shadow-sm">
                        পূজা আরতি
                    </h1>
                    <div className="h-1 w-24 bg-puja-red mx-auto rounded-full mb-6 opacity-80" />
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Rules of Aarti */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:border-puja-gold/20 hover:bg-white/10 transition-all duration-300">
                        <h2 className="font-heading text-2xl md:text-3xl text-puja-gold-light mb-6 border-b border-white/10 pb-4">আরতির নিয়ম</h2>
                        <ul className="space-y-5 font-sans text-white/80 text-lg font-light">
                            <li className="flex items-center justify-between border-b border-white/5 pb-2">
                                <span>প্রতিষ্ঠাপিত ঘটে</span>
                                <span className="text-puja-gold font-medium">৪ বার</span>
                            </li>
                            <li className="flex items-center justify-between border-b border-white/5 pb-2">
                                <span>দেবদেবীর মূর্তির মধ্যভাগে</span>
                                <span className="text-puja-gold font-medium">২ বার</span>
                            </li>
                            <li className="flex items-center justify-between border-b border-white/5 pb-2">
                                <span>দেবদেবীর মস্তকে</span>
                                <span className="text-puja-gold font-medium">৩ বার</span>
                            </li>
                            <li className="flex items-center justify-between pb-2">
                                <span>চারিধারে পরিক্রমা</span>
                                <span className="text-puja-gold font-medium">৭ বার</span>
                            </li>
                        </ul>
                    </div>

                    {/* Items for Aarti */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:border-puja-gold/20 hover:bg-white/10 transition-all duration-300">
                        <h2 className="font-heading text-2xl md:text-3xl text-puja-gold-light mb-6 border-b border-white/10 pb-4">আরতির সরঞ্জাম ও দ্রব্য</h2>
                        <ul className="grid grid-cols-2 gap-y-4 gap-x-2 font-sans text-white/80 text-lg font-light">
                            {['পঞ্চপ্রদীপ', 'কর্পূরদানী', 'শঙ্খ', 'শাড়ি', 'পদ্ম', 'চক্র', 'তলোয়ার', 'ত্রিশূল', 'পাখা', 'চামর'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-puja-red shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
