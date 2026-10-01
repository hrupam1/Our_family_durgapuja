import Members from '@/components/Members'

export const metadata = {
    title: 'Members | Our Family Durga Puja',
    description: 'Members of the Haldar Family involved in our Durga Puja.',
}

export default function MembersPage() {
    return (
        <main className="min-h-screen bg-puja-dark selection:bg-puja-gold/30 selection:text-puja-ivory">
            <Members />
        </main>
    )
}
