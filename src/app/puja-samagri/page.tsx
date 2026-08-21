import PujaSamagri from '@/components/PujaSamagri'

export const metadata = {
    title: 'Puja Samagri | Our Family Durga Puja',
    description: 'Sacred items and offerings required for Durga Puja rituals.',
}

export default function PujaSamagriPage() {
    return (
        <main className="min-h-screen bg-puja-dark selection:bg-puja-gold/30 selection:text-puja-ivory">
            <PujaSamagri />
        </main>
    )
}
