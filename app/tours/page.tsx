import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToursPageContent } from "@/components/tours/tours-page-content"

export const metadata: Metadata = {
  title: "Tours | NomadWay Travel",
  description: "Explore our curated collection of Mongolian adventures. From Gobi Desert expeditions to cultural immersions with nomadic families.",
}

export default function ToursPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ToursPageContent />
      </main>
      <Footer />
    </div>
  )
}
