"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { testimonials } from "@/lib/data"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
            Сэтгэгдлүүд
          </span>
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Аялагчдын маань сэтгэгдэл
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="mx-auto max-w-4xl">
          <Card className="relative overflow-hidden border-0 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <Quote className="mb-6 h-10 w-10 text-accent" />
              
              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[activeIndex].rating
                        ? "fill-accent text-accent"
                        : "text-primary-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <blockquote className="mb-8 text-lg text-primary-foreground md:text-xl lg:text-2xl">
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-primary-foreground">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-sm text-primary-foreground/70">
                    {testimonials[activeIndex].country} • {testimonials[activeIndex].tourName}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="h-10 w-10 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Өмнөх сэтгэгдэл</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="h-10 w-10 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Дараагийн сэтгэгдэл</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pagination Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
              >
                <span className="sr-only">Сэтгэгдэл {index + 1} рүү очих</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
