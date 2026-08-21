import Link from 'next/link'
import { ArrowLeft, Info } from 'lucide-react'

export const metadata = {
    title: 'নবপত্রিকা বন্ধন দ্রব্য | Puja Samagri',
    description: 'Items required for Nabapatrika Bandhan.',
}

export default function NabapatrikaBandhanPage() {
    const items = [
        'শ্বেত অপরাজিতার লতা',
        '৯ গাছা হলুদ সুতা।'
    ]

    return (
        <main className="min-h-screen pt-32 pb-16 px-6 md:px-12 relative overflow-hidden bg-puja-dark">
            {/* Background embellishments */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-puja-red/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-puja-gold/5 blur-[120px]" />
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                <Link href="/puja-samagri" className="inline-flex items-center gap-2 text-white/50 hover:text-puja-gold transition-colors font-sans text-sm tracking-wide mb-10 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Puja Samagri
                </Link>

                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-puja-gold mb-6 tracking-wider drop-shadow-sm">
                        নবপত্রিকা বন্ধন দ্রব্য
                    </h1>
                    <div className="h-1 w-24 bg-puja-red mx-auto rounded-full mb-6 opacity-80" />
                    <p className="text-white/70 font-sans text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Essential items for tying the Nabapatrika (Kola Bou).
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.3)] mb-8">
                    <ul className="space-y-6">
                        {items.map((item, index) => (
                            <li key={index} className="flex items-center gap-5">
                                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-red-950/40 text-red-500 font-bold text-xl border border-red-900/50 shrink-0">
                                    {['১', '২'][index]}
                                </span>
                                <span className="font-sans text-white/90 text-2xl font-light">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gradient-to-r from-puja-red/10 to-puja-gold/5 backdrop-blur-md border border-puja-red/20 p-6 md:p-8 rounded-2xl shadow-lg flex items-start md:items-center gap-5">
                    <div className="bg-puja-red/10 p-3 rounded-full text-puja-red shrink-0 mt-1 md:mt-0 border border-puja-red/20">
                        <Info className="w-6 h-6" />
                    </div>
                    <p className="font-heading text-2xl md:text-3xl text-puja-gold-light leading-snug">
                        কলাবৌ এর পরনে থাকে লাল পাড় গরদের শাড়ি।
                    </p>
                </div>
            </div>
        </main>
    )
}
