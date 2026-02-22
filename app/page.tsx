import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Benefits } from "@/components/benefits"
import { ImpactComparison } from "@/components/impact-comparison"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Portfolio } from "@/components/portfolio"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Benefits />
      <ImpactComparison />
      <Portfolio/>
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
