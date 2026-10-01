import Scripts from '@/components/Scripts'

export const metadata = {
    title: 'Scripts & Poems | Our Family Durga Puja',
    description: 'Beautiful Bengali poems and verses celebrating Durga Puja.',
}

export default function ScriptsPage() {
    return (
        <main className="min-h-screen bg-puja-dark selection:bg-puja-gold/30 selection:text-puja-ivory">
            <Scripts />
        </main>
    )
}
