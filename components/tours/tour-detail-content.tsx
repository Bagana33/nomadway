"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Clock,
  Users,
  Star,
  MapPin,
  Calendar,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Mountain,
  Utensils,
  Home,
} from "lucide-react"
import type { Tour } from "@/lib/types"

interface TourDetailContentProps {
  tour: Tour
}

export function TourDetailContent({ tour }: TourDetailContentProps) {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0)

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % tour.images.length)
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + tour.images.length) % tour.images.length)
  }

  const difficultyColors: Record<string, string> = {
    easy: "bg-green-500/10 text-green-600 dark:text-green-400",
    moderate: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    challenging: "bg-red-500/10 text-red-600 dark:text-red-400",
  }

  const categoryColors: Record<string, string> = {
    adventure: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    cultural: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    nature: "bg-green-500/10 text-green-600 dark:text-green-400",
    luxury: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/tours" className="hover:text-foreground">Tours</Link>
            <span>/</span>
            <span className="text-foreground">{tour.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="relative mb-8 overflow-hidden rounded-xl">
              <div className="relative aspect-[16/10]">
                <Image
                  src={tour.images[activeImageIndex] || "/placeholder.svg"}
                  alt={tour.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {tour.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                  
                  {/* Thumbnails */}
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    {tour.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === activeImageIndex
                            ? "w-6 bg-white"
                            : "w-2 bg-white/50 hover:bg-white/70"
                        }`}
                      >
                        <span className="sr-only">Image {index + 1}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Title & Badges */}
            <div className="mb-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge className={categoryColors[tour.category]}>
                  {tour.category.charAt(0).toUpperCase() + tour.category.slice(1)}
                </Badge>
                <Badge className={difficultyColors[tour.difficulty]}>
                  {tour.difficulty.charAt(0).toUpperCase() + tour.difficulty.slice(1)}
                </Badge>
              </div>
              <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {tour.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  <span>{tour.startLocation}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{tour.duration} days</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  <span>Max {tour.maxGroupSize} people</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span>{tour.rating}</span>
                  <span className="text-muted-foreground/60">({tour.reviewCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="included">What&apos;s Included</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="mb-3 text-xl font-semibold text-foreground">About This Tour</h2>
                    <p className="leading-relaxed text-muted-foreground">{tour.description}</p>
                  </div>

                  <div>
                    <h2 className="mb-3 text-xl font-semibold text-foreground">Highlights</h2>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {tour.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="itinerary" className="mt-6">
                <div className="space-y-4">
                  {tour.itinerary.map((day) => (
                    <Card key={day.day}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                            {day.day}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{day.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-muted-foreground">{day.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Utensils className="h-4 w-4" />
                            <span className="capitalize">{day.meals.join(", ")}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Home className="h-4 w-4" />
                            <span>{day.accommodation}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="included" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                      <Check className="h-5 w-5 text-green-500" />
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-2">
                      {tour.included.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                      <X className="h-5 w-5 text-red-500" />
                      Not Included
                    </h3>
                    <ul className="space-y-2">
                      {tour.notIncluded.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-6">
                  <span className="text-sm text-muted-foreground">From</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">${tour.price}</span>
                    <span className="text-muted-foreground">/person</span>
                  </div>
                </div>

                <div className="mb-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{tour.duration} days</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Group Size</span>
                    <span className="font-medium">Max {tour.maxGroupSize}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Difficulty</span>
                    <span className="font-medium capitalize">{tour.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Start/End</span>
                    <span className="font-medium">{tour.startLocation}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{tour.availableDates.length} dates available</span>
                  </div>
                </div>

                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                  <Link href={`/booking?tour=${tour.slug}`}>
                    Book This Tour
                  </Link>
                </Button>

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Free cancellation up to 30 days before departure
                </p>

                {/* Trust Badges */}
                <div className="mt-6 border-t border-border pt-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Mountain className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Expert Local Guides</p>
                      <p className="text-xs">All guides speak fluent English</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
