'use client'
import Image from 'next/image'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { Banner } from '../../components/Banner'
import SocialMedia from '../../components/SocialMedia'
import { LatestChapters } from '../../components/LatestChapters'
import FeaturedClips from '../../components/FeaturedClips'
import Sponsors from '../../components/Sponsors'
import AboutUs from '../../components/AboutUs'

export default function Home() {
  return (
    <main id='home' className='bg-darkGrey'>
      <NavBar />
      <Banner />
      <SocialMedia />
      <LatestChapters />
      <FeaturedClips />
      <Sponsors />
      <AboutUs />
      <Footer />
    </main>
  )
}
