import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="w-full py-8 border-t border-white/10 mt-auto bg-puja-dark relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-white/50 font-sans tracking-wide">
                    © {new Date().getFullYear()} Our Family Durga Puja. All rights reserved.
                </div>
                <div className="flex items-center gap-6 text-sm">
                    <Link href="/terms-and-conditions" className="text-white/50 hover:text-puja-gold transition-colors font-sans tracking-wide">
                        Terms and Conditions
                    </Link>
                </div>
            </div>
        </footer>
    )
}
