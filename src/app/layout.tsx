import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { SmoothScrolling } from '@/components/SmoothScrolling'



const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair-display',
    display: 'swap',
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Our Family Durga Puja',
    description: 'Celebrating devotion, tradition, and togetherness',
}

import Footer from '@/components/Footer'
import AdBanner from '@/components/AdBanner'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <head>
                <meta name="8c93adff43e25dfc4d5d1c9fa6f38282df878205" content="8c93adff43e25dfc4d5d1c9fa6f38282df878205" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4628453462795407" crossOrigin="anonymous"></script>
            </head>
            <body className="font-sans antialiased text-puja-ivory bg-puja-dark selection:bg-puja-gold selection:text-puja-dark flex flex-col min-h-screen">
                <SmoothScrolling>
                    <Navbar />
                    <main className="flex-1">
                        {children}
                    </main>
                    <AdBanner />
                    <Footer />
                </SmoothScrolling>
            </body>
        </html>
    )
}
