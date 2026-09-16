'use client'

import { useEffect } from 'react'

export default function AdBanner() {
    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (err) {
            console.error('AdSense error:', err)
        }
    }, [])

    return (
        <div className="w-full mx-auto my-4 overflow-hidden flex justify-center items-center relative z-10">
            {/* puja */}
            <ins className="adsbygoogle"
                 style={{ display: 'block', width: '100%', minHeight: '90px' }}
                 data-ad-client="ca-pub-4628453462795407"
                 data-ad-slot="4571281262"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
        </div>
    )
}
