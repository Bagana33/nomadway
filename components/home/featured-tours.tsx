import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TourCard } from "@/components/tour-card"
import { tours } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export function FeaturedTours() {
  const featuredTours = tours.slice(0, 3)

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Манай аяллууд
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Алдартай адал явдлууд
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Монголын хамгийн гайхамшигтай байгаль дундуур хөтлөх, 
              мартагдашгүй дурсамж бүтээх аяллууд.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0 bg-transparent">
            <Link href="/tours">
              Бүх аяллыг үзэх
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Tours Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  )
}
