"use client"

import React from 'react'

export default function ScrollingText() {
    // Default text placeholder
    const defaultText = "Welcome to Our Family Durga Puja 2026! Stay tuned for more announcements and updates."
    
    // Duplicate the text multiple times to ensure it fills the screen and creates a seamless loop
    const repeatedText = Array(10).fill(defaultText).join(" ✦ ")

    return (
        <div className="w-full bg-puja-gold text-puja-dark py-3 overflow-hidden border-y-2 border-puja-red/20 shadow-md">
            <div className="flex animate-marquee whitespace-nowrap w-max">
                <span className="text-lg md:text-xl font-bold px-4">{repeatedText} ✦ </span>
                <span className="text-lg md:text-xl font-bold px-4">{repeatedText} ✦ </span>
            </div>
        </div>
    )
}
