import Link from 'next/link'
import { ArrowLeft, Leaf } from 'lucide-react'

export const metadata = {
    title: 'নবপত্রিকা স্নান (Nabapatrika Snan) | Puja Samagri',
    description: 'Details of the nine plants and their bathing rituals for Nabapatrika Snan.',
}

export default function NabapatrikaSnanPage() {
    const snanData = [
        { id: '১', plant: 'কলাগাছ', devi: 'ব্রহ্মাণী', ritual: 'তুলসী ও শ্বেতচন্দন মিশ্রিত উষ্ণ জল দিয়ে স্নান।' },
        { id: '২', plant: 'কচুগাছ', devi: 'কালিকা', ritual: 'সুগন্ধি ফুলের নির্যাস যুক্ত জলে স্নান।' },
        { id: '৩', plant: 'হলুদগাছ', devi: 'দূর্গা মা', ritual: 'ঈষদুষ্ণ জলে স্নান, শিশির।' },
        { id: '৪', plant: 'জয়ন্তী', devi: 'কার্তিকী', ritual: 'গন্ধদ্রব্য (সুগন্ধি) মিশ্রিত জল।' },
        { id: '৫', plant: 'বেল গাছ', devi: 'শিবা', ritual: 'সর্বৌষধি জল (বচ, কুড়, শৈলজ, হলুদ, দারু হরিদ্রা, শঠী, চম্পক, মুথা)' },
        { id: '৬', plant: 'ডালিম গাছ', devi: 'রক্তদণ্ডিকা', ritual: 'পঞ্চ কষায় জলে (জাম, শিমুল, বেড়েলা, কুল, বকুল গাছের ছাল ভেজানো জল) স্নান।' },
        { id: '৭', plant: 'অশোক ডাল', devi: 'শোকরহিতা', ritual: 'সুগন্ধি জলে স্নান।' },
        { id: '৮', plant: 'মানকচু', devi: 'চামুণ্ডা', ritual: 'কর্পূর মিশ্রিত জল।' },
        { id: '৯', plant: 'ধানগাছ', devi: 'লক্ষ্মী', ritual: 'গঙ্গাজল, ও তিলের তেল।' },
    ]

    return (
        <main className="min-h-screen pt-32 pb-16 px-6 md:px-12 relative overflow-hidden bg-puja-dark">
            {/* Background embellishments */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-puja-red/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-puja-gold/5 blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <Link href="/puja-samagri" className="inline-flex items-center gap-2 text-white/50 hover:text-puja-gold transition-colors font-sans text-sm tracking-wide mb-10 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Puja Samagri
                </Link>

                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-puja-gold mb-6 tracking-wider drop-shadow-sm">
                        নবপত্রিকা স্নান
                    </h1>
                    <div className="h-1 w-24 bg-puja-red mx-auto rounded-full mb-6 opacity-80" />
                    <p className="text-white/70 font-sans text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        The sacred bathing rituals for the nine plants of Nabapatrika.
                    </p>
                </div>

                <div className="space-y-6">
                    {snanData.map((item) => (
                        <div key={item.id} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:border-puja-gold/20 hover:bg-white/10 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                            <div className="flex items-center gap-4 min-w-[220px]">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-950/40 text-red-500 font-bold text-lg border border-red-900/50 shrink-0">
                                    {item.id}
                                </span>
                                <div>
                                    <h2 className="font-heading text-2xl text-puja-gold-light">{item.plant}</h2>
                                    <p className="text-sm text-white/50 font-medium tracking-wide mt-1">
                                        <span className="text-red-400">দেবী:</span> {item.devi}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="hidden md:block w-px h-12 bg-white/10 shrink-0" />
                            
                            <div className="font-sans text-white/90 text-lg font-light leading-relaxed md:pl-2">
                                {item.ritual}
                            </div>
                        </div>
                    ))}
                    
                    <div className="bg-white/5 backdrop-blur-md border border-puja-gold/20 p-6 md:p-8 rounded-2xl shadow-[0_0_30px_rgba(255,215,0,0.1)] flex items-center justify-center mt-8">
                        <div className="flex items-center gap-3">
                            <Leaf className="text-puja-gold w-6 h-6" />
                            <span className="font-heading text-2xl text-puja-gold-light tracking-wide">
                                দুটো বেল
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
