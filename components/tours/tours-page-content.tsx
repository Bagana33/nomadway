"use client"

import * as React from "react"
import { TourCard } from "@/components/tour-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { tours, additionalServices } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, SlidersHorizontal, X, Plane, Languages, Car, Camera } from "lucide-react"

const categories = [
  { value: "all", label: "Бүх ангилал" },
  { value: "adventure", label: "Адал явдал" },
  { value: "cultural", label: "Соёл" },
  { value: "nature", label: "Байгаль" },
  { value: "luxury", label: "Тансаг" },
]

const difficulties = [
  { value: "all", label: "Бүх түвшин" },
  { value: "easy", label: "Хялбар" },
  { value: "moderate", label: "Дунд" },
  { value: "challenging", label: "Хэцүү" },
]

const serviceIcons: Record<string, React.ElementType> = {
  "airport-pickup": Plane,
  "translator": Languages,
  "luxury-vehicle": Car,
  "photography": Camera,
}

export function ToursPageContent() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [category, setCategory] = React.useState("all")
  const [difficulty, setDifficulty] = React.useState("all")
  const [priceRange, setPriceRange] = React.useState([0, 2000])
  const [durationRange, setDurationRange] = React.useState([1, 14])

  const filteredTours = tours.filter((tour) => {
    const matchesSearch = tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = category === "all" || tour.category === category
    const matchesDifficulty = difficulty === "all" || tour.difficulty === difficulty
    const matchesPrice = tour.price >= priceRange[0] && tour.price <= priceRange[1]
    const matchesDuration = tour.duration >= durationRange[0] && tour.duration <= durationRange[1]

    return matchesSearch && matchesCategory && matchesDifficulty && matchesPrice && matchesDuration
  })

  const clearFilters = () => {
    setSearchQuery("")
    setCategory("all")
    setDifficulty("all")
    setPriceRange([0, 2000])
    setDurationRange([1, 14])
  }

  const hasActiveFilters = searchQuery || category !== "all" || difficulty !== "all" || 
    priceRange[0] !== 0 || priceRange[1] !== 2000 || durationRange[0] !== 1 || durationRange[1] !== 14

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div className="space-y-2">
        <Label htmlFor="search">Хайлт</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="search"
            placeholder="Аялал хайх..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Category */}
      <div className="space-y-2">
        <Label>Ангилал</Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Ангилал сонгох" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Difficulty */}
      <div className="space-y-2">
        <Label>Хүндийн зэрэг</Label>
        <Select value={difficulty} onValueChange={setDifficulty}>
          <SelectTrigger>
            <SelectValue placeholder="Хүндийн зэрэг сонгох" />
          </SelectTrigger>
          <SelectContent>
            {difficulties.map((diff) => (
              <SelectItem key={diff.value} value={diff.value}>
                {diff.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>Үнийн муж</Label>
          <span className="text-sm text-muted-foreground">
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={2000}
          step={50}
        />
      </div>

      {/* Duration Range */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>Үргэлжлэх хугацаа (хоног)</Label>
          <span className="text-sm text-muted-foreground">
            {durationRange[0]} - {durationRange[1]} хоног
          </span>
        </div>
        <Slider
          value={durationRange}
          onValueChange={setDurationRange}
          min={1}
          max={14}
          step={1}
        />
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
          <X className="mr-2 h-4 w-4" />
          Бүх шүүлтүүрийг арилгах
        </Button>
      )}
    </div>
  )

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Манай аяллуудыг судлаарай
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Монголын хамгийн гайхамшигтай байгаль дундуур хөтлөх аяллаа олж, өөртөө
            тохирсон аяллыг сонгоорой.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Desktop Filters Sidebar */}
            <aside className="hidden w-72 shrink-0 lg:block">
              <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
                <h2 className="mb-6 text-lg font-semibold">Шүүлтүүр</h2>
                <FilterContent />
              </div>
            </aside>

            {/* Tours Grid */}
            <div className="flex-1">
              {/* Mobile Filter Button & Results Count */}
              <div className="mb-6 flex items-center justify-between">
                <p className="text-muted-foreground">
                  {filteredTours.length} аялал олдлоо
                </p>
                
                {/* Mobile Filter Sheet */}
                <Sheet>
                  <SheetTrigger asChild className="lg:hidden">
                    <Button variant="outline" size="sm">
                      <SlidersHorizontal className="mr-2 h-4 w-4" />
                      Шүүлтүүр
                      {hasActiveFilters && (
                        <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                          !
                        </span>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px]">
                    <SheetHeader>
                      <SheetTitle>Шүүлтүүр</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Tours Grid */}
              {filteredTours.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                  {filteredTours.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-border bg-card p-12 text-center">
                  <p className="text-lg font-medium text-foreground">Аялал олдсонгүй</p>
                  <p className="mt-2 text-muted-foreground">
                    Боломжит аяллыг олохын тулд шүүлтүүрээ өөрчилж үзнэ үү.
                  </p>
                  <Button variant="outline" onClick={clearFilters} className="mt-4 bg-transparent">
                    Шүүлтүүрийг арилгах
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="border-t border-border bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
            Туршлагаа нэмэгдүүлээрэй
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service) => {
              const Icon = serviceIcons[service.id] || Plane
              return (
                <Card key={service.id} className="text-center">
                  <CardHeader className="pb-2">
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2 text-sm text-muted-foreground">{service.description}</p>
                    <p className="font-semibold text-accent">
                      ${service.price}
                      {service.priceType === 'per-day' && '/өдөр'}
                      {service.priceType === 'per-person' && '/хүн'}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
