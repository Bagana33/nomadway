import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToursPageContent } from "@/components/tours/tours-page-content"

export const metadata: Metadata = {
  title: "Аяллууд | NomadWay Аялал",
  description: "Монголын шилдэг аяллуудыг судлаарай. Говь цөлийн аяллаас эхлээд нүүдэлчдийн соёлын туршлага хүртэл.",
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
