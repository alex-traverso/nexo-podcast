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
import { Newsletter } from '../../components/Newsletter'
import Contact from '../../components/Contact'

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
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  )
}
