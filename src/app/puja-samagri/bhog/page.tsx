import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
    title: 'ভোগ (Bhog) | Puja Samagri',
    description: 'Details of daily Bhog offerings for the nine forms of Navadurga.',
}

export default function BhogPage() {
    const bhogData = [
        { day: 'প্রথমা', form: 'শৈলপুত্রী', astro: 'মেষ রাশি, বৃশ্চিক রাশি, রবি গ্রহ', offering: 'গরুর গাওয়া ঘি ও দুধ জাত দ্রব্য, চিরুনি ও সুগন্ধিযুক্ত সাবান ও শ্যাম্পু।' },
        { day: 'দ্বিতীয়া', form: 'ব্রহ্মচারিণী', astro: 'তুলা রাশি, রাহু গ্রহ', offering: 'চিনি গুঁড়ো (শক্কর) দিয়ে তৈরী দ্রব্য, কেশবন্ধনার্থ পট্টডোর।' },
        { day: 'তৃতীয়া', form: 'চন্দ্রঘণ্টা', astro: 'কন্যা ও মিথুন রাশি, কেতু গ্রহ', offering: 'দুধ ও চিনি দিয়ে সুজি, ভূষণার্থ আলতা, দর্পন ও সিন্দুর।' },
        { day: 'চতুর্থী', form: 'কুষ্মাণ্ডা', astro: 'ধনু রাশি, চন্দ্র গ্রহ', offering: 'মালপোয়া, কাজল, মধুপর্ক, সোনা/রূপোর টিপ।' },
        { day: 'পঞ্চমী', form: 'স্কন্দমাতা', astro: 'কুম্ভরাশি, মঙ্গল গ্রহ', offering: 'মর্তমান কলা/হলুদ কাঁঠালী কলা (চাল কলা সাজিয়ে দিতে হবে)। চন্দন, সুগন্ধি, পুষ্পমাল্য।' },
        { day: 'ষষ্ঠী', form: 'কাত্যায়নী', astro: 'মকর রাশি, বুধ গ্রহ', offering: 'মধু' },
        { day: 'সপ্তমী', form: 'কালরাত্রি', astro: 'সিংহ রাশি, শনি গ্রহ', offering: 'আঁখের গুড় / গুড়ের নৈবেদ্য।' },
        { day: 'অষ্টমী', form: 'মহাগৌরী', astro: 'বৃষ রাশি, বৃহস্পতি গ্রহ', offering: 'ছোলা ভাজা, হালুয়া, নারকেল নাড়ু' },
        { day: 'নবমী', form: 'সিদ্ধিদাত্রী', astro: 'কর্কট রাশি, মীন রাশি, শুক্র গ্রহ', offering: 'দুধ ও চালের পায়েস, কালো তিলের নৈবেদ্য, গুড়ের তৈরী দ্রব্য, ছোলা' },
    ]

    return (
        <main className="min-h-screen pt-32 pb-16 px-6 md:px-12 relative overflow-hidden bg-puja-dark">
            {/* Background embellishments */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-puja-red/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-puja-gold/5 blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <Link href="/puja-samagri" className="inline-flex items-center gap-2 text-white/50 hover:text-puja-gold transition-colors font-sans text-sm tracking-wide mb-10 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Puja Samagri
                </Link>

                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-puja-gold mb-6 tracking-wider drop-shadow-sm">
                        ভোগ
                    </h1>
                    <div className="h-1 w-24 bg-puja-red mx-auto rounded-full mb-6 opacity-80" />
                    <p className="text-white/70 font-sans text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Daily Bhog offerings dedicated to the nine forms of Navadurga.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {bhogData.map((item, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:border-puja-gold/20 hover:bg-white/10 transition-all duration-300 flex flex-col">
                            <div className="flex items-center justify-between mb-5 border-b border-white/10 pb-4">
                                <h2 className="font-heading text-2xl md:text-3xl text-puja-gold-light">{item.day}</h2>
                                <span className="bg-red-950/40 text-red-500 px-4 py-1.5 rounded-full text-base font-bold tracking-wide border border-red-900/50 shadow-sm">
                                    {item.form}
                                </span>
                            </div>
                            
                            <div className="text-white/60 text-sm mb-6 font-sans flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-puja-gold shrink-0" />
                                {item.astro}
                            </div>
                            
                            <div className="font-sans text-white/90 text-lg font-light leading-relaxed mt-auto bg-black/20 p-5 rounded-xl border border-white/5 h-full">
                                {item.offering}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
