"use client"

import { motion } from 'framer-motion'

export default function TermsAndConditions() {
    return (
        <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <h1 className="font-heading text-4xl md:text-5xl text-puja-gold font-bold mb-6 text-glow">
                    Terms and Conditions
                </h1>
                <p className="font-sans text-white/70 tracking-wide">Last updated: {new Date().toLocaleDateString()}</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-10"
            >
                <section>
                    <h2 className="text-2xl font-heading text-puja-gold-light mb-4 flex items-center gap-2">
                        <span className="text-puja-gold">1.</span> Acceptance of Terms
                    </h2>
                    <div className="glass-effect p-6 rounded-2xl border border-white/5">
                        <p className="leading-relaxed text-white/80 font-sans">
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                            In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-heading text-puja-gold-light mb-4 flex items-center gap-2">
                        <span className="text-puja-gold">2.</span> Use of Site
                    </h2>
                    <div className="glass-effect p-6 rounded-2xl border border-white/5">
                        <p className="leading-relaxed text-white/80 font-sans">
                            This website is intended for the members, family, and guests of Our Family Durga Puja. 
                            The content provided is for informational and cultural purposes. 
                            You agree to use the site responsibly and not for any unlawful activities.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-heading text-puja-gold-light mb-4 flex items-center gap-2">
                        <span className="text-puja-gold">3.</span> Privacy and Data
                    </h2>
                    <div className="glass-effect p-6 rounded-2xl border border-white/5">
                        <p className="leading-relaxed text-white/80 font-sans">
                            Any personal information or images shared on this platform (such as in the Memories section) are meant for the community. 
                            Please respect the privacy of others and do not share sensitive personal data.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-heading text-puja-gold-light mb-4 flex items-center gap-2">
                        <span className="text-puja-gold">4.</span> Event Participation
                    </h2>
                    <div className="glass-effect p-6 rounded-2xl border border-white/5">
                        <p className="leading-relaxed text-white/80 font-sans">
                            Participation in the events listed on this site is voluntary. The organizers are not liable for any injuries, losses, or damages that may occur during the physical events.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-heading text-puja-gold-light mb-4 flex items-center gap-2">
                        <span className="text-puja-gold">5.</span> Modifications
                    </h2>
                    <div className="glass-effect p-6 rounded-2xl border border-white/5">
                        <p className="leading-relaxed text-white/80 font-sans">
                            We reserve the right to modify these terms from time to time at our sole discretion. 
                            Therefore, you should review these pages periodically.
                        </p>
                    </div>
                </section>
            </motion.div>
        </div>
    )
}
