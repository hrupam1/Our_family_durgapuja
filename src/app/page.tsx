import Hero from '@/components/Hero'
import dynamic from 'next/dynamic'

const ImageSlider = dynamic(() => import('@/components/ImageSlider'))
const Timeline = dynamic(() => import('@/components/Timeline'))
const DatesSchedule = dynamic(() => import('@/components/DatesSchedule'))
const OurStoryPreview = dynamic(() => import('@/components/OurStoryPreview'))
const BengaliChant = dynamic(() => import('@/components/BengaliChant'))
const Countdown = dynamic(() => import('@/components/Countdown'))

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <Countdown />
            <DatesSchedule />
            <ImageSlider />
            <Timeline />
            <OurStoryPreview />
            <BengaliChant />
        </div>
    )
}
