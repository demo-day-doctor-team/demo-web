import Hero from "@/components/hero"
import Features from "@/components/features"
import Modes from "@/components/modes"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import ConsultationForm from "@/components/consultation-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Features />
      <Modes />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ConsultationForm />
      <Footer />
    </main>
  )
}
