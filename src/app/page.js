'use client'
import { Banner } from '../../components/Banner'
import SocialMedia from '../../components/SocialMedia'
import { LatestChapters } from '../../components/LatestChapters'
import FeaturedClips from '../../components/FeaturedClips'
import Sponsors from '../../components/Sponsors'
import AboutUs from '../../components/AboutUs'
import { Newsletter } from '../../components/Newsletter'
import Contact from '../../components/Contact'

export default function Home() {
  return (
    <main id='home' className='bg-darkGrey'>
      <Banner />
      <SocialMedia />
      <LatestChapters />
      <FeaturedClips />
      <AboutUs />
      <Sponsors />
      <Newsletter />
      <Contact />
    </main>
  )
}
