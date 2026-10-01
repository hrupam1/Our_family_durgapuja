import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                puja: {
                    red: "#8B0000",
                    "red-light": "#B22222",
                    gold: "#FFD700",
                    "gold-light": "#FFEA70",
                    ivory: "#FFFFF0",
                    dark: "#A41B1F" // Uploaded Deep Red Color
                }
            },
            fontFamily: {
                heading: ["var(--font-playfair-display)", "serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'puja-pattern': "url('/pattern.png')",
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            },
            animation: {
                marquee: 'marquee 25s linear infinite',
            }
        },
    },
    plugins: [],
};
export default config;
