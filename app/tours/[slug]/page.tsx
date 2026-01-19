import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TourDetailContent } from "@/components/tours/tour-detail-content"
import { tours, getTourBySlug } from "@/lib/data"

interface TourPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }))
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const { slug } = await params
  const tour = getTourBySlug(slug)

  if (!tour) {
    return {
      title: "Аялал олдсонгүй | NomadWay Аялал",
    }
  }

  return {
    title: `${tour.name} | NomadWay Аялал`,
    description: tour.shortDescription,
    openGraph: {
      title: tour.name,
      description: tour.shortDescription,
      images: tour.images,
    },
  }
}

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params
  const tour = getTourBySlug(slug)

  if (!tour) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <TourDetailContent tour={tour} />
      </main>
      <Footer />
    </div>
  )
}
