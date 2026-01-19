import type { Metadata } from "next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking/booking-form"

export const metadata: Metadata = {
  title: "Аяллаа захиалах | NomadWay Аялал",
  description: "Монголын мартагдашгүй аяллын захиалгаа бүрдүүлээрэй.",
}

export default function BookingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<BookingPageSkeleton />}>
          <BookingForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

function BookingPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="h-8 w-48 animate-pulse rounded bg-muted" />
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="h-64 animate-pulse rounded-xl bg-muted" />
          <div className="h-64 animate-pulse rounded-xl bg-muted" />
        </div>
        <div className="h-96 animate-pulse rounded-xl bg-muted" />
      </div>
    </div>
  )
}
