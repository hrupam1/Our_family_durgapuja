import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
    title: 'মহাস্নান দ্রব্যাদি (Mahasnan Drabyadi) | Puja Samagri',
    description: 'Details of items required for Mahasnan.',
}

export default function MahasnanDrabyadiPage() {
    const mahasnanData = [
        {
            id: '১',
            title: 'তৈল হরিদ্রা',
            subItems: []
        },
        {
            id: '২',
            title: 'পঞ্চগব্য',
            subItems: ['গোমূত্র', 'গোময়', 'দুগ্ধ', 'দধি', 'গব্যঘৃত']
        },
        {
            id: '৩',
            title: 'পঞ্চামৃত',
            subItems: ['শর্করা', 'দুগ্ধ', 'দধি', 'গব্যঘৃত', 'মধু']
        },
        {
            id: '৪',
            title: 'অষ্টকলসের জল',
            subItems: ['গঙ্গাজল', 'বৃষ্টির জল', 'সরস্বতী নদীর জল', 'সাগরের জল', 'পদ্মরেণু মিশ্রিত জল', 'ঝর্ণার জল', 'সর্বতীর্থের জল', 'চন্দন মিশ্রিত জল']
        }
    ]

    const bengaliLetters = ['ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ', 'ছ', 'জ'];

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
                        মহাস্নান দ্রব্যাদি
                    </h1>
                    <div className="h-1 w-24 bg-puja-red mx-auto rounded-full mb-6 opacity-80" />
                    <p className="text-white/70 font-sans text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        The essential sacred items required for the grand bathing ritual (Mahasnan).
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {mahasnanData.map((item) => (
                        <div key={item.id} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:border-puja-gold/20 hover:bg-white/10 transition-all duration-300">
                            <div className={`flex items-center gap-4 ${item.subItems.length > 0 ? 'mb-6 border-b border-white/10 pb-4' : ''}`}>
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-950/40 text-red-500 font-bold text-lg border border-red-900/50 shrink-0">
                                    {item.id}
                                </span>
                                <h2 className="font-heading text-2xl md:text-3xl text-puja-gold-light">{item.title}</h2>
                            </div>
                            
                            {item.subItems.length > 0 && (
                                <ul className="space-y-4 font-sans text-white/80 text-lg font-light pl-2">
                                    {item.subItems.map((sub, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <span className="text-puja-red text-base font-medium w-8 bg-puja-red/10 border border-puja-red/20 rounded-md text-center py-0.5">
                                                {bengaliLetters[i]})
                                            </span>
                                            <span>{sub}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
