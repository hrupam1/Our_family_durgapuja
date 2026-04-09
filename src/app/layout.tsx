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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <body className="font-sans antialiased text-puja-ivory bg-puja-dark selection:bg-puja-gold selection:text-puja-dark">
                <SmoothScrolling>
                    <Navbar />
                    <main className="min-h-screen">
                        {children}
                    </main>
                </SmoothScrolling>
            </body>
        </html>
    )
}
