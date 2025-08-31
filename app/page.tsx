import Hero from "@/components/hero"
import Features from "@/components/features"
import Modes from "@/components/modes"
import ConsultationForm from "@/components/consultation-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <Modes />
      <ConsultationForm />
      <Footer />
    </main>
  )
}
