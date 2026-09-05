import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Servicios from '../components/Servicios'
import Acerca from '../components/Acerca'
import Porque from '../components/Porque'
import Productos from '../components/Productos'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Servicios />
      <Acerca />
      <Porque />
      <Productos />
      <CTA />
      <Footer />
    </main>
  )
}
