import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
    title: 'নৈবেদ্য (Naivedya) | Puja Samagri',
    description: 'Details of Naivedya offerings for each day of Durga Puja.',
}

export default function NaivedyaPage() {
    const daysData = [
        {
            day: 'ষষ্ঠী',
            items: [
                { name: 'কল্পারম্ভ', details: ['নৈবেদ্য - ৩ টি', 'কুচানৈবেদ্য - ১ টি'] },
                { name: 'বোধন', details: ['নৈবেদ্য - ২ টি', 'কুচানৈবেদ্য - ১ টি'] },
                { name: 'আমন্ত্রন', details: ['নৈবেদ্য - ১ টি'] }
            ]
        },
        {
            day: 'সপ্তমী',
            items: [
                { name: 'প্রধান নৈবেদ্য', count: '১ টি' },
                { name: 'নৈবেদ্য', count: '১৯ টি / ৩০ টি' },
                { name: 'কুচানৈবেদ্য', count: '১ টি' },
                { name: 'ভোগের দ্রব্য', count: '৭ টি' }
            ]
        },
        {
            day: 'অষ্টমী',
            items: [
                { name: 'প্রধান নৈবেদ্য', count: '১ টি' },
                { name: 'নৈবেদ্য', count: '৩৭ টি' },
                { name: 'কুচানৈবেদ্য', count: '১ টি' },
                { name: 'ভোগের দ্রব্য', count: '৮ টি' }
            ]
        },
        {
            day: 'সন্ধিপূজা',
            items: [
                { name: 'প্রধান নৈবেদ্য (গোটা ফলের নৈবেদ্য লাল চন্দন মিশ্রিত)', count: '১ টি' },
                { name: 'ভোগের দ্রব্য', count: '' }
            ]
        },
        {
            day: 'নবমী',
            items: [
                { name: 'প্রধান নৈবেদ্য', count: '১ টি' },
                { name: 'নৈবেদ্য', count: '২৭ টি' },
                { name: 'কুচা নৈবেদ্য', count: '১ টি' },
                { name: 'ভোগের দ্রব্য', count: '৯ টি' }
            ]
        }
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
                        নৈবেদ্য
                    </h1>
                    <div className="h-1 w-24 bg-puja-red mx-auto rounded-full mb-6 opacity-80" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {daysData.map((dayData, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:border-puja-gold/20 hover:bg-white/10 transition-all duration-300">
                            <h2 className="font-heading text-3xl text-puja-gold-light mb-6 border-b border-white/10 pb-4">{dayData.day}</h2>
                            <ul className="space-y-4 font-sans text-white/80 text-lg font-light">
                                {dayData.items.map((item, i) => (
                                    <li key={i} className="flex flex-col gap-1 pb-3 border-b border-white/5 last:border-0 last:pb-0">
                                        {'details' in item ? (
                                            <>
                                                <span className="text-puja-ivory font-medium mb-2">{item.name}</span>
                                                <div className="pl-3 space-y-2">
                                                    {item.details.map((detail, j) => {
                                                        const [label, val] = detail.split(' - ')
                                                        return (
                                                            <div key={j} className="flex items-center justify-between text-sm md:text-base">
                                                                <span className="text-white/70 flex items-center gap-2">
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-puja-red shrink-0" />
                                                                    {label}
                                                                </span>
                                                                {val && <span className="text-puja-gold font-medium">{val}</span>}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </>
                                        ) : (
                                            <div className="flex items-start justify-between">
                                                <span className="flex items-center gap-2 mt-1.5">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-puja-red shrink-0" />
                                                    <span className="leading-snug pr-2">{item.name}</span>
                                                </span>
                                                {item.count && <span className="text-puja-gold font-medium ml-4 shrink-0 mt-0.5">{item.count}</span>}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
