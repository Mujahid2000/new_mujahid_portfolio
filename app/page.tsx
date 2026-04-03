import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stack from '@/components/Stack'
import Work from '@/components/Work'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Work />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
